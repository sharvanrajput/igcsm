import Breadcrumb from '@/components/about/Breadcrumb'
import React, { useEffect, useState } from 'react'
import about from "@/assets/images/aboutbg.webp"
import { DataTable } from '@/components/admission/DataTable'
import { announcementData, columns } from '@/components/admission/Columns.jsx'



const NoticeBoard = () => {


    return (
        <>
            <Breadcrumb Heading={"Notice Board"} bg={about} path={"notice board"} />

            <div className="container py-10 ">
                <div className="mx-auto px-5  pt-10 pb-5 rounded-2xl shadow shadow-orange-500">
                    <DataTable columns={columns} data={announcementData} />
                </div>
            </div>
        </>
    )
}

export default NoticeBoard