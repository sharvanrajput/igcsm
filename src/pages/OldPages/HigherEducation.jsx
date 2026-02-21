import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import HigherEducationBody from '@/components/oldpageComp/HigherEducationBody'

const HigherEducation = () => {
    return (
        <>
            <Breadcrumb Heading={"Higher Education"} bg={about} path={"Higher Education"} />
            <HigherEducationBody />
        </>
    )
}

export default HigherEducation