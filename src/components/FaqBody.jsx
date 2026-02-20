import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import faq from "@/assets/images/faq.webp"

const faqItems = [
    {
        value: "one",
        question: "How can I apply for admission to the institute?",
        answer: "Visit our website, follow admission instructions, meet eligibility requirements, and submit your application online or at the centre.",
    },
    {
        value: "two",
        question: "What facilities does the campus provide?",
        answer: "Our campus offers cutting-edge facilities. Explore more on the Campus Facilities page for complete details on labs, classrooms, and amenities.",
    },
    {
        value: "three",
        question: "What courses does the institute offer?",
        answer: "Explore diverse courses across multiple disciplines. Find detailed descriptions and eligibility criteria in the Courses section on our website.",
    },
    {
        value: "four",
        question: "Are installment payment plans available?",
        answer: "Yes, we offer flexible installment payment plans. Contact the Finance Office for assistance and to discuss the available options suited to you.",
    },
]

const FaqBody = () => {
    return (
        <section className="py-14 sm:py-20 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section heading */}
                <div className="text-center mb-10">
                    <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">
                        Got Questions?
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Accordion */}
                    <div data-aos="fade-right" data-aos-duration="600">
                        <Accordion
                            type="single"
                            collapsible
                            defaultValue="one"
                            className="w-full space-y-3"
                        >
                            {faqItems.map((item, index) => (
                                <AccordionItem
                                    key={item.value}
                                    value={item.value}
                                    className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-orange-200 hover:shadow-md data-[state=open]:border-orange-400 data-[state=open]:shadow-md"
                                >
                                    <AccordionTrigger className="px-5 py-4 text-left text-sm sm:text-base font-semibold text-gray-800 hover:text-orange-500 hover:no-underline transition-colors duration-200 [&[data-state=open]]:text-orange-500 group">
                                        <div className="flex items-center gap-3 w-full pr-2">
                                            {/* Number badge */}
                                            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-50 border border-orange-200 text-orange-500 text-xs font-bold flex items-center justify-center group-data-[state=open]:bg-orange-500 group-data-[state=open]:text-white group-data-[state=open]:border-orange-500 transition-colors duration-200">
                                                {index + 1}
                                            </span>
                                            <span>{item.question}</span>
                                        </div>
                                    </AccordionTrigger>

                                    <AccordionContent className="px-5 pb-5 pt-0">
                                        <div className="ml-10 text-sm text-gray-600 leading-relaxed flex items-start gap-2.5">
                                            <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                                            <p>{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Image */}
                    <div data-aos="fade-left" data-aos-duration="600">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-orange-100">
                            <img
                                src={faq}
                                alt="FAQ illustration"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FaqBody