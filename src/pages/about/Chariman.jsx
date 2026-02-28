import Breadcrumb from '@/components/about/Breadcrumb'
import ChairmanMesage from '@/components/about/ChairmanMesage'
import React from 'react'
import chairman from "@/assets/images/sir.jpg"

const Chariman = () => {
  return (
    <>
      {/* <Breadcrumb Heading={"Chairman Message"} bg={chairman} path={"From Founder's Desk"} className='bg-top pb-30!' /> */}
      <div className="pt-30">

        <ChairmanMesage />
      </div>
    </>
  )
}

export default Chariman