import Breadcrumb from "@/components/about/Breadcrumb"
import MissionVision from "@/components/about/MissionVision"
import about from "@/assets/images/aboutbg.webp"
import Partners from "@/components/about/Partners"
const MissionVisionPage = () => {
  return (
    <>
      <Breadcrumb Heading={"Our Mission & Vision "} bg={about} path={"About IGCSM"} />
      <MissionVision />
      <Partners  />
    </>
  )
}

export default MissionVisionPage