import React from 'react'

const Breadcrumb = ({ Heading, bg, path, className = "" }) => {
    return (
        <section
            className={`pb-20 pt-40 relative bg-cover bg-center ${className} `}
            style={{ backgroundImage: `  linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bg})` }}
        >
c
            <div className="container">

                <div className="text-center ">
                    <h1 className='text-5xl pb-5 bg-linear-to-r from-orange-500 to-orange-400 text-transparent bg-clip-text  font-semibold'>{Heading}</h1>
                    <p className='font-semibold text-white!'>HOME / {path} </p>
                </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf7f27a] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent" />

        </section>
    )
}

export default Breadcrumb