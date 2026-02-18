import React from 'react'

const Breadcrumb = ({ Heading, bg, path, className = "" }) => {
    return (
        <section
            className={`pb-20 pt-40 bg-cover bg-center ${className} `}
            style={{ backgroundImage: `  linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${bg})` }}
        >
            <div className="container">
                <div className="text-center ">
                    <h1 className='text-5xl pb-5 bg-linear-to-r from-amber-300 to-orange-500 text-transparent bg-clip-text  font-semibold'>{Heading}</h1>
                    <p className='font-semibold text-white!'>HOME / {path} </p>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb