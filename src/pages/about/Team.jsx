import Breadcrumb from '@/components/about/Breadcrumb'
import React from 'react'
import team from "@/assets/images/team.webp"
import TeamCard from '@/components/about/TeamCard'
import ImageGallery from '@/components/GalarySection'
import TeamSection from '@/components/TeamSecton'

const Team = () => {
    return (
        <>
            <Breadcrumb Heading={"Team"} bg={team} path={"Team"} />
            {/* <TeamCard /> */}
            <TeamSection />


        </>
    )
}

export default Team