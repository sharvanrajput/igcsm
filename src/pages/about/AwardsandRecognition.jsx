import about from "@/assets/images/aboutbg.webp"
import AwardsGallery from '@/components/about/AwardsGallery'
import Breadcrumb from '@/components/about/Breadcrumb'
const AwardsandRecognition = () => {
    return (
        <>
            <Breadcrumb Heading={"Awards & Recognition"} bg={about} path={"Awards & Recognition"} />
            <AwardsGallery />
        </>
    )
}

export default AwardsandRecognition