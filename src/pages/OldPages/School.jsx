import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import SchollBody from '@/components/oldpageComp/SchollBody'
const School = () => {
    return (
        <>
            <Breadcrumb Heading={"IGCSM Schools "} bg={about} path={"IGCSM Schools"} />
            <SchollBody />
        </>
    )
}

export default School