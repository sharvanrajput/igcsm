import React from 'react'

import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import JobUpdateBody from '@/components/JobUpdateBody'
const JobUpdate = () => {
    return (
        <>
            <Breadcrumb Heading={"Job Updates"} bg={about} path={"Job Updates"} />
            <JobUpdateBody />
        </>
    )
}

export default JobUpdate