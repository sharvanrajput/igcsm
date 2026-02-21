


import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import NSCDBody from "@/components/oldpageComp/NSCDBody"
import NSDCLogos from "@/components/oldpageComp/NSDCLogos"

const NSDCPartnership = () => {
    return (
        <>
            <Breadcrumb Heading={"Enquriy"} bg={about} path={"Enquiry"} />
            <NSCDBody />
            <NSDCLogos />
        </>
    )
}

export default NSDCPartnership

