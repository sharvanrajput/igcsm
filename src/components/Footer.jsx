import React from 'react'
import logo from "@/assets/images/logo.webp"
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
    return (
        <footer class="text-white bg-black body-font">
            <div class="container   py-15 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div class="grid lg:grid-cols-5 md:grid-cols-3   -mb-10 md:mt-0 mt-10 md:text-left text-center">

                    <div class=" md:ps-10  shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div className="logo flex  flex-col gap-3 justifycenter md:items-start items-center">
                            <img src={logo} alt="Logo" className="w-[350px] h-auto" />
                            <p className="text-lg text-orange-500 font-bold">Desert Talent Finders </p>
                        </div>
                        <p class="mt-2 text-sm! text-white">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>

                    <div class="md:ps-10 ">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-lg mb-3">Quick links</h2>
                        <nav class="list-none mb-10">
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2 '> <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300 ">Home  </Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2 '>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs   hover:text-gray-300">About </Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs  hover:text-gray-300"> Contact</Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs    hover:text-gray-300">
                                Download</Link>
                            </li>
                             

                        </nav>
                    </div>
                    <div class="md:ps-10 ">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-lg mb-3">Quick links
                        </h2>
                        <nav class="list-none mb-10">
                             

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> WORKING WITH IGCSM</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> JOB SEEKER FAQ</Link>
                            </li>

                        </nav>
                    </div>
                    <div class=" md:ps-10">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-lg mb-3">Quick links</h2>
                        <nav class="list-none mb-10">
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> the IGCSM advantage</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> how we work</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> Industries</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> Recruitment & HR Solutions</Link>
                            </li>

                            

                        </nav>
                    </div>
                    <div class="md:ps-10 ">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-lg mb-3">IGCSM</h2>
                        <nav class="list-none mb-10">
                            
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> Who we are</Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> RESOURCES</Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300">careers @ IGCSM </Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300">EMPLOYER FAQ </Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                <FaAngleDoubleRight className='text-orange-500 size-4 me-1' />
                                <Link class="text-white text-xs hover:text-gray-300"> investors</Link>
                            </li>

                        </nav>
                    </div>
                </div>
            </div>
            <div class="bg-gray-900">
                <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p class="text-white text-sm text-center sm:text-left">© {new Date().getFullYear()}  Desert Talent Finders  || All Rights Reserved

                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                        <Link class="text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </Link>
                        <Link class="ml-3 text-white">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </Link>
                        <Link class="ml-3 text-white">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </Link>
                        <Link class="ml-3 text-white">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer