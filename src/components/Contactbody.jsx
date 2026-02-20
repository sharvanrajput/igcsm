

import { useState, useEffect } from "react";

const contactCards = [
    {
        title: "For Student",
        icon: "🎓",
        items: [{ type: "phone", value: "+91-9911-065-023" }],
        color: "from-orange-500 to-orange-500",
    },
    {
        title: "For Exam",
        icon: "📝",
        items: [
            { type: "phone", value: "+91-9911-065-358" },
            { type: "phone", value: "+91-9911-065-026" },
        ],
        color: "from-orange-500 to-orange-500",
    },
    {
        title: "For Franchisee",
        icon: "🤝",
        items: [
            { type: "email", value: "info@igtiindia.org" },
            { type: "phone", value: "+91-9818-841-248" },
        ],
        color: "from-orange-500 to-orange-500",
    },
    {
        title: "For Collaboration",
        icon: "💼",
        items: [{ type: "phone", value: "+91-9990-100-046" }],
        color: "from-orange-500 to-orange-500",
    },
];

function PhoneIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

function MapPinIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    );
}

export default function ContactBody() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [focused, setFocused] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setVisible(true), 100);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    };

    return (
        <div
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="min-h-screen bg-gray-50"
        >
            <style>{`
      
        .card-hover {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(234,88,12,0.15);
        }
        .input-field {
          transition: border-color 0.2s, box-shadow 0.2s;
          border: 1.5px solid #e5e7eb;
          background: white;
        }
        .input-field:focus {
          outline: none;
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249,115,22,0.1);
        }
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .btn-submit {
          background: linear-linear(135deg, #f97316, #ea580c);
          transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
        }
        .btn-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(249,115,22,0.4);
        }
        .btn-submit:active {
          transform: translateY(0);
        }
        .tag-pill {
          background: linear-linear(135deg, #f97316, #ea580c);
        }
        .info-row {
          transition: color 0.2s;
        }
        .info-row:hover {
          color: #ea580c;
        }
      `}</style>



            <div className="max-w-6xl mx-auto px-4 py-14">

                {/* Contact Cards */}
                <div className={`fade-up ${visible ? "visible" : ""} stagger-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-14`}>
                    {contactCards.map((card, i) => (
                        <div
                            key={i}
                            className="card-hover bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
                        >
                            <div className={`bg-linear-to-r ${card.color} px-4 py-3 flex items-center gap-2`}>
                                {/* <span className="text-lg">{card.icon}</span> */}
                                <span className="text-white font-semibold text-sm">{card.title}</span>
                            </div>
                            <div className="p-4 space-y-2">
                                {card.items.map((item, j) => (
                                    <div key={j} className="info-row flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
                                        <span className="text-orange-500 shrink-0">
                                            {item.type === "phone" ? <PhoneIcon /> : <EmailIcon />}
                                        </span>
                                        <span className="font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Head Office + Map */}
                <div className={`fade-up ${visible ? "visible" : ""} stagger-3 grid md:grid-cols-2 gap-6 mb-14`}>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-linear-to-r from-orange-500 to-orange-500 px-6 py-4">
                            <h2 className="text-white font-semibold text-lg">Head Office</h2>
                        </div>
                        <div className="p-6 space-y-4">
                            <div className="info-row flex items-start gap-3 text-gray-600 cursor-pointer">
                                <span className="text-orange-500 mt-0.5"><EmailIcon /></span>
                                <span className="text-lg font-medium">skillscentres@igcsm.in</span>
                            </div>
                            <div className="info-row flex items-start gap-3 text-gray-600 cursor-pointer">
                                <span className="text-orange-500 mt-0.5"><PhoneIcon /></span>
                                <span className="text-lg font-medium">+91-9990-617-617, +91-8860-094-657</span>
                            </div>
                            <div className="info-row flex items-start gap-3 text-gray-600 cursor-pointer">
                                <span className="text-orange-500 mt-0.5 shrink-0"><MapPinIcon /></span>
                                <span className="text-lg font-medium">424, 4th Floor, DLF Prime Tower, Okhla Industrial Area, Phase 1, New Delhi 110020</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=DLF+Prime+Tower+Okhla+New+Delhi&output=embed"
                            className="w-full h-full min-h-48"
                            style={{ border: 0, minHeight: "220px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                        />
                    </div>
                </div>

                {/* Quick Contact Form */}
                <div className={`fade-up ${visible ? "visible" : ""} stagger-4`}>
                    <div className="text-center mb-8">
                        <span className="tag-pill text-white text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider uppercase">
                            Quick Contact
                        </span>

                        <h2 data-aos="fade-up" data-aos-duration="600" className="text-2xl lg:text-4xl  font-bold   ">
                            Send Us a Message
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
                        {submitted && (
                            <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded-xl px-5 py-3 text-sm font-medium text-center">
                                ✅ Message sent successfully! We'll get back to you soon.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {[
                                    { id: "name", label: "Name", placeholder: "Your full name" },
                                    { id: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                                    { id: "phone", label: "Phone", placeholder: "+91 XXXXX XXXXX", type: "tel" },
                                    { id: "subject", label: "Subject", placeholder: "How can we help?" },
                                ].map((field) => (
                                    <div key={field.id} className="relative">
                                        <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                                            {field.label}
                                        </label>
                                        <input
                                            type={field.type || "text"}
                                            className="input-field w-full rounded-xl px-4 py-3 text-sm text-gray-800"
                                            placeholder={field.placeholder}
                                            value={form[field.id]}
                                            onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                                            onFocus={() => setFocused(field.id)}
                                            onBlur={() => setFocused("")}
                                        />
                                    </div>
                                ))}
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="input-field w-full rounded-xl px-4 py-3 text-sm text-gray-800 resize-none"
                                    placeholder="Tell us how we can help you..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                />
                            </div>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="btn-submit text-white font-semibold px-10 py-3.5 rounded-xl text-sm tracking-wide"
                                >
                                    Submit Now →
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}