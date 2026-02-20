import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import FaqBody from '@/components/FaqBody'
const Faq = () => {
    return (
        <>
            <Breadcrumb Heading={"FAQ"} bg={about} path={"FAQ"} />
            <FaqBody />
        </>
    )
}

export default Faq