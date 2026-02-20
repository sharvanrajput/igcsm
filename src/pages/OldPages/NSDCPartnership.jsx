


import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import NSDCLogos from "@/components/oldpageComp/NSDCLogos"

const NSDCPartnership = () => {
    return (
        <>
            <Breadcrumb Heading={"Enquriy"} bg={about} path={"Enquiry"} />
            <NSDCLogos />
        </>
    )
}

export default NSDCPartnership

