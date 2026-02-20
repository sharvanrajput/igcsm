import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const faqData = [
  {
    id: 1,
    question: "On receiving this offer, a prospective study centre should.",
    type: "list",
    content: [
      "Apply with complete details of self, premises, available hardware, and business plan.",
      "Application will be followed by interview with Director IGCSM and centre visit if needed.",
    ],
  },
  {
    id: 2,
    question: "Eligibility Criteria for IGCSM Study Centre",
    type: "list",
    content: [
      "Should be in business or a professional with entrepreneurial skills.",
      "Should be willing to invest in infrastructure.",
      "Commitment to provide quality training.",
      "Must accept IGCSM terms and procedures.",
    ],
  },
  {
    id: 3,
    question: "Infrastructure Requirement",
    type: "table",
    columns: ["Specification", "Metro", "Non Metro", "Tehsil", "Village"],
    rows: [
      { spec: "Area (Sq.Ft.)",      metro: "1500", nonMetro: "1000–1200", tehsil: "800–1000", village: "800–1000" },
      { spec: "No. of Class Rooms", metro: "2",    nonMetro: "2",         tehsil: "2",         village: "2"         },
      { spec: "Sitting Capacity",   metro: "20",   nonMetro: "15",        tehsil: "20",        village: "15"        },
      { spec: "Lab Room",           metro: "1",    nonMetro: "1",         tehsil: "1",         village: "1"         },
      { spec: "No. of Systems",     metro: "10",   nonMetro: "8",         tehsil: "6",         village: "5"         },
    ],
  },
  {
    id: 4,
    question: "Hardware Requirements",
    type: "list",
    content: [
      "Pentium server nodes as per IGCSM specification",
      "Internet compatible hardware",
      "Printer (Dot Matrix / Inkjet)",
      "UPS / Generator",
      "AC Unit",
    ],
  },
  {
    id: 5,
    question: "Manpower Requirement",
    type: "table",
    columns: ["Role", "Description"],
    rows: [
      { role: "Administrator/Manager",    desc: "Management skills and training experience"     },
      { role: "Faculty",                  desc: "Subject expertise and problem-solving skills"   },
      { role: "Counsellor/Receptionist",  desc: "Communication skills and course knowledge"      },
      { role: "Marketing Executive",      desc: "Experienced with good communication"            },
      { role: "Office Boys",              desc: "Disciplined & experienced"                      },
    ],
  },
  {
    id: 6,
    question: "Profitability of Operations",
    type: "text",
    content:
      "Study centre approval depends on market potential and student demand. Operational economics discussed individually.",
  },
  {
    id: 7,
    question: "Expectation From the Affiliated Study Centre",
    type: "text",
    content:
      "Centre should be at prime location with classrooms, lab, reception, proper ventilation and lighting.",
  },
  {
    id: 8,
    question: "By way of Equipment and Facilities",
    type: "text",
    content:
      "Centre should have computers, equipment, software, and library with books and periodicals as prescribed by IGCSM.",
  },
  {
    id: 9,
    question: "Operational Manual Guidelines",
    type: "list",
    content: [
      "Internal systems and procedures",
      "External interface",
      "Coordination",
      "Classes and practical",
      "Examination procedure",
      "Certificate issue procedures",
    ],
  },
  {
    id: 10,
    question: "Affiliation",
    type: "list",
    content: [
      "Centre must follow IGCSM rules and syllabus",
      "Advance non-refundable affiliation fee required",
    ],
  },
  {
    id: 11,
    question: "Note",
    type: "list",
    content: [
      "Affiliation fees are non-refundable",
      "Renewal before 15 January with ₹6000 fee",
      "Affiliation form costs ₹250",
    ],
  },
]

const HowToGetAffiliationBody = () => {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="container">

        {/* Section heading */}
        <div className="mb-10 text-center">
          <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">
            Know More
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-200 hover:border-orange-200 hover:shadow-md data-[state=open]:border-orange-400 data-[state=open]:shadow-md"
            >
              {/* Trigger */}
              <AccordionTrigger className="px-5 py-4 text-left text-sm sm:text-base font-semibold text-gray-800 hover:text-orange-500 hover:no-underline transition-colors duration-200 [&[data-state=open]]:text-orange-500 group">
                <div className="flex items-center gap-3 w-full pr-2">
                  {/* Number badge */}
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-orange-50 border border-orange-200 text-orange-500 text-xs font-bold flex items-center justify-center group-data-[state=open]:bg-orange-500 group-data-[state=open]:text-white group-data-[state=open]:border-orange-500 transition-colors duration-200">
                    {index + 1}
                  </span>
                  <span>{faq.question}</span>
                </div>
              </AccordionTrigger>

              {/* Content */}
              <AccordionContent className="px-5 pb-5 pt-0">
                <div className="ml-10 text-sm text-gray-600 leading-relaxed">

                  {/* TEXT */}
                  {faq.type === "text" && (
                    <p className="text-gray-600">{faq.content}</p>
                  )}

                  {/* LIST */}
                  {faq.type === "list" && (
                    <ul className="space-y-2">
                      {faq.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-orange-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* TABLE */}
                  {faq.type === "table" && (
                    <div className="overflow-x-auto rounded-lg border border-gray-200 mt-1">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-orange-500 text-white">
                            {faq.columns.map((col, i) => (
                              <th
                                key={i}
                                className="px-4 py-2.5 text-left font-semibold text-xs tracking-wide whitespace-nowrap"
                              >
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {faq.rows.map((row, i) => (
                            <tr
                              key={i}
                              className={i % 2 === 0 ? "bg-white" : "bg-orange-50/50"}
                            >
                              {Object.values(row).map((val, j) => (
                                <td
                                  key={j}
                                  className={`px-4 py-2.5 border-t border-gray-100 ${
                                    j === 0
                                      ? "font-medium text-gray-700"
                                      : "text-gray-600"
                                  }`}
                                >
                                  {val}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  )
}

export default HowToGetAffiliationBody