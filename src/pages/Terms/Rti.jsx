import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '../../components/about/Breadcrumb'
import RtiBody from '@/components/terms/RtiBody'
const Rti = () => {
    return (
        <>
            <Breadcrumb Heading={"RTI"} bg={about} path={"RTI"} />
            <RtiBody />
        </>
    )
}

export default Rti