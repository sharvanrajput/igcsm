import Breadcrumb from '@/components/about/Breadcrumb'
import React from 'react'
import team from "@/assets/images/team.webp"
import TeamCard from '@/components/about/TeamCard'

const Team = () => {
    return (
        <>
            <Breadcrumb Heading={"Team"} bg={team} path={"Team"} />
            <TeamCard />
        </>
    )
}

export default Team