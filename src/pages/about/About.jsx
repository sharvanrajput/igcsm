import Breadcrumb from '@/components/about/Breadcrumb'
import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Aboutus from '@/components/about/Aboutus'
import MissionVision from '@/components/about/MissionVision'
import Partners from '@/components/about/Partners'


const About = () => {
    return (
        <>
            {/* <Breadcrumb Heading={"About IGCSM"} bg={about} path={"About IGCSM"} /> */}
             <div className="pt-30">

            <Aboutus />
            <MissionVision />
            <Partners />
            </div>
        </>
    )
}

export default About