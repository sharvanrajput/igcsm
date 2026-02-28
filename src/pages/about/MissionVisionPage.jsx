import Breadcrumb from "@/components/about/Breadcrumb"
import MissionVision from "@/components/about/MissionVision"
import about from "@/assets/images/mission.jpg"
import Partners from "@/components/about/Partners"
const MissionVisionPage = () => {
  return (
    <>
      {/* <Breadcrumb Heading={"Our Mission & Vision "} bg={about} path={"Our Mission & Vision"} /> */}
      <div className="pt-30">

        <MissionVision />
        <Partners />
      </div>
    </>
  )
}

export default MissionVisionPage