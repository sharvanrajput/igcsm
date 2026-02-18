import React from 'react'
import logo from "@/assets/images/logo.webp"
import { Link } from 'react-router-dom'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

const Footer = () => {
    return (
        <footer class="text-white bg-black body-font">
            <div class="container   pt-15 pb-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">

                <div class="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1   -mb-10 md:mt-0 mt-10 md:text-left text-center">

                    <div class=" md:ps-10 lg:col-span-2  shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <div className="logo flex  flex-col gap-3 justifycenter md:items-start items-center">
                            <img src={logo} alt="Logo" className="w-[250px] h-auto" />
                        </div>


                        <p class="my-5  text-white flex  gap-2 "> <IoLocationSharp className='flex-nowrap size-10 text-green-500 ' /> <span> IGCSM
                            424, 4th Floor, DLF Prime Tower, Okhla Industrial Area, Phase 1, New Delhi 110020 </span></p>
                        <p className="mt-2  text-white flex  gap-2">
                            <BiSolidPhoneCall className='flex-nowrap size-6 text-green-500 ' />
                            <span>
                                <Link href="tel:+919818841248">+91-9818-841-248</Link>
                                {" , "}
                                <Link href="tel:+919911065358">+91-9911-065-358</Link>
                            </span>
                        </p>

                    </div>

                    <div class="md:ps-10 ">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-2xl mb-3">Our Glance</h2>
                        <nav class="list-none mb-10">
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2 '> 
                                <Link class="text-white   hover:text-gray-300 ">Radio Ad  </Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2 '>
                                
                                <Link class="text-white     hover:text-gray-300">Tv News </Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white    hover:text-gray-300"> Newspaper Ad</Link>
                            </li>
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white     hover:text-gray-300">
                                    Video Ad</Link>
                            </li>


                        </nav>
                    </div>

                    <div class=" md:ps-10">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-2xl mb-3">Useful Link</h2>
                        <nav class="list-none mb-10">
                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300"> RTI</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300"> Disclaimer</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300"> Privacy Policy</Link>
                            </li>

                            <li className='hover:translate-x-3 transition-all duration-100 flex md:justify-start justify-center mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300">Terms & Conditions</Link>
                            </li>
                        </nav>
                    </div>

                    <div class="md:ps-10 ">
                        <h2 class="title-font font-medium text-orange-500 tracking-widest text-2xl mb-3">Quick Link</h2>
                        <nav class="list-none mb-10">

                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300">Coursese</Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                
                                <Link class="text-white   hover:text-gray-300"> FAQ</Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                
                                <Link class="text-white  hover:text-gray-300">Download </Link>
                            </li>
                            <li className='hover:translate-x-3  transition-all duration-100 md:justify-start justify-center flex mb-2'>
                                
                                <Link class="text-white  hover:text-gray-300">Support Us </Link>
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