import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import GovernmentPartnershipBody from '@/components/oldpageComp/GovernmentPartnershipBody'
const GovernmentPartnership = () => {
    return (
        <>
            <Breadcrumb Heading={"Government Partnership"} bg={about} path={"Government Partnership"} />
            <GovernmentPartnershipBody />
        </>
    )
}

export default GovernmentPartnership