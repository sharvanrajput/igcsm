import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import Breadcrumb from '@/components/about/Breadcrumb'
import GalleryBody from '@/components/GalleryBody'
const Gallery = () => {
    return (
        <>
            <Breadcrumb Heading={"Gallery"} bg={about} path={"Gallery"} />
             <GalleryBody />
        </>
    )
}

export default Gallery