


import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import HowToGetAffiliationBody from '@/components/oldpageComp/HowToGetAffiliationBody'
const HowToGetAffiliation = () => {
    return (
        <>
            <Breadcrumb Heading={"Enquriy"} bg={about} path={"Enquiry"} />
            <HowToGetAffiliationBody />
        </>
    )
}

export default HowToGetAffiliation