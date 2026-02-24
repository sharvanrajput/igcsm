import React, { useMemo } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import about from '@/assets/images/aboutbg.webp'
import Breadcrumb from '@/components/about/Breadcrumb'
import CourseSection from '@/components/CourseSection'
 

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

// ─── Build subcatCourse structure for CourseSection ──────────────────────────
const SUBCAT_ORDER = ['certification', 'diploma', 'advance-diploma', 'pg-diploma-course']

export const buildSubcatCourse = (categorySlug) => {
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

// ─── Courses Page ─────────────────────────────────────────────────────────────
const Courses = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const activeSlug = slug || ALL_CATEGORIES[0]?.slug

  const activeCategory = useMemo(
    () => ALL_CATEGORIES.find(c => c.slug === activeSlug) || ALL_CATEGORIES[0],
    [activeSlug]
  )

  const subcatCourse = useMemo(() => buildSubcatCourse(activeSlug), [activeSlug])

  const handleCategoryChange = (catSlug) => navigate(`/courses/${catSlug}`)

  return (
    <>
      <Breadcrumb
        Heading={activeCategory?.name || 'Courses'}
        bg={about}
        path={activeCategory?.name || 'Courses'}
      />

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex gap-6 items-start">

          {/* ── Sticky Category Sidebar (desktop only) ── */}
          <aside className="hidden lg:block shrink-0 w-56 sticky top-35 self-start">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                  Categories
                </p>
              </div>
              <ScrollArea className="h-[calc(100vh-13rem)]">
                <nav className="p-2 flex flex-col gap-0.5">
                  {ALL_CATEGORIES.map(cat => (
                    <CategoryNavItem
                      key={cat.slug}
                      cat={cat}
                      isActive={cat.slug === activeSlug}
                      onClick={() => handleCategoryChange(cat.slug)}
                    />
                  ))}
                </nav>
              </ScrollArea>
            </div>
          </aside>

          {/* ── Main Content ── */}
          <div className="flex-1 min-w-0">
            <CourseSection
              slug={activeSlug}
              categoryName={activeCategory?.name}
              subcatCourse={subcatCourse}
              allCategories={ALL_CATEGORIES}
              onCategoryChange={handleCategoryChange}
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default Courses