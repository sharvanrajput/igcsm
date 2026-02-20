

import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import DownloadBody from '@/components/oldpageComp/DownloadBody'
import OurApproval1 from "@/components/oldpageComp/OurApproval1"
import OurApproval2 from "@/components/oldpageComp/OurApproval2"
const OurApproval = () => {
    return (
        <>
            <Breadcrumb Heading={"Download"} bg={about} path={"Downlaod"} />
            <OurApproval1 />
            <OurApproval2 />
        </>
    )
}

export default OurApproval