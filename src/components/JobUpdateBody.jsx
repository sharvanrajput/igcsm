

import { useState, useEffect, useRef } from "react";
;
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    HiOutlineLocationMarker,
    HiOutlineBriefcase,
    HiOutlineClock,
    HiOutlineChevronRight,
    HiOutlineCheckCircle,
    HiOutlineSearch,
    HiOutlineX,
    HiOutlineUpload,
    HiOutlineSparkles,
} from "react-icons/hi";
import {
    MdOutlineHealthAndSafety,
    MdOutlineSchool,
    MdOutlineHomeWork,
    MdOutlineRestaurant,
} from "react-icons/md";
import { RiMoneyDollarCircleLine, RiLeafLine } from "react-icons/ri";
import { BsArrowRight, BsPeopleFill } from "react-icons/bs";
import { Textarea } from "./ui/textarea";

/* ──────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────── */
const JOBS = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        dept: "Engineering",
        location: "New Delhi, India",
        type: "Full-time",
        exp: "4–6 years",
        tag: "Hot",
        desc: "Lead frontend architecture decisions and shape the UI of our flagship product. Mentor junior engineers and champion design system best practices.",
        skills: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
    },
    {
        id: 2,
        title: "Product Designer",
        dept: "Design",
        location: "Remote",
        type: "Full-time",
        exp: "3–5 years",
        tag: "New",
        desc: "Own end-to-end design of key product flows — from user research and wireframes to pixel-perfect Figma deliverables.",
        skills: ["Figma", "UX Research", "Design Systems", "Prototyping"],
    },
    {
        id: 3,
        title: "Business Development Manager",
        dept: "Sales",
        location: "Mumbai, India",
        type: "Full-time",
        exp: "5+ years",
        tag: "",
        desc: "Identify enterprise opportunities, close high-value deals and build lasting partnerships that fuel company growth.",
        skills: ["B2B Sales", "CRM", "Negotiation", "Presentations"],
    },
    {
        id: 4,
        title: "Node.js Backend Engineer",
        dept: "Engineering",
        location: "Bangalore, India",
        type: "Full-time",
        exp: "3–5 years",
        tag: "Urgent",
        desc: "Build resilient APIs and microservices that power our core platform. Own services from design to production deployment.",
        skills: ["Node.js", "PostgreSQL", "Docker", "AWS"],
    },
    {
        id: 5,
        title: "Content & SEO Strategist",
        dept: "Marketing",
        location: "Remote",
        type: "Contract",
        exp: "2–4 years",
        tag: "New",
        desc: "Craft content strategies that grow organic reach. You understand both the craft of writing and the technical nuances of SEO.",
        skills: ["SEO", "Content Writing", "Analytics", "WordPress"],
    },
    {
        id: 6,
        title: "HR Talent Acquisition Specialist",
        dept: "People",
        location: "New Delhi, India",
        type: "Full-time",
        exp: "2–3 years",
        tag: "",
        desc: "Find and attract exceptional talent. Manage end-to-end recruiting for technical and non-technical roles across the org.",
        skills: ["Sourcing", "Interviewing", "ATS", "Employer Branding"],
    },
];

const PERKS = [
    { icon: <MdOutlineHealthAndSafety size={26} />, title: "Health Insurance", desc: "Full medical, dental & vision for you and your family." },
    { icon: <RiLeafLine size={26} />, title: "Flexible PTO", desc: "Generous paid leave — recharge whenever you need." },
    { icon: <MdOutlineSchool size={26} />, title: "Learning Budget", desc: "₹50,000/yr for courses, books & conferences." },
    { icon: <MdOutlineHomeWork size={26} />, title: "Remote-Friendly", desc: "Work from anywhere. We trust you to deliver." },
    { icon: <RiMoneyDollarCircleLine size={26} />, title: "Equity Options", desc: "Share in our success with competitive ESOPs." },
    { icon: <MdOutlineRestaurant size={26} />, title: "Catered Meals", desc: "Free lunch at all office locations every day." },
];

const DEPTS = ["All", "Engineering", "Design", "Sales", "Marketing", "People"];

const DEPT_STYLE = {
    Engineering: "bg-orange-100 text-orange-700 border-orange-200",
    Design: "bg-orange-100 text-orange-700 border-orange-200",
    Sales: "bg-orange-100 text-orange-700 border-orange-200",
    Marketing: "bg-orange-100 text-orange-700 border-orange-200",
    People: "bg-orange-100 text-orange-700 border-orange-200",
};

const TAG_STYLE = {
    Hot: "bg-red-100 text-red-600",
    New: "bg-emerald-100 text-emerald-700",
    Urgent: "bg-orange-100 text-orange-600",
};

/* ──────────────────────────────────────────────────
   HOOK – fade-up on scroll
────────────────────────────────────────────────── */
function useFadeIn(threshold = 0.12) {
    const ref = useRef(null);
    const [vis, setVis] = useState(false);
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
            { threshold }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);
    return [ref, vis];
}

/* ──────────────────────────────────────────────────
   ANIMATED WRAPPER
────────────────────────────────────────────────── */
function Reveal({ children, delay = 0, className = "" }) {
    const [ref, vis] = useFadeIn();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(26px)",
                transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
            }}
        >
            {children}
        </div>
    );
}

/* ──────────────────────────────────────────────────
   PERK CARD
────────────────────────────────────────────────── */
function PerkCard({ icon, title, desc, delay }) {
    return (
        <Reveal delay={delay}>
            <div className="group bg-white border border-gray-100 rounded-2xl p-6 flex gap-4 items-start
                      hover:border-orange-200 hover:shadow-lg hover:shadow-orange-50 transition-all duration-300">
                <div className="text-orange-500 bg-orange-50 rounded-xl p-2.5 flex-shrink-0
                        group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    {icon}
                </div>
                <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
            </div>
        </Reveal>
    );
}

/* ──────────────────────────────────────────────────
   JOB CARD
────────────────────────────────────────────────── */
function JobCard({ job, onApply, delay }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <Reveal delay={delay}>
            <div className="group bg-white border border-gray-100 rounded-2xl overflow-hidden
                      hover:border-orange-300 hover:shadow-xl hover:shadow-orange-50 transition-all duration-300 flex flex-col h-full">
                <div className="p-6 pb-4 flex-1">
                    {/* dept + tag */}
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${DEPT_STYLE[job.dept]}`}>
                            {job.dept}
                        </span>
                        {job.tag && (
                            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${TAG_STYLE[job.tag]}`}>
                                {job.tag}
                            </span>
                        )}
                    </div>
                    {/* title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200">
                        {job.title}
                    </h3>
                    {/* meta */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1.5">
                            <HiOutlineLocationMarker className="text-orange-400" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <HiOutlineBriefcase className="text-orange-400" /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <HiOutlineClock className="text-orange-400" /> {job.exp}
                        </span>
                    </div>
                    {/* desc */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {expanded ? job.desc : `${job.desc.slice(0, 100)}…`}
                    </p>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs text-orange-500 font-semibold mt-1.5 hover:underline focus:outline-none"
                    >
                        {expanded ? "Show less" : "Read more"}
                    </button>
                    {/* skills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {job.skills.map((s) => (
                            <span key={s} className="text-xs bg-gray-50 border border-gray-200 text-gray-600 px-2.5 py-1 rounded-lg">
                                {s}
                            </span>
                        ))}
                    </div>
                </div>
                {/* footer */}
                <div className="border-t border-gray-50 px-6 py-3.5 flex justify-end">
                    <button
                        onClick={() => onApply(job)}
                        className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white
                       text-sm px-5 py-2 rounded-xl font-semibold shadow-sm shadow-orange-200
                       transition-all duration-200 hover:-translate-y-0.5"
                    >
                        Apply Now <BsArrowRight />
                    </button>
                </div>
            </div>
        </Reveal>
    );
}

/* ──────────────────────────────────────────────────
   APPLY MODAL
────────────────────────────────────────────────── */
function ApplyModal({ job, open, onClose }) {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "", email: "", phone: "", experience: "",
        portfolio: "", coverLetter: "", file: null,
    });

    const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

    useEffect(() => {
        if (!open) {
            const t = setTimeout(() => {
                setStep(1);
                setSubmitted(false);
                setForm({ name: "", email: "", phone: "", experience: "", portfolio: "", coverLetter: "", file: null });
            }, 300);
            return () => clearTimeout(t);
        }
    }, [open]);

    const handleNext = () => {
        if (form.name && form.email && form.phone && form.experience) setStep(2);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const progress = step === 1 ? 50 : 100;

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg rounded-3xl p-0 overflow-hidden border-0 shadow-2xl gap-0">

                {/* ── Modal Header ── */}
                <div className="bg-gradient-to-br from-orange-500 to-amber-500 px-7 pt-7 pb-6 relative">
                    

                    <div className="flex items-center gap-2 mb-1">
                        <HiOutlineSparkles className="text-white/80" size={15} />
                        <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">
                            Join Our Team
                        </span>
                    </div>

                    <DialogTitle className="text-white text-xl font-bold leading-tight mt-0.5">
                        {job?.title}
                    </DialogTitle>
                    <DialogDescription className="text-white/70 text-sm mt-0.5">
                        {job?.dept} · {job?.location}
                    </DialogDescription>

                    {!submitted && (
                        <div className="mt-5">
                            <div className="flex justify-between text-white/70 text-xs mb-1.5">
                                <span>Step {step} of 2</span>
                                <span>{progress}%</span>
                            </div>
                            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-white rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Modal Body ── */}
                <div className="px-7 py-7 bg-white">

                    {submitted ? (
                        /* Success state */
                        <div className="text-center py-4" style={{ animation: "fadeUp .4s ease" }}>
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"
                                style={{ animation: "popIn .45s cubic-bezier(.175,.885,.32,1.275)" }}
                            >
                                <HiOutlineCheckCircle className="text-green-500" size={36} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Application Sent! 🎉</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                                Thanks for applying to{" "}
                                <span className="font-semibold text-orange-500">{job?.title}</span>.
                                We'll review your profile and get back within 5–7 business days.
                            </p>
                            <button
                                onClick={onClose}
                                className="mt-7 bg-orange-500 hover:bg-orange-600 text-white px-8 py-2.5 rounded-xl font-semibold transition-colors"
                            >
                                Done
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit}>

                            {/* Step 1 */}
                            {step === 1 && (
                                <div className="space-y-4" style={{ animation: "slideIn .3s ease" }}>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Full Name *</Label>
                                            <Input
                                                required
                                                placeholder="John Doe"
                                                value={form.name}
                                                onChange={(e) => set("name", e.target.value)}
                                                className="rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm h-10"
                                            />
                                        </div>
                                        <div>
                                            <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Phone *</Label>
                                            <Input
                                                required
                                                placeholder="+91 XXXXX XXXXX"
                                                value={form.phone}
                                                onChange={(e) => set("phone", e.target.value)}
                                                className="rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm h-10"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Email Address *</Label>
                                        <Input
                                            required
                                            type="email"
                                            placeholder="you@email.com"
                                            value={form.email}
                                            onChange={(e) => set("email", e.target.value)}
                                            className="rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm h-10"
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Years of Experience *</Label>
                                        <Select onValueChange={(v) => set("experience", v)} value={form.experience}>
                                            <SelectTrigger className="rounded-xl border-gray-200 w-full focus:ring-orange-300 text-sm h-10">
                                                <SelectValue placeholder="Select experience range" />
                                            </SelectTrigger>
                                            <SelectContent className="rounded-xl">
                                                {["0–1 years", "1–3 years", "3–5 years", "5–8 years", "8+ years"].map((o) => (
                                                    <SelectItem key={o} value={o}>{o}</SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-11 font-semibold mt-1
                               flex items-center justify-center gap-2 transition-colors"
                                    >
                                        Continue <HiOutlineChevronRight size={16} />
                                    </button>
                                </div>
                            )}

                            {/* Step 2 */}
                            {step === 2 && (
                                <div className="space-y-4" style={{ animation: "slideIn .3s ease" }}>
                                    <div>
                                        <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Portfolio / LinkedIn URL</Label>
                                        <Input
                                            placeholder="https://yourportfolio.com"
                                            value={form.portfolio}
                                            onChange={(e) => set("portfolio", e.target.value)}
                                            className="rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm h-10"
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Cover Letter</Label>
                                        <Textarea
                                            rows={4}
                                            placeholder="Tell us why you're the right fit…"
                                            value={form.coverLetter}
                                            onChange={(e) => set("coverLetter", e.target.value)}
                                            className="rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm resize-none"
                                        />
                                    </div>

                                    <div>
                                        <Label className="text-xs font-semibold text-gray-600 mb-1.5 block">Resume / CV *</Label>
                                        <label className="flex flex-col items-center justify-center gap-2 border-2 border-dashed border-orange-200
                                      rounded-xl p-5 cursor-pointer hover:border-orange-400 hover:bg-orange-50/50 transition-colors">
                                            <HiOutlineUpload className="text-orange-400" size={22} />
                                            <span className="text-sm text-gray-500">
                                                {form.file ? form.file.name : "Click to upload PDF / DOC"}
                                            </span>
                                            <input
                                                type="file"
                                                className="hidden"
                                                accept=".pdf,.doc,.docx"
                                                onChange={(e) => set("file", e.target.files[0])}
                                            />
                                        </label>
                                    </div>

                                    <div className="flex gap-3 pt-1">
                                        <button
                                            type="button"
                                            onClick={() => setStep(1)}
                                            className="flex-1 border border-gray-200 text-gray-600 hover:border-gray-300 rounded-xl h-11 font-semibold transition-colors text-sm"
                                        >
                                            Back
                                        </button>
                                        <button
                                            type="submit"
                                            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white rounded-xl h-11 font-semibold transition-colors text-sm"
                                        >
                                            Submit Application
                                        </button>
                                    </div>
                                </div>
                            )}
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

/* ──────────────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────────────── */
export default function JobUpdateBody() {
    const [filter, setFilter] = useState("All");
    const [search, setSearch] = useState("");
    const [selectedJob, setSelectedJob] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [heroVis, setHeroVis] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setHeroVis(true), 80);
        return () => clearTimeout(t);
    }, []);

    const openApply = (job) => { setSelectedJob(job); setModalOpen(true); };
    const closeModal = () => setModalOpen(false);

    const filtered = JOBS.filter((j) => {
        const matchDept = filter === "All" || j.dept === filter;
        const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
            j.dept.toLowerCase().includes(search.toLowerCase());
        return matchDept && matchSearch;
    });

    return (
        <>
            <style>{`
       
      
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(14px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes popIn {
          from { transform: scale(0.4); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px);  }
          50%       { transform: translateY(-9px); }
        }
        .float-anim { animation: floatY 4s ease-in-out infinite; }

        .dot-bg {
          background-image: radial-gradient(circle, #f97316 1.2px, transparent 1.2px);
          background-size: 28px 28px;
        }
      `}</style>

            <div className="    text-gray-900">

                {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
                <section className="relative overflow-hidden bg-white border-b border-gray-100">
                    {/* decorative blobs */}
                    <div className="absolute top-0 right-0 w-96 h-96 dot-bg opacity-[0.035] pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
                    <div className="absolute top-10 right-24 w-44 h-44 bg-amber-100 rounded-full blur-2xl opacity-50 pointer-events-none" />

                    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col md:flex-row items-center gap-14">

                        {/* text */}
                        <div className="flex-1">
                            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "opacity .7s ease .1s,transform .7s ease .1s" }}>
                                <span className="inline-flex items-center gap-2 text-orange-500 font-semibold text-sm bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-5">
                                    <BsPeopleFill size={13} /> We're Hiring — {JOBS.length} Open Roles
                                </span>
                            </div>

                            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "opacity .7s ease .25s,transform .7s ease .25s" }}>
                                <h1 className="font-display text-5xl md:text-[3.6rem] font-bold text-gray-900 leading-tight mb-5">
                                    Build the Future<br />
                                    <em className="text-orange-500 not-italic">With Us.</em>
                                </h1>
                            </div>

                            <div style={{ opacity: heroVis ? 1 : 0, transform: heroVis ? "translateY(0)" : "translateY(20px)", transition: "opacity .7s ease .4s,transform .7s ease .4s" }}>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-9">
                                    Join a passionate team crafting products people love. We value curiosity, ownership, and bold thinking over titles.
                                </p>
                                <div className="flex items-center gap-4 flex-wrap">
                                    <button
                                        onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}
                                        className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-7 h-12 rounded-2xl font-semibold shadow-lg shadow-orange-200 transition-all duration-200 hover:-translate-y-0.5"
                                    >
                                        View Open Roles <BsArrowRight />
                                    </button>
                                    <span className="text-sm text-gray-400">6 positions · 4 cities</span>
                                </div>
                            </div>
                        </div>

                        {/* illustration */}
                        <div
                            className="hidden md:block float-anim flex-shrink-0"
                            style={{ opacity: heroVis ? 1 : 0, transition: "opacity .7s ease .55s" }}
                        >
                            <div className="relative w-72 h-72">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-amber-50 rounded-3xl rotate-6 shadow-xl" />
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-400 rounded-3xl flex flex-col items-center justify-center gap-5 shadow-2xl shadow-orange-300">
                                    <div className="grid grid-cols-2 gap-3">
                                        {["🚀", "💡", "🎨", "🔧"].map((e, i) => (
                                            <div key={i} className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-2xl">
                                                {e}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-white font-bold text-xl tracking-wide">Dream Team</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ════════════════════════════════
            STATS BAR
        ════════════════════════════════ */}


                {/* ════════════════════════════════
            PERKS
        ════════════════════════════════ */}
                <section className="max-w-6xl mx-auto px-6 py-20">
                    <Reveal>
                        <div className="text-center mb-12">
                            <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">Why Join Us</p>
                            <h2 className="font-display text-4xl font-bold text-gray-900">Life at Our Company</h2>
                        </div>
                    </Reveal>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {PERKS.map((p, i) => <PerkCard key={p.title} {...p} delay={i * 70} />)}
                    </div>
                </section>

                {/* ════════════════════════════════
            JOB LISTINGS
        ════════════════════════════════ */}
                <section id="openings" className="bg-white border-t border-b border-gray-100 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <Reveal>
                            <div className="text-center mb-10">
                                <p className="text-orange-500 font-semibold text-sm tracking-widest uppercase mb-2">Opportunities</p>
                                <h2 className="font-display text-4xl font-bold text-gray-900">Open Positions</h2>
                                <p className="text-gray-500 mt-3 max-w-md mx-auto">Find the role where you'll do your best work.</p>
                            </div>
                        </Reveal>

                        {/* search + filter */}
                        <Reveal delay={100}>
                            <div className="flex flex-col sm:flex-row gap-3 mb-8 flex-wrap">
                                <div className="relative flex-1 min-w-[200px]">
                                    <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
                                    <Input
                                        placeholder="Search roles or teams…"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="pl-10 h-11 rounded-xl border-gray-200 focus-visible:ring-orange-300 text-sm"
                                    />
                                </div>
                                <div className="flex gap-2 flex-wrap">
                                    {DEPTS.map((d) => (
                                        <button
                                            key={d}
                                            onClick={() => setFilter(d)}
                                            className={`px-4 h-11 rounded-xl text-sm font-semibold border transition-all duration-200 ${filter === d
                                                ? "bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-200"
                                                : "bg-white text-gray-600 border-gray-200 hover:border-orange-300 hover:text-orange-600"
                                                }`}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </Reveal>

                        {filtered.length === 0 ? (
                            <div className="text-center py-24 text-gray-400">
                                <p className="text-5xl mb-4">🔍</p>
                                <p className="font-semibold text-lg text-gray-600">No roles found</p>
                                <p className="text-sm mt-1">Try adjusting your search or filter</p>
                            </div>
                        ) : (
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {filtered.map((job, i) => (
                                    <JobCard key={job.id} job={job} onApply={openApply} delay={i * 75} />
                                ))}
                            </div>
                        )}
                    </div>
                </section>


                <ApplyModal job={selectedJob} open={modalOpen} onClose={closeModal} />

                {/* ════════════════════════════════
            CTA BANNER
        ════════════════════════════════ */}
                <section className="container  pb-20">
                    <Reveal>
                        <div className="relative bg-gradient-to-br from-orange-500 to-amber-500 rounded-3xl overflow-hidden px-10 py-16 text-center">
                            {/* decorative circles */}
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                            <div className="relative z-10">
                                <p className="text-white/80 text-sm font-semibold tracking-widest uppercase mb-3">
                                    Don't see a fit?
                                </p>
                                <h2 className="font-display text-white text-4xl font-bold mb-4">
                                    Send Us Your Resume
                                </h2>
                                <p className="text-white/80 max-w-md mx-auto mb-9 leading-relaxed">
                                    We're always on the lookout for exceptional talent. Drop your CV and we'll reach out when the right role opens.
                                </p>
                                <button
                                    onClick={() => openApply({ title: "Open Application", dept: "General", location: "Anywhere" })}
                                    className="inline-flex items-center gap-2 bg-white text-orange-500 hover:bg-orange-50 px-8 h-12 rounded-2xl font-bold shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    Submit Open Application <BsArrowRight />
                                </button>
                            </div>
                        </div>
                    </Reveal>
                </section>

                {/* ════════════════════════════════
            FOOTER
        ════════════════════════════════ */}

            </div>



        </>
    );
}