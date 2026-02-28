import about from "@/assets/images/award.jpg"
import AwardsGallery from '@/components/about/AwardsGallery'
import Breadcrumb from '@/components/about/Breadcrumb'
const AwardsandRecognition = () => {
    return (
        <>
            {/* <Breadcrumb Heading={"Awards & Recognition"} bg={about} path={"Awards & Recognition"} /> */}
            <div className="pt-30">

                <AwardsGallery />
            </div>
        </>
    )
}

export default AwardsandRecognition