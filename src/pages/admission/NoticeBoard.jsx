import Breadcrumb from '@/components/about/Breadcrumb'
import React, { useEffect, useState } from 'react'
import about from "@/assets/images/aboutbg.webp"
import { DataTable } from '@/components/admission/DataTable'
import { announcementData, columns } from '@/components/admission/Columns.jsx'
import { useInView } from '@/components/about/ChairmanMesage'



const NoticeBoard = () => {

    const [headerRef, headerInView] = useInView();

    return (
        <>
            {/* <Breadcrumb Heading={"Notice Board"} bg={about} path={"notice board"} /> */}

            <section className='pt-30'>
                <div className="section-header">
                    <div
                        ref={headerRef}
                        className={`fade-up ${headerInView ? "visible" : ""}`}
                    >

                        <h2 className="main-title">
                            Notice    <em> Board</em>
                        </h2>
                        <div className="ornamental-divider">
                            <div className="ornamental-diamond" />
                            <div className="ornamental-diamond" style={{ width: 5, height: 5, opacity: 0.5 }} />
                            <div className="ornamental-diamond" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container  ">
                <div className="mx-auto px-5   pb-5 rounded-2xl shadow shadow-orange-500">
                    <DataTable columns={columns} data={announcementData} />
                </div>
            </div>
        </>
    )
}

export default NoticeBoard