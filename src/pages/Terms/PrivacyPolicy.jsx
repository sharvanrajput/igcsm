import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '../../components/about/Breadcrumb'
import PrivacyPolicyBody from '@/components/terms/PrivacyPolicyBody'

const PrivacyPolicy = () => {
    return (
        <>
            <Breadcrumb Heading={"Privacy Policy"} bg={about} path={"Privacy Policy"} />
            <PrivacyPolicyBody />
        </>
    )
}

export default PrivacyPolicy