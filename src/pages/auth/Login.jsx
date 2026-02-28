// import { studentLogin } from "@/services/api";
// import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VectorIllustration = () => (
    <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
        <ellipse cx="260" cy="210" rx="200" ry="160" fill="url(#bgGlow)" opacity="0.4" />

        {/* Laptop frame */}
        <rect x="100" y="80" width="320" height="200" rx="16" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" filter="url(#shadow)" />
        <rect x="112" y="92" width="296" height="176" rx="10" fill="#f8fafc" />

        {/* Title bar */}
        <rect x="122" y="102" width="276" height="20" rx="4" fill="#f1f5f9" />
        <circle cx="134" cy="112" r="4" fill="#f97316" />
        <circle cx="148" cy="112" r="4" fill="#e2e8f0" />
        <circle cx="162" cy="112" r="4" fill="#e2e8f0" />
        <rect x="176" y="107" width="80" height="10" rx="3" fill="#e2e8f0" />

        {/* Sidebar */}
        <rect x="122" y="126" width="60" height="142" rx="4" fill="#fff7ed" />
        <rect x="130" y="136" width="44" height="8" rx="2" fill="#f97316" opacity="0.9" />
        <rect x="130" y="152" width="36" height="6" rx="2" fill="#cbd5e1" />
        <rect x="130" y="164" width="40" height="6" rx="2" fill="#cbd5e1" />
        <rect x="130" y="176" width="32" height="6" rx="2" fill="#cbd5e1" />
        <rect x="130" y="188" width="38" height="6" rx="2" fill="#cbd5e1" />
        <circle cx="144" cy="248" r="14" fill="#f97316" opacity="0.15" />
        <circle cx="144" cy="248" r="8" fill="#f97316" opacity="0.5" />

        {/* Stats cards */}
        <rect x="190" y="126" width="208" height="60" rx="6" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="200" y="135" width="60" height="6" rx="2" fill="#f97316" opacity="0.8" />
        <rect x="200" y="147" width="40" height="14" rx="3" fill="#f97316" />
        <rect x="268" y="135" width="50" height="6" rx="2" fill="#94a3b8" />
        <rect x="268" y="147" width="35" height="14" rx="3" fill="#f1f5f9" />
        <rect x="336" y="135" width="50" height="6" rx="2" fill="#94a3b8" />
        <rect x="336" y="147" width="35" height="14" rx="3" fill="#f1f5f9" />

        {/* Bar chart */}
        <rect x="190" y="194" width="130" height="74" rx="6" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="200" y="202" width="60" height="5" rx="2" fill="#94a3b8" />
        <rect x="202" y="240" width="12" height="20" rx="2" fill="#f97316" opacity="0.5" />
        <rect x="220" y="230" width="12" height="30" rx="2" fill="#f97316" opacity="0.7" />
        <rect x="238" y="222" width="12" height="38" rx="2" fill="#f97316" />
        <rect x="256" y="235" width="12" height="25" rx="2" fill="#f97316" opacity="0.6" />
        <rect x="274" y="226" width="12" height="34" rx="2" fill="#f97316" opacity="0.85" />
        <line x1="200" y1="262" x2="296" y2="262" stroke="#e2e8f0" strokeWidth="1" />

        {/* Line chart */}
        <rect x="328" y="194" width="70" height="74" rx="6" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="336" y="202" width="45" height="5" rx="2" fill="#94a3b8" />
        <polyline points="336,250 348,238 360,244 372,228 384,235" stroke="#f97316" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="372" cy="228" r="3" fill="#f97316" />

        {/* Table */}
        <rect x="190" y="276" width="208" height="42" rx="6" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
        <rect x="200" y="284" width="188" height="5" rx="1" fill="#f1f5f9" />
        <rect x="200" y="293" width="188" height="5" rx="1" fill="#f8fafc" />
        <rect x="200" y="302" width="80" height="5" rx="1" fill="#f8fafc" />
        <rect x="356" y="284" width="30" height="5" rx="2" fill="#f97316" opacity="0.5" />

        {/* Laptop base */}
        <path d="M60 282 L100 282 L100 292 Q260 306 420 292 L420 282 L460 282 L460 294 Q260 320 60 294 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="1" />
        <rect x="200" y="280" width="120" height="4" rx="2" fill="#cbd5e1" />

        {/* Notification card */}
        <g transform="translate(375, 48)">
            <rect width="124" height="54" rx="10" fill="#ffffff" stroke="#fed7aa" strokeWidth="1.5" filter="url(#cardShadow)" />
            <circle cx="18" cy="17" r="7" fill="#f97316" />
            <text x="30" y="15" fill="#1e293b" fontSize="7" fontFamily="sans-serif" fontWeight="bold">New Sign up!</text>
            <text x="30" y="25" fill="#94a3b8" fontSize="6" fontFamily="sans-serif">user@example.com</text>
            <rect x="10" y="33" width="104" height="13" rx="3" fill="#fff7ed" />
            <text x="33" y="43" fill="#f97316" fontSize="6" fontFamily="sans-serif" fontWeight="bold">View Details →</text>
        </g>

        {/* Stats pill */}
        <g transform="translate(18, 118)">
            <rect width="74" height="34" rx="17" fill="#f97316" filter="url(#pillShadow)" />
            <text x="14" y="15" fill="#fff" fontSize="8" fontFamily="sans-serif" fontWeight="bold">↑ 24%</text>
            <text x="11" y="26" fill="#fff" fontSize="6" fontFamily="sans-serif">Growth</text>
        </g>

        {/* Avatar */}
        <circle cx="452" cy="180" r="18" fill="#fff7ed" stroke="#f97316" strokeWidth="1.5" />
        <circle cx="452" cy="175" r="6" fill="#f97316" opacity="0.7" />
        <path d="M440 193 Q452 187 464 193" stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Dot grid */}
        {[0, 1, 2, 3, 4].map(i => [0, 1, 2, 3].map(j => (
            <circle key={`${i}-${j}`} cx={30 + i * 16} cy={320 + j * 16} r="1.5" fill="#f97316" opacity={0.2 + j * 0.05} />
        )))}

        <line x1="100" y1="370" x2="420" y2="370" stroke="url(#lineGrad)" strokeWidth="2" opacity="0.5" />

        <defs>
            <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                <stop offset="50%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
            <filter id="shadow" x="-5%" y="-5%" width="115%" height="125%">
                <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#94a3b8" floodOpacity="0.15" />
            </filter>
            <filter id="cardShadow" x="-15%" y="-15%" width="140%" height="150%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#f97316" floodOpacity="0.12" />
            </filter>
            <filter id="pillShadow" x="-15%" y="-15%" width="140%" height="160%">
                <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#f97316" floodOpacity="0.35" />
            </filter>
        </defs>
    </svg>
);

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        console.log(location.pathname)
    }, [])
    // const { login } = useAuth()


    const validate = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = "Enter a valid email address";
        if (!password) newErrors.password = "Password is required";
        else if (password.length < 6) newErrors.password = "Password must be at least 8 characters";
        return newErrors;
    };

    const handleSubmit = async () => {
        // const validationErrors = validate();
        // if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
        // setErrors({});
        // setLoading(true);
        // try {
        //     const res = await studentLogin({ email, password })

        //     if (res?.data?.success) {
        //         setLoading(false);
        //         toast.success(res?.data?.message)
        //         login(res.data.user)
        //         console.log(res.data.user.role)
        //     }
        //     navigate("/")
        //     setSuccess(true);

        // } catch (error) {
        //     console.log(error.message)
        //     toast.error(error?.response?.data?.message)
        //     setLoading(false)
        // }

    };

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif" }} className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Sora:wght@600;700;800&display=swap" rel="stylesheet" />

            <div className="w-full max-w-5xl min-h-[620px] bg-white border border-slate-200 rounded-2xl overflow-hidden flex shadow-xl shadow-slate-200/60">

                {/* LEFT PANEL */}
                <div className="hidden md:flex flex-col w-1/2 bg-orange-50 border-r border-orange-100 relative overflow-hidden">
                    {/* Branding */}
                    <div className="p-8 flex items-center gap-2.5 z-10">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-md shadow-orange-200">

                        </div>
                        {/* <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-slate-800 font-bold text-base">Acme Inc</span> */}
                    </div>

                    {/* Illustration */}
                    <div className="flex-1 flex items-center justify-center px-6">
                        <VectorIllustration />
                    </div>

                    {/* Testimonial */}
                    <div className="p-8 z-10">
                        <div className="flex gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(i => (
                                <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f97316">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                            ))}
                        </div>

                    </div>

                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200 opacity-20 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200 opacity-20 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* RIGHT PANEL */}
                <div className="w-full md:w-1/2 flex flex-col bg-white">


                    <div className="flex-1 flex items-center justify-center px-8 py-4">
                        <div className="w-full max-w-sm">

                            <>
                                <div className="text-center mb-8">
                                    <h1 style={{ fontFamily: "'Sora', sans-serif" }} className="text-slate-800 text-[1.6rem] font-bold mb-2 tracking-tight">
                                       {location?.pathname?.split("-")[0].slice(1) } Login
                                    </h1>
                                    <p className="text-slate-400 text-sm">Enter your details below to Login your account</p>
                                </div>

                                <div className="space-y-4">
                                    {/* Email */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-0.5">Email address</label>
                                        <input
                                            type="email"
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={e => { setEmail(e.target.value); if (errors.email) setErrors(p => ({ ...p, email: "" })); }}
                                            className={`w-full bg-white border-2 ${errors.email ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-orange-400"} text-slate-800 text-sm rounded-xl px-4 py-3 placeholder-slate-300 focus:outline-none focus:ring-4 ${errors.email ? "focus:ring-red-100" : "focus:ring-orange-50"} transition-all`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-xs mt-1.5 ml-0.5 flex items-center gap-1">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" /></svg>
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-0.5">Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Min. 8 characters"
                                                value={password}
                                                onChange={e => { setPassword(e.target.value); if (errors.password) setErrors(p => ({ ...p, password: "" })); }}
                                                className={`w-full bg-white border-2 ${errors.password ? "border-red-300 focus:border-red-400" : "border-slate-200 focus:border-orange-400"} text-slate-800 text-sm rounded-xl px-4 py-3 pr-11 placeholder-slate-300 focus:outline-none focus:ring-4 ${errors.password ? "focus:ring-red-100" : "focus:ring-orange-50"} transition-all`}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-300 hover:text-orange-400 transition-colors"
                                            >
                                                {showPassword ? (
                                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" /><path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" /><line x1="1" y1="1" x2="23" y2="23" /></svg>
                                                ) : (
                                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                                                )}
                                            </button>
                                        </div>
                                        {errors.password && (
                                            <p className="text-red-500 text-xs mt-1.5 ml-0.5 flex items-center gap-1">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z" /></svg>
                                                {errors.password}
                                            </p>
                                        )}
                                    </div>

                                    {/* Forgot */}
                                    {/* <div className="flex justify-end -mt-1">
                      <a href="#" className="text-xs text-orange-500 hover:text-orange-600 font-medium transition-colors">Forgot password?</a>
                    </div> */}

                                    {/* Submit */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={loading}
                                        className="w-full bg-orange-500 hover:bg-orange-600 active:bg-orange-700 disabled:opacity-60 text-white font-semibold text-sm rounded-xl py-3 transition-all duration-150 flex items-center justify-center gap-2 active:scale-[0.98] shadow-lg shadow-orange-200 hover:shadow-xl hover:shadow-orange-200"
                                    >
                                        {loading ? (
                                            <>
                                                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                                </svg>
                                                Signing in...
                                            </>
                                        ) : "Sign In with Email"}
                                    </button>




                                </div>


                            </>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}