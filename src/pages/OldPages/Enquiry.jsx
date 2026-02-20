import React from 'react'
 
import about from "@/assets/images/aboutbg.webp"
import EnquiryBody from '@/components/oldpageComp/EnquiryBody'
import Breadcrumb from '@/components/about/Breadcrumb'
const Enquiry = () => {
    return (
        <>
            <Breadcrumb Heading={"Enquriy"} bg={about} path={"Enquiry"} />
            <EnquiryBody />
        </>
    )
}

export default Enquiry