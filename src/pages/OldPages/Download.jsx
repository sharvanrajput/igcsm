


import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import DownloadBody from '@/components/oldpageComp/DownloadBody'
const Download = () => {
    return (
        <>
            <Breadcrumb Heading={"Download"} bg={about} path={"Downlaod"} />
            <DownloadBody />
        </>
    )
}

export default Download