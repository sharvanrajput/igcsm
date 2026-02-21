import React from 'react'
import img from "@/assets/images/higher-edu.webp"
import { Link } from 'react-router-dom'

const HigherEducationBody = () => {
    return (
        <section className="bg-white py-12 px-4 font-sans">
            <div className="container">

                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Higher Education</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                </div>

                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mb-5">
                    <div>
                        <img src={img} className='w-[80%]  h-auto mx-auto' alt="" />
                    </div>
                    <div className='space-y-5'>
                        <p>
                            We are thrilled to share some momentous news with all of you. It is with great joy and pride that Indira Gandhi Computer Shaksharta Mission is sponsoring body of “Sikkim Global Technical University” an institution dedicated to fostering excellence in education, research, and innovation.
                        </p>
                        <p>
                            After months of meticulous planning and dedication, we are ready to embark on this remarkable journey of knowledge and discovery. Our University is committed to providing a dynamic and inclusive learning environment, where students can thrive academically and personally.
                        </p>
                        <p>
                            The Sikkim Global Technical University formed and incorporated by the Sikkim legislature through its official gazette and is recognized by the UGC Act 1956 under clause 2(f). The Sikkim Global Technical University is a futuristic model for young India that focuses on developing trends and skills. With substantial cooperation from the government, industry, and academia, technology-enabled learning has shifted the focus to skills-led education.
                        </p>
                        <strong>*Setting The Stage For Tomorrow's Workplace In Today's Classroom*</strong>
                    </div>

                </div>

                <p>Sikkim Global Technical University (SGTU) located in the beautiful valleys of Sikkim, known as Gateways of the Himalayas. We strive to uphold the values of integrity, ethics, and social responsibility to ensure our contribution in SDG 4 and Viksit and Akhand Bharat.</p>
                <p className='text-semibold'>For more information kindly visit at -</p>
                <Link to={"https://www.sikkimglobaltechnicaluniversity.co.in/"} className='text-semibold'>https://www.sikkimglobaltechnicaluniversity.co.in/</Link>
            </div>
        </section>
    )
}

export default HigherEducationBody