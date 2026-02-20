import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import ContactBody from '@/components/Contactbody'
const Contact = () => {
    return (
        <>
            <Breadcrumb Heading={"Contact us"} bg={about} path={"Contact us"} />
            <ContactBody />
        </>
    )
}

export default Contact