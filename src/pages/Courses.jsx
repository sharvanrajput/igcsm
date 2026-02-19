import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import CourseSection from '@/components/CourseSection'
import { courseData } from '@/components/data/courseData '


const Courses = () => {
    const { slug } = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        // find the single matching category object
        const match = courseData.find(
            (ele) => ele.category.toLowerCase().replace(/\s+/g, '-') === slug
        )
        setCategory(match || null)
        console.log(match)
    }, [slug])

    return (
        <>
            {category && (
                <>
                    <Breadcrumb Heading={category.category} bg={about} path={category.category} />
                    <CourseSection
                        slug={slug}
                        categoryName={category.category}
                        icon={category.icon}
                        subcatCourse={category.subcategories}  // ✅ pass subcategories array
                    />
                </>
            )}
        </>
    )
}

export default Courses
