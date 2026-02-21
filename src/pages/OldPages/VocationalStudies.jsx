import React from 'react'

import about from "@/assets/images/aboutbg.webp"
import VocationalStudiesbody from '@/components/oldpageComp/VocationalStudiesbody'
import Breadcrumb from '@/components/about/Breadcrumb'
const VocationalStudies = () => {
    return (
        <>
            <Breadcrumb Heading={"Vocational Studies"} bg={about} path={"Vocational Studies"} />
            <VocationalStudiesbody />
        </>
    )
}

export default VocationalStudies