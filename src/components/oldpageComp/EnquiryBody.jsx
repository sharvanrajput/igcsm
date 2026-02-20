import { useState } from "react";


const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli",
    "Daman and Diu", "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry",
];

const DISTRICTS = {
    "Uttar Pradesh": ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Lucknow", "Kanpur", "Varanasi", "Meerut", "Ghaziabad", "Noida"],
    "Delhi": ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Thane", "Kolhapur"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
};

export default function EnquiryBody() {
    const [form, setForm] = useState({
        studyCenter: "",
        directorName: "",
        state: "",
        district: "",
        block: "",
        tehsil: "",
        pincode: "",
        email: "",
        phone: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const set = (k, v) => setForm((p) => ({ ...p, [k]: v }));

    const districts = form.state ? (DISTRICTS[form.state] || ["District 1", "District 2", "District 3"]) : [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setForm({ studyCenter: "", directorName: "", state: "", district: "", block: "", tehsil: "", pincode: "", email: "", phone: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12">
            <div className="container">

                {/* Title */}
                <div className="text-center mb-8">
                    <h2 data-aos="fade-right" data-aos-duration="600" className="text-2xl sm:text-3xl md:text-4xl text-orange-500 font-bold mb-3 sm:mb-2 md:mb-3  ">Franchisee</h2>
                    <p className="text-orange-500 font-semibold tracking-widest text-sm uppercase">
                        CALL NOW 9818841248
                    </p>
                </div>

                {/* Success message */}
                {submitted && (
                    <div className="mb-6 bg-green-50 border border-green-200 text-green-700 rounded px-5 py-3 text-sm text-center font-medium">
                        ✅ Form submitted successfully! We'll get back to you soon.
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Row 1: Study Center + Director Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Name of the study center"
                            value={form.studyCenter}
                            onChange={(e) => set("studyCenter", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                        <input
                            type="text"
                            placeholder="Center head / director's name"
                            value={form.directorName}
                            onChange={(e) => set("directorName", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                    </div>

                    {/* Row 2: State + District */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <select
                            value={form.state}
                            onChange={(e) => { set("state", e.target.value); set("district", ""); }}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300 appearance-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                        >
                            <option value="">Select State</option>
                            {INDIAN_STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>

                        <select
                            value={form.district}
                            onChange={(e) => set("district", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300 appearance-none"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23888' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}
                        >
                            <option value="">Select Distt</option>
                            {districts.map((d) => <option key={d} value={d}>{d}</option>)}
                        </select>
                    </div>

                    {/* Row 3: Block + Tehsil */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Block"
                            value={form.block}
                            onChange={(e) => set("block", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                        <input
                            type="text"
                            placeholder="Tehsil"
                            value={form.tehsil}
                            onChange={(e) => set("tehsil", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                    </div>

                    {/* Row 4: Pincode + Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Pincode"
                            value={form.pincode}
                            onChange={(e) => set("pincode", e.target.value)}
                            maxLength={6}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) => set("email", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                    </div>

                    {/* Row 5: Phone (half width) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <input
                            type="tel"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300"
                        />
                        <div className="hidden md:block" />
                    </div>

                    {/* Row 6: Message (full width) */}
                    <textarea
                        placeholder="Message"
                        value={form.message}
                        onChange={(e) => set("message", e.target.value)}
                        rows={5}
                        className="w-full bg-white border border-gray-200 rounded px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-300 resize-y"
                    />

                    {/* Submit */}
                    <div className="flex justify-center pt-2">
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-16 py-3 rounded text-sm transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
