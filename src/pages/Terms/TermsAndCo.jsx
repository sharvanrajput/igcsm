import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '../../components/about/Breadcrumb'
import TermsBody from '@/components/terms/TermsBody'
const TermsAndCo = () => {
    return (
        <>
            <Breadcrumb Heading={"Terms & Condition"} bg={about} path={"Terms & Condition"} />
            <TermsBody />
        </>
    )
}

export default TermsAndCo