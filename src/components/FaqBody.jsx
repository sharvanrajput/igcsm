import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import faq from "@/assets/images/faq.webp"
const FaqBody = () => {
    return (
        <section className="py-12 sm:py-16 relative" >
            <div className="container ">
                <div className="grid lg:grid-cols-2 gap-4">
                    <div>
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="one"
                            className="w-full space-y-3"
                             data-aos="fade-right" data-aos-duration="600"
                        >
                            <AccordionItem value="one">
                                <AccordionTrigger className={"bg-orange-500 px-2 text-white text-lg"} >How can I apply for admission to the institute?</AccordionTrigger>
                                <AccordionContent className={"px-2 py-2 text-lg"}>
                                    Visit our website, follow admission instructions, meet eligibility, submit application.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="two" >
                                <AccordionTrigger className={"bg-orange-500 px-2 text-white text-lg "}> What facilities does the campus provide?</AccordionTrigger>
                                <AccordionContent className={"px-2 py-2 text-lg"}>
                                    Our campus offers cutting-edge facilities. Explore more on the Campus Facilities page for details.

                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="three" >
                                <AccordionTrigger className={"bg-orange-500 px-2 text-white text-lg "}>What courses does the institute offer? </AccordionTrigger>
                                <AccordionContent className={"px-2 py-2 text-lg"}>

                                    Explore diverse courses across [mention disciplines]. Find detailed
                                    descriptions in the Courses section on our website.

                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="four" >
                                <AccordionTrigger className={"bg-orange-500 px-2 text-white text-lg "}>  Are installment payment plans available?</AccordionTrigger>
                                <AccordionContent className={"px-2 py-2 text-lg"}>

                                    Yes, we offer installment payment plans. Contact the Finance Office for
                                    assistance and to discuss available options.

                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                    <div>
                        <img src={faq} data-aos="fade-left" data-aos-duration="600" className='w-full h-auto rounded-md' alt="faq" />

                    </div>

                </div>
            </div>
        </section>

    )
}

export default FaqBody