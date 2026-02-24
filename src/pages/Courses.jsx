import React, { useMemo, useState, useEffect, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import about from '@/assets/images/aboutbg.webp'
import Breadcrumb from '@/components/about/Breadcrumb'
import { courses } from '@/components/data/courses'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MdFilterListAlt } from 'react-icons/md'


// ─── Derive unique ordered categories from flat data ─────────────────────────
const buildCategories = () => {
    const seen = new Set()
    const list = []
    courses.forEach(c => {
        if (!seen.has(c.categoryslug)) {
            seen.add(c.categoryslug)
            list.push({ name: c.category, slug: c.categoryslug })
        }
    })
    return list
}

export const ALL_CATEGORIES = buildCategories()

const SUBCAT_ORDER = ['certification', 'diploma', 'advance-diploma', 'pg-diploma-course']
const SUBCAT_LABELS = {
    'certification': 'Certification',
    'diploma': 'Diploma',
    'advance-diploma': 'Advance Diploma',
    'pg-diploma-course': 'P. G. Diploma Course',
}

// ─── Build subcatCourse structure ─────────────────────────────────────────────
const buildSubcatCourse = (categorySlug) => {
    const filtered = courses.filter(c => c.categoryslug === categorySlug)
    const subcatMap = new Map()
    filtered.forEach(c => {
        if (!subcatMap.has(c.subcategoryslug)) {
            subcatMap.set(c.subcategoryslug, { id: c.subcategoryslug, name: c.subcategory, courses: [] })
        }
        subcatMap.get(c.subcategoryslug).courses.push({
            id: c.id,
            name: c.major,
            duration: c.duration,
            subcategory: c.subcategory,
            subcategoryslug: c.subcategoryslug,
        })
    })
    return SUBCAT_ORDER.map(k => subcatMap.get(k)).filter(Boolean)
}

// ─── Duration badge color ─────────────────────────────────────────────────────
const durationColor = (subcategoryslug) => {
    switch (subcategoryslug) {
        case 'certification': return 'bg-emerald-50 text-emerald-700 border-emerald-200'
        case 'diploma': return 'bg-blue-50 text-blue-700 border-blue-200'
        case 'advance-diploma': return 'bg-violet-50 text-violet-700 border-violet-200'
        case 'pg-diploma-course': return 'bg-orange-50 text-orange-700 border-orange-200'
        default: return 'bg-gray-50 text-gray-700 border-gray-200'
    }
}

// ─── Category Nav Item ────────────────────────────────────────────────────────
const CategoryNavItem = ({ cat, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={cn(
            'w-full flex items-start gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all duration-150 text-left group',
            isActive
                ? 'bg-orange-500 text-white font-semibold shadow-sm'
                : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700 font-medium'
        )}
    >
        <span className={cn(
            'mt-[7px] shrink-0 w-1.5 h-1.5 rounded-full transition-colors',
            isActive ? 'bg-white' : 'bg-orange-300 group-hover:bg-orange-400'
        )} />
        <span className="leading-snug">{cat.name}</span>
    </button>
)

// ─── Mobile Category Dropdown ─────────────────────────────────────────────────
const MobileCategoryDropdown = ({ activeSlug, onChange }) => {
    const activeCategory = ALL_CATEGORIES.find(c => c.slug === activeSlug)
    return (
        <div className="relative">
            <select
                value={activeSlug}
                onChange={e => onChange(e.target.value)}
                className="w-full appearance-none bg-white border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-medium text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 cursor-pointer"
            >
                {ALL_CATEGORIES.map(cat => (
                    <option key={cat.slug} value={cat.slug}>{cat.name}</option>
                ))}
            </select>
            <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </div>
    )
}

// ─── Search Bar ───────────────────────────────────────────────────────────────
const SearchBar = ({ value, onChange }) => (
    <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
        </span>
        <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Search courses..."
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-gray-200 rounded-xl shadow-sm
                 placeholder:text-gray-400 text-gray-700
                 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 transition"
        />
        {value && (
            <button
                onClick={() => onChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
            >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        )}
    </div>
)

// ─── Subcategory Tab Filter ───────────────────────────────────────────────────
const SubcatTabs = ({ available, activeTab, onChange }) => (
    <div className="flex flex-col gap-1">
        <button
            onClick={() => onChange('all')}
            className={cn(
                'w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                activeTab === 'all'
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700'
            )}
        >
            All Levels
        </button>
        {available.map(sub => (
            <button
                key={sub.id}
                onClick={() => onChange(sub.id)}
                className={cn(
                    'w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
                    activeTab === sub.id
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-700'
                )}
            >
                {sub.name}
            </button>
        ))}
    </div>
)

// ─── Course Table ─────────────────────────────────────────────────────────────
const CourseTable = ({ subcatCourse, searchQuery, activeTab, slug }) => {
    useEffect(() => {
        console.log("ceck for active slug", slug)
    }, [slug])
    // Filter courses based on search + active tab
    const filteredSubcats = useMemo(() => {
        return subcatCourse
            .filter(sub => activeTab === 'all' || sub.id === activeTab)
            .map(sub => ({
                ...sub,
                courses: sub.courses.filter(course =>
                    course.name.toLowerCase().includes(searchQuery.toLowerCase())
                ),
            }))
            .filter(sub => sub.courses.length > 0)
    }, [subcatCourse, searchQuery, activeTab])

    if (filteredSubcats.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <svg className="w-7 h-7 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p className="text-gray-500 font-medium">No courses found</p>
                <p className="text-gray-400 text-sm mt-1">Try adjusting your search or filters</p>
            </div>
        )
    }

    let srNo = 1
    return (
        <div className="space-y-6">
            {filteredSubcats.map(sub => (
                <div key={sub.id} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    {/* Subcategory Header */}
                    <div className="flex items-center gap-3 px-5 py-3.5 bg-linear-to-r from-orange-500 to-orange-400">
                        <span className="text-white font-semibold text-sm tracking-wide">{sub.name}</span>
                        <span className="ml-auto text-xs text-orange-100 font-medium">
                            {sub.courses.length} course{sub.courses.length !== 1 ? 's' : ''}
                        </span>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">S.No</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Course Name</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Duration</th>
                                    <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider w-32">Apply Now</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {sub.courses.map((course, idx) => (
                                    <tr
                                        key={course.id}
                                        className={cn(
                                            'transition-colors duration-100 hover:bg-orange-50/60 group',
                                            idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                                        )}
                                    >
                                        <td className="px-5 py-3.5 text-gray-400 text-xs font-medium">
                                            {String(srNo++).padStart(2, '0')}
                                        </td>
                                        <td className="px-5 py-3.5 text-gray-700 font-medium group-hover:text-orange-700 transition-colors">
                                            {course.name}
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className={cn(
                                                'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border',
                                                durationColor(course.subcategoryslug)
                                            )}>
                                                {course.duration}
                                            </span>
                                        </td>
                                        <td className="px-5 py-3.5 text-gray-700 font-medium group-hover:text-orange-700 transition-colors">
                                            <Button asChild className={"bg-orange-500 hover:bg-orange-600"}>
                                                <Link to={`/online-admission/${slug}`}  >
                                                    Apply now
                                                </Link>
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    )
}

// ─── Courses Page ─────────────────────────────────────────────────────────────
const Courses = () => {
    const { slug } = useParams()
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('')
    const [activeTab, setActiveTab] = useState('all')
    const [mobileSubcatOpen, setMobileSubcatOpen] = useState(false)

    const activeSlug = slug || ALL_CATEGORIES[0]?.slug

    const activeCategory = useMemo(
        () => ALL_CATEGORIES.find(c => c.slug === activeSlug) || ALL_CATEGORIES[0],
        [activeSlug]
    )

    const subcatCourse = useMemo(() => buildSubcatCourse(activeSlug), [activeSlug])

    // Reset filters when category changes
    useEffect(() => {
        setSearchQuery('')
        setActiveTab('all')
    }, [activeSlug])

    const handleCategoryChange = (catSlug) => navigate(`/courses/${catSlug}`)

    const totalCourses = useMemo(() => subcatCourse.reduce((acc, s) => acc + s.courses.length, 0), [subcatCourse])

    return (
        <>
            <Breadcrumb
                Heading={activeCategory?.name || 'Courses'}
                bg={about}
                path={activeCategory?.name || 'Courses'}
            />

            <div className="bg-gray-50 min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                    {/* ── Top Bar: Search + Mobile Category Dropdown ── */}
                    <div className="flex flex-col sm:flex-row gap-3 mb-6 lg:mb-8">
                        {/* Mobile category dropdown */}
                        <div className="lg:hidden flex-1">
                            <MobileCategoryDropdown activeSlug={activeSlug} onChange={handleCategoryChange} />
                        </div>

                        {/* Search */}
                        <div className="flex-1 lg:max-w-sm">
                            <SearchBar value={searchQuery} onChange={setSearchQuery} />
                        </div>

                        {/* ── Desktop Left Sidebar: Category Nav ── */}
                        <aside className="hidden lg:block shrink-0 w-56 sticky top-35 self-start">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline">
                                        <MdFilterListAlt />

                                        <p className="text-[11px] py-3 font-bold uppercase tracking-widest text-orange-500">
                                            {activeSlug}
                                        </p>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className={"p-0"}>
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-4">
                                        <div className="px-4 py-3 border-b border-gray-100">
                                            <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                                Categories
                                            </p>
                                        </div>
                                        <ScrollArea className="h-[calc(100vh-18rem)]">
                                            <nav className="p-2 flex flex-col gap-0.5">
                                                {ALL_CATEGORIES.map((cat, i) => (
                                                    <DropdownMenuGroup className={"p-0"} key={i}>

                                                        <DropdownMenuItem className={"p-0"}>
                                                            <CategoryNavItem
                                                                key={cat.slug}
                                                                cat={cat}
                                                                isActive={cat.slug === activeSlug}
                                                                onClick={() => handleCategoryChange(cat.slug)}
                                                            />
                                                        </DropdownMenuItem>
                                                    </DropdownMenuGroup>

                                                ))}
                                            </nav>
                                        </ScrollArea>
                                    </div>
                                </DropdownMenuContent>
                            </DropdownMenu>

                        </aside>

                        {/* Mobile subcat toggle */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setMobileSubcatOpen(p => !p)}
                                className="w-full flex items-center justify-between gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 shadow-sm"
                            >
                                <span>
                                    {activeTab === 'all' ? 'All Levels' : SUBCAT_LABELS[activeTab] || activeTab}
                                </span>
                                <svg className={cn('w-4 h-4 text-gray-400 transition-transform', mobileSubcatOpen && 'rotate-180')}
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {mobileSubcatOpen && (
                                <div className="mt-2 bg-white border border-gray-200 rounded-xl shadow-lg p-2">
                                    <SubcatTabs
                                        available={subcatCourse}
                                        activeTab={activeTab}
                                        onChange={(tab) => { setActiveTab(tab); setMobileSubcatOpen(false) }}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    {/* ── Course count info ── */}
                    <div className="flex items-center gap-3 mb-5">
                        <h2 className="text-lg font-bold text-gray-800">
                            {activeCategory?.name}
                        </h2>
                        <span className="px-2.5 py-0.5 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full">
                            {totalCourses} courses
                        </span>
                    </div>

                    {/* ── Main Layout ── */}
                    <div className="flex gap-6 items-start">



                        {/* ── Content Area ── */}
                        <div className="flex-1 min-w-0 flex gap-5 items-start">

                            {/* ── Desktop Right Sidebar: Subcategory Tabs ── */}
                            <aside className="hidden lg:block shrink-0 w-48 sticky top-35 self-start">
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-100">
                                        <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                                            Level
                                        </p>
                                    </div>
                                    <div className="p-2">
                                        <SubcatTabs
                                            available={subcatCourse}
                                            activeTab={activeTab}
                                            onChange={setActiveTab}
                                        />
                                    </div>
                                </div>
                            </aside>

                            {/* ── Course Table ── */}
                            <div className="flex-1 min-w-0">
                                <CourseTable
                                    subcatCourse={subcatCourse}
                                    searchQuery={searchQuery}
                                    activeTab={activeTab}
                                    slug={slug}

                                />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Courses