import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import TechnicalEducationBody from '@/components/oldpageComp/TechnicalEducationBody'
const TechnicalEducation = () => {
    return (
        <>
            <Breadcrumb Heading={"Technical education"} bg={about} path={"Technical education"} />
            <TechnicalEducationBody />
        </>
    )
}

export default TechnicalEducation