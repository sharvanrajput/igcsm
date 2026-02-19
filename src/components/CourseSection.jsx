import React, { useEffect, useState } from 'react'

// ─── Syllabus Modal ───────────────────────────────────────────────────────────
const SyllabusModal = ({ course, onClose }) => {
    if (!course) return null

    const points = course.syllabus
        .split(/(?:Month \d+:|,)/)
        .map(s => s.trim())
        .filter(Boolean)

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-start justify-between gap-4">
                    <div>
                        <p className="text-orange-100 text-xs font-medium uppercase tracking-widest mb-1">Syllabus</p>
                        <h3 className="text-white font-bold text-base leading-snug">{course.name}</h3>
                        <span className="inline-flex items-center gap-1 mt-2 bg-orange-400/40 text-orange-100 text-xs px-2.5 py-0.5 rounded-full">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        className="shrink-0 mt-0.5 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="px-6 py-5 max-h-[60vh] overflow-y-auto">
                    <ul className="space-y-2">
                        {points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                                <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold hover:opacity-90 active:scale-95 transition-all duration-150"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

// ─── Mobile Card (xs–sm screens) ─────────────────────────────────────────────
const MobileCourseCard = ({ course, idx, onSyllabus }) => (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-2">
            <div className="flex items-start gap-2 flex-1 min-w-0">
                <span className="text-xs text-gray-400 font-medium mt-0.5 shrink-0">{idx + 1}.</span>
                <h3 className="text-sm font-semibold text-gray-900 leading-snug">{course.name}</h3>
            </div>
            <span className="shrink-0 inline-flex items-center gap-1 bg-orange-50 text-orange-600 text-xs font-medium px-2 py-0.5 rounded-full border border-orange-100 whitespace-nowrap">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {course.duration}
            </span>
        </div>

        <div className="flex flex-wrap gap-1">
            {course.subjects.split(',').map((s, i) => (
                <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">{s.trim()}</span>
            ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 gap-2 flex-wrap">
            <div className="flex gap-4">
                {course.normalFee && (
                    <div>
                        <p className="text-xs text-gray-400">Normal</p>
                        <p className="text-sm font-bold text-gray-800">₹{course.normalFee}</p>
                    </div>
                )}
                {course.fastTrackFee && (
                    <div>
                        <p className="text-xs text-gray-400">Fast Track</p>
                        <p className="text-sm font-bold text-orange-600">₹{course.fastTrackFee}</p>
                    </div>
                )}
            </div>
            <button
                onClick={() => onSyllabus(course)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-300 text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-xs font-semibold transition-all duration-150"
            >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Syllabus
            </button>
        </div>
    </div>
)

// ─── Course Table + Cards (responsive) ───────────────────────────────────────
const CourseTable = ({ courses }) => {
    const [selectedCourse, setSelectedCourse] = useState(null)

    return (
        <>
            {/* Mobile: card list */}
            <div className="flex flex-col gap-3 md:hidden">
                {courses.map((course, idx) => (
                    <MobileCourseCard
                        key={idx}
                        course={course}
                        idx={idx}
                        onSyllabus={setSelectedCourse}
                    />
                ))}
            </div>

            {/* Desktop: table */}
            <div className="hidden md:block overflow-x-auto rounded-md border border-gray-200">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="bg-orange-50 border-b border-orange-100">
                            <th className="text-left px-4 py-3 text-orange-700 font-semibold w-8">#</th>
                            <th className="text-left px-4 py-3 text-orange-700 font-semibold">Course Name</th>
                            <th className="text-left px-4 py-3 text-orange-700 font-semibold whitespace-nowrap">Duration</th>
                            <th className="text-left px-4 py-3 text-orange-700 font-semibold">Subjects</th>
                             
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((course, idx) => (
                            <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50/40 transition-colors duration-150">
                                <td className="px-4 py-3 text-gray-400 font-medium">{idx + 1}</td>
                                <td className="px-4 py-3 font-semibold text-gray-900">{course.name}</td>
                                <td className="px-4 py-3">
                                    <span className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 text-xs font-medium px-2.5 py-1 rounded-full border border-orange-100 whitespace-nowrap">
                                        <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {course.duration}
                                    </span>
                                </td>
                                <td className="px-4 py-3">
                                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                                        {course.subjects.split(',').map((s, i) => (
                                            <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 whitespace-nowrap">
                                                {s.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                {/* <td className="px-4 py-3">
                                    {course.normalFee
                                        ? <span className="font-bold text-gray-800">₹{course.normalFee}</span>
                                        : <span className="text-gray-300">—</span>}
                                </td>
                                <td className="px-4 py-3">
                                    {course.fastTrackFee
                                        ? <span className="font-bold text-orange-600">₹{course.fastTrackFee}</span>
                                        : <span className="text-gray-300">—</span>}
                                </td> */}
                                <td className="px-4 py-3">
                                    <button
                                        onClick={() => setSelectedCourse(course)}
                                        className="whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-orange-300 text-orange-600 bg-orange-50 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-xs font-semibold transition-all duration-150"
                                    >
                                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Syllabus
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {selectedCourse && (
                <SyllabusModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
            )}
        </>
    )
}

// ─── Main CourseSection ───────────────────────────────────────────────────────
const CourseSection = ({ slug, categoryName, icon, subcatCourse }) => {
    const [activeTab, setActiveTab] = useState('all')
    const [sidebarOpen, setSidebarOpen] = useState(false)

    useEffect(() => {
        setActiveTab('all')
        setSidebarOpen(false)
    }, [slug])

    if (!subcatCourse || subcatCourse.length === 0) {
        return (
            <div className="min-h-[50vh] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-5xl mb-3">📚</div>
                    <p className="text-gray-500 font-medium">No courses available</p>
                    <p className="text-gray-400 text-sm mt-1">Check back soon for updates.</p>
                </div>
            </div>
        )
    }

    const totalCourses = subcatCourse.reduce((acc, sub) => acc + sub.courses.length, 0)
    const visibleSubcategories = activeTab === 'all'
        ? subcatCourse
        : subcatCourse.filter(sub => sub.id === activeTab)

    const handleTabClick = (id) => {
        setActiveTab(id)
        setSidebarOpen(false)
    }

    const NavButtons = () => (
        <nav className="flex flex-col p-2 gap-1">
            <button
                onClick={() => handleTabClick('all')}
                className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150 text-left ${
                    activeTab === 'all'
                        ? 'bg-orange-500 text-white shadow-sm'
                        : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                }`}
            >
                <span>All</span>
                <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                    activeTab === 'all' ? 'bg-orange-400 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                    {totalCourses}
                </span>
            </button>
            {subcatCourse.map(sub => (
                <button
                    key={sub.id}
                    onClick={() => handleTabClick(sub.id)}
                    className={`w-full flex items-center justify-between gap-2 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-150 text-left ${
                        activeTab === sub.id
                            ? 'bg-orange-500 text-white shadow-sm'
                            : 'text-gray-600 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                >
                    <span className="leading-snug">{sub.name}</span>
                    <span className={`shrink-0 text-xs px-1.5 py-0.5 rounded-full font-semibold ${
                        activeTab === sub.id ? 'bg-orange-400 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                        {sub.courses.length}
                    </span>
                </button>
            ))}
        </nav>
    )

    return (
        <div className="min-h-screen bg-gray-50">

            {/* ── Mobile filter bar ── */}
            <div className="md:hidden sticky top-0 z-20 bg-white border-b border-gray-200 shadow-sm px-4 py-3 flex items-center justify-between gap-3">
                <div>
                    <p className="text-xs text-gray-400">
                        Showing: <span className="font-semibold text-gray-700">
                            {activeTab === 'all' ? 'All Categories' : subcatCourse.find(s => s.id === activeTab)?.name}
                        </span>
                    </p>
                </div>
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-orange-300 text-orange-600 bg-orange-50 text-xs font-semibold"
                >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    Filter
                </button>
            </div>

            {/* ── Mobile drawer overlay ── */}
            {sidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 z-40 bg-black/40"
                    onClick={() => setSidebarOpen(false)}
                >
                    <div
                        className="absolute left-0 top-0 bottom-0 w-64 bg-white shadow-xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between px-4 pt-4 pb-2">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Categories</p>
                            <button onClick={() => setSidebarOpen(false)} className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <NavButtons />
                    </div>
                </div>
            )}

            {/* ── Main layout ── */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10 flex gap-6 items-start">

                {/* Desktop sidebar */}
                <aside className="hidden md:block sticky top-35 shrink-0 w-52 bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-4 pt-4 pb-2">
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Categories</p>
                    </div>
                    <NavButtons />
                </aside>

                {/* Content */}
                <main className="flex-1 min-w-0 space-y-8 md:space-y-10">
                    {visibleSubcategories.map(sub => (
                        <section key={sub.id}>
                            <div className="flex items-center gap-4 mb-4">
                                <div>
                                    <h2 className="text-base md:text-lg font-bold text-gray-900">{sub.name}</h2>
                                    <p className="text-xs text-gray-400 mt-0.5">
                                        {sub.courses.length} course{sub.courses.length !== 1 ? 's' : ''}
                                    </p>
                                </div>
                                <div className="flex-1 h-px bg-gray-200" />
                            </div>
                            <CourseTable courses={sub.courses} />
                        </section>
                    ))}
                </main>
            </div>
        </div>
    )
}

export default CourseSection