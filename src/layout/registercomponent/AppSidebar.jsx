import logo from "@/assets/images/logo.webp"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { Landmark, LogIn, UserPlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { HiOfficeBuilding } from "react-icons/hi"

import { Link, useLocation } from 'react-router-dom'


const student = [
    {
        name: "Student Registration",
        url: "/student",
        icon: UserPlus

    },
    {
        name: "Franchise Registration",
        url: "/franchise",
        icon: Landmark

    },
    {
        name: "Signi n",
        url: "/login",
        icon: LogIn
    },


]


export default function AppSidebar() {


    const route = useLocation()
    const [activeLink, setActiveLink] = useState()

    const { open } = useSidebar()


    useEffect(() => {
        setActiveLink(route.pathname)
    }, [route])


    return (
        <div>
            <Sidebar collapsible='icon' >
                <SidebarHeader className={"bg-orange-50 relative"} >
                    <Link to={"/"}>
                        <img src={logo} className='w-[50%]' alt="" />
                    </Link>
                </SidebarHeader>
                <SidebarContent className={"bg-orange-50"} >

                    <SidebarGroup >
                        <SidebarGroupLabel >

                            Student

                        </SidebarGroupLabel>
                        <SidebarGroupContent className={"space-y-1"}>

                            {student.map((page) => (
                                <SidebarMenuItem key={page.name}   >
                                    <SidebarMenuButton asChild className={`  ${activeLink == page.url ? "bg-orange-500! text-white hover:text-white " : "bg-transparent text-black"}`}>
                                        <Link to={page.url}>
                                            <page.icon size={40} />
                                            <span>{page.name}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarGroupContent>

                    </SidebarGroup>



                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </div >
    )
}


