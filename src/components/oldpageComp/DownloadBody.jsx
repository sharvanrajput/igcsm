 
import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const downloads = [
  {
    label: "AFFILIATION FORM",
    href: "/downloads/affiliation-form.pdf",
  },
  {
    label: "AGREEMENT OF AFFILIATION 2024",
    href: "/downloads/agreement-of-affiliation-2024.pdf",
  },
  {
    label: "OPERATION MANUAL",
    href: "/downloads/operation-manual.pdf",
  },
];



const DownloadBody = () => {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-orange-500 font-semibold text-xs tracking-widest uppercase mb-2">
            Resources
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Download</h2>
          <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {downloads.map((item) => (
            <a
              key={item.label}
              href={item.href}
              download
              className="group flex flex-col items-center gap-5 bg-white border border-gray-200 rounded-2xl px-6 py-10
                         shadow-sm hover:shadow-lg hover:border-orange-300 hover:shadow-orange-100
                         transition-all duration-300 cursor-pointer"
            >
              {/* Icon wrapper */}
              <div className="flex items-center justify-center w-24 h-24
                              bg-orange-50 rounded-2xl border border-orange-100
                              group-hover:bg-orange-100 group-hover:border-orange-300
                              transition-colors duration-300">
                <FaFilePdf className="text-orange-500 group-hover:text-orange-600 transition-colors duration-300" size={52} />
              </div>

              {/* Label */}
              <p className="text-center text-xs font-bold tracking-widest uppercase text-gray-600
                            group-hover:text-orange-500 transition-colors duration-200 leading-snug">
                {item.label}
              </p>

              <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold text-orange-500
                               border border-orange-200 bg-orange-50 px-4 py-1.5 rounded-full
                               group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500
                               transition-all duration-200">
                <HiDownload className="w-3.5 h-3.5" />
                Download
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DownloadBody;