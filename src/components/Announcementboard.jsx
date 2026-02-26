import { useState, useEffect } from "react";

const announcements = [
    { id: 1, text: "मुरादाबाद प्रदर्शनी मेला में उपस्थिति", link: "https://igcsm.com/gallery.php" },
    { id: 2, text: "कांठ में रोजगार मेले में ढाई सौ अभ्यार्थियों का किया गया चयन ", link: "https://govitikanth.edu.in/newsandupdates.html" },
    { id: 3, text: "Selection of 39 Candidates - Sardhana Kaushal Vikash Center", link: "https://igcsm.com/" },
    { id: 4, text: "Campus drive is going on at Muzaffarnagar (DDUGKY and UPSDM) ", link: "https://igcsm.com/" },
    { id: 5, text: "Suspended Authorized Learning Centres (ALCs) Sep 2023 Order", link: "https://igcsm.com/" },
];


const circulars = [
    { id: 1, text: "Suspended Authorized Learning Centres (ALCs) Sep 2023 Order", link: "click here" },
    { id: 1, text: "Campus drive is going on at Muzaffarnagar(DDUGKY and UPSDM) ", link: "click here" },
    { id: 1, text: "Selection of 39 Candidates - Sardhana Kaushal Vikash Center ", link: "click here" },
    { id: 1, text: "IGCSM RPL New Target - 500 - in Apperal & Home Furnishing and Furniture & Fittings at Aligarh UP", link: "click here" },
    { id: 1, text: "CIRCLAR 2 ", link: "click here" },
];





function MarqueeColumn({ items, bgClass, textColor, linkColor, title, titleBg, arrowColor }) {
    const doubled = [...items];

    return (
        <div className={`relative flex flex-col overflow-hidden rounded-xl ${bgClass} shadow-xl`} style={{ minHeight: 260 }}>
            {/* Title */}
            <div className={`${titleBg} px-6 py-4 flex items-center justify-center`}>
                <h2 className={`font-extrabold text-xl tracking-wide ${textColor} drop-shadow`}>{title}</h2>
            </div>

            {/* Divider */}
            <div className="mx-6" style={{ height: 2, background: "rgba(255,255,255,0.25)" }} />

            {/* Scrolling area */}
            <div className="relative flex-1 overflow-hidden" style={{ height: 100 }}>
                {/* Fade top */}
                <div className={`absolute top-0 left-0 right-0 z-10 h-8 pointer-events-none`}
                    style={{ background: `linear-gradient(to bottom, ${titleBg === "bg-orange-500" ? "#f97316" : "#f8fafc"}, transparent)` }} />
                {/* Fade bottom */}
                <div className={`absolute bottom-0 left-0 right-0 z-10 h-8 pointer-events-none`}
                    style={{ background: `linear-gradient(to top, ${titleBg === "bg-orange-500" ? "#f97316" : "#f8fafc"}, transparent)` }} />

                <div
                    className="marquee-track flex flex-col gap-0"
                    style={{
                        animation: "scrollUp 15s linear infinite",
                    }}
                >
                    {doubled.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-start gap-2 px-5 py-3 group cursor-pointer hover:bg-white/10 transition-colors duration-200 rounded-lg mx-2"
                        >
                            <span className={`mt-1 text-sm font-bold ${arrowColor} shrink-0`}>→</span>
                            <p className={`text-sm font-medium leading-snug ${textColor}`}>
                                {item.text}{" "}
                                <span className={`font-bold underline underline-offset-2 ${linkColor} group-hover:opacity-80 transition-opacity`}>
                                    click me
                                </span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style>
                {`
        @keyframes scrollUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}
            </style>
        </div>
    );
}

export default function AnnouncementBoard() {
    return (
        <div className="   flex items-center justify-center p-10">
            <div className="container  ">
                {/* Header badge */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl   font-bold mb-3 sm:mb-4 md:mb-15 text-center leading-tight">               Announcement &   <span className='text-orange-500'> Circulars </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Announcements */}
                    <MarqueeColumn
                        items={announcements}
                        bgClass="bg-orange-500"
                        textColor="text-white"
                        linkColor="text-green-200"
                        arrowColor="text-white/70"
                        title="📢 Announcement"
                        titleBg="bg-orange-500"
                    />

                    {/* Circulars */}
                    <MarqueeColumn
                        items={circulars}
                        bgClass="bg-white border border-slate-200"
                        textColor="text-slate-700"
                        linkColor="text-green-600"
                        arrowColor="text-orange-500"
                        title="📋 Circulars"
                        titleBg="bg-white"
                    />
                </div>


            </div>
        </div>
    );
}