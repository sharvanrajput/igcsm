

import { useState } from "react";
import { api } from "../../services/api";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

// ─── Zod Schema ────────────────────────────────────────────────────────────────
const schema = z.object({
    instituteName: z.string().min(1, "Institute/Franchise Name is required"),
    course: z.string().min(1, "Please select a course"),
    studentName: z.string().min(1, "Student Name is required"),
    fatherName: z.string().min(1, "Father's Name is required"),
    motherName: z.string().min(1, "Mother's Name is required"),
    gender: z.string().min(1, "Please select a gender"),
    dob: z.string().min(1, "Date of Birth is required"),
    aadhaarNo: z
        .string()
        .min(1, "Aadhaar Number is required")
        .regex(/^\d{12}$/, "Aadhaar must be exactly 12 digits"),
    country: z.string().min(1, "Country is required"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    district: z.string().min(1, "District is required"),
    state: z.string().min(1, "Please select a state"),
    pin: z
        .string()
        .min(1, "Pin is required")
        .regex(/^\d{6}$/, "Pin must be exactly 6 digits"),
    mobile: z
        .string()
        .min(1, "Mobile Number is required")
        .regex(/^\d{8,15}$/, "Mobile must be 8–15 digits"),
    altMobile: z.string().optional(),
    email: z.string().min(1, "Email is required").email("Enter a valid email address"),
    educationalQualification: z.string().min(1, "Educational Qualification is required"),
    qualificationCertificate: z
        .any()
        .refine((f) => f && f.length > 0, "Qualification Certificate is required"),
    photo: z.any().refine((f) => f && f.length > 0, "Photo is required"),
    signature: z.any().refine((f) => f && f.length > 0, "Signature is required"),
    aadhaarDoc: z.any().refine((f) => f && f.length > 0, "Aadhaar document is required"),
    terms: z.literal(true, { errorMap: () => ({ message: "You must accept Terms and Conditions" }) }),
});

// ─── Helpers ───────────────────────────────────────────────────────────────────
const COURSES = ["B.Tech", "M.Tech", "BCA", "MCA", "MBA", "B.Sc", "M.Sc", "Diploma"];
const STATES = [
    "Andhra Pradesh", "Assam", "Bihar", "Delhi", "Gujarat", "Haryana", "Himachal Pradesh",
    "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Odisha", "Punjab",
    "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

// ─── Sub-components ────────────────────────────────────────────────────────────
function SectionHeader({ title }) {
    return (
        <div className="bg-orange-500 px-4 py-2.5 rounded-t-md">
            <h2 className="text-white text-xs font-bold tracking-widest uppercase">{title}</h2>
        </div>
    );
}

function FieldError({ message }) {
    if (!message) return null;
    return <p className="text-red-500 text-xs mt-1">{message}</p>;
}

function Label({ children, required }) {
    return (
        <label className="block text-xs font-medium text-gray-600 mb-1">
            {children}
            {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
    );
}

const inputCls =
    "w-full border border-gray-300 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400 placeholder-gray-400 bg-white";

const errorInputCls =
    "w-full border border-red-400 rounded px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-300 placeholder-gray-400 bg-white";

function TextInput({ label, placeholder, error, required, ...rest }) {
    return (
        <div>
            <Label required={required}>{label}</Label>
            <input
                className={error ? errorInputCls : inputCls}
                placeholder={placeholder}
                {...rest}
            />
            <FieldError message={error} />
        </div>
    );
}

function SelectInput({ label, children, error, required, ...rest }) {
    return (
        <div>
            <Label required={required}>{label}</Label>
            <select className={`${error ? errorInputCls : inputCls} appearance-none`} {...rest}>
                {children}
            </select>
            <FieldError message={error} />
        </div>
    );
}

function FileInput({ label, description, error, required, ...rest }) {
    return (
        <div className="border border-gray-200 rounded-lg p-4 bg-white text-center flex flex-col items-center gap-2">
            <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-300 text-3xl">
                🖼️
            </div>
            <p className="text-sm font-semibold text-gray-700">{label}{required && <span className="text-red-500 ml-0.5">*</span>}</p>
            <p className="text-xs text-gray-400">{description}</p>
            <input type="file" accept=".jpg,.jpeg,.png" className="text-xs" {...rest} />
            <FieldError message={error} />
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Student() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submissionId, setSubmissionId] = useState(null);
    const [otp, setOtp] = useState("");
    const [verifying, setVerifying] = useState(false);
    const [resendBusy, setResendBusy] = useState(false);
    const [savedFormData, setSavedFormData] = useState(null); // Store full form for later finalization
    const [otpVerified, setOtpVerified] = useState(false); // Track if OTP step passed

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: { instituteName: "NCTA Expert Pvt Ltd", country: "India" },
    });

    // Step 1: Send OTP (extract only email, mobile, studentName)
    const onSubmit = (data) => {
        setSubmitting(true);
        setSavedFormData(data); // Save full form data for later

        api.post("/student-submission/send-otp", {
            email: data.email,
            mobile: data.mobile,
            studentName: data.studentName,
        })
            .then((res) => {
                setSubmissionId(res.data.submissionId);
                setOtp("");
                setOtpVerified(false);
                setSubmitting(false);
                toast.success("OTP sent to your email!");
            })
            .catch((err) => {
                console.error(err?.response?.data || err.message || err);
                toast.error(err?.response?.data?.message || "Failed to send OTP");
                setSubmitting(false);
            });
    };

    // Step 2: Verify OTP
    const handleVerifyOtp = async () => {
        if (!submissionId) {
            toast.error("No submission id");
            return;
        }
        if (!otp || otp.trim().length === 0) {
            toast.error("Enter OTP");
            return;
        }
        try {
            setVerifying(true);
            await api.post("/student-submission/verify-otp", { submissionId, email: savedFormData.email, otp });
            setOtpVerified(true);
            setOtp("");
            toast.success("Email verified! Completing your registration...");
            // Now automatically finalize the submission with files
            await finalizeWithFiles();
        } catch (err) {
            console.error(err?.response?.data || err.message || err);
            toast.error(err?.response?.data?.message || "OTP verification failed");
        } finally {
            setVerifying(false);
        }
    };

    // Step 3: Finalize submission with files (called after OTP is verified)
    const finalizeWithFiles = async () => {
        if (!savedFormData || !submissionId) {
            toast.error("Form data or submission ID missing");
            return;
        }

        try {
            // Prepare FormData with files and all form fields
            const formData = new FormData();
            Object.entries(savedFormData).forEach(([k, v]) => {
                if (v === undefined || v === null) return;
                // skip these fields, we'll add them separately
                if (["email", "mobile", "studentName"].includes(k)) return;
                // handle FileList
                if (v instanceof FileList) {
                    if (v.length > 0) {
                        formData.append(k === 'qualificationCertificate' ? 'qualificationCert' : k, v[0]);
                    }
                    return;
                }
                formData.append(k, v);
            });

            // Add submissionId and email (and other auth fields)
            formData.append("submissionId", submissionId);
            formData.append("email", savedFormData.email);
            formData.append("mobile", savedFormData.mobile);
            formData.append("studentName", savedFormData.studentName);

            const res = await api.post("/student-submission/finalize", formData);
            setSubmitted(true);
        } catch (err) {
            console.error(err?.response?.data || err.message || err);
            toast.error(err?.response?.data?.message || "Failed to complete registration");
        }
    };

    const handleResend = async () => {
        if (!submissionId) {
            toast.error("No submission id");
            return;
        }
        try {
            setResendBusy(true);
            await api.post("/student-submission/resend-otp", { submissionId, email: savedFormData.email });
            toast.success("OTP resent to your email");
        } catch (err) {
            console.error(err?.response?.data || err.message || err);
            toast.error(err?.response?.data?.message || "Resend failed");
        } finally {
            setResendBusy(false);
        }
    };

    const navigate = useNavigate()

    if (submitted) {
        return (
            <div className="min-h-screen   flex items-center justify-center">
                <div className="bg-white rounded-xl shadow p-10 text-center  ">
                    <div className="text-5xl mb-4">✅</div>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Completed!</h2>
                    <p className="text-sm text-gray-500">Your student account has been created successfully. You can now login and access your profile.</p>
                    <button
                        onClick={() => {
                            setSubmitted(false);
                            setSubmissionId(null);
                            setSavedFormData(null);
                            setOtpVerified(false);
                            setOtp("");
                            navigate("/")
                        }}
                        className="mt-6 bg-orange-500 text-white px-6 py-2 rounded text-sm font-semibold hover:bg-orange-600 transition"
                    >
                        Register Another
                    </button>
                </div>
            </div>
        );
    }

    // If OTP verification is in progress, show OTP UI
    if (submissionId && !otpVerified) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-40">
                <div className="bg-white rounded-xl shadow p-8 text-center max-w-md w-full mx-4">
                    <h2 className="text-lg font-bold mb-3">Verify Your Email</h2>
                    <p className="text-sm text-gray-600 mb-4">We've sent a 6-digit OTP to <strong>{savedFormData?.email}</strong>. Enter it below to verify your email and complete your registration.</p>
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        maxLength="6"
                        className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-center text-lg tracking-widest mb-4"
                        placeholder="000000"
                    />
                    <div className="flex gap-2">
                        <button
                            onClick={handleVerifyOtp}
                            disabled={verifying || otp.length < 6}
                            className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-4 py-2 rounded font-semibold transition"
                        >
                            {verifying ? 'Verifying...' : 'Verify & Complete'}
                        </button>
                        <button
                            onClick={handleResend}
                            disabled={resendBusy}
                            className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 disabled:opacity-50 px-4 py-2 rounded font-semibold transition"
                        >
                            {resendBusy ? 'Resending...' : 'Resend OTP'}
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Didn't receive the OTP? Check your spam folder or click Resend.</p>
                </div>
            </div>
        );
    }

    return (
        <section className="min-h-screen   pt-10 pb-10 px-4">
            <div className="">

                {/* Page Header */}
                <div className="flex items-center justify-between mb-5">
                    <h1 className="text-xl font-bold text-gray-800">Student Registration</h1>
                    <p className="text-sm text-gray-400">
                        <Link to={"/"} >
                            <span className="text-orange-500 hover:underline cursor-pointer">Home</span>
                        </Link>
                        {" / "}
                        <span className="text-gray-500">Student Registration</span>
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">


                    {/* ── Personal Details ─────────────────────────────────────────────── */}
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <SectionHeader title="Personal Details" />
                        <div className="p-5 space-y-4">
                            {/* Row 1 */}
                            <div className="grid grid-cols-3 gap-4">
                                <TextInput label="Student Name" placeholder="Enter Student's Name" required error={errors.studentName?.message} {...register("studentName")} />
                                <TextInput label="Father's Name" placeholder="Enter Father's Name" required error={errors.fatherName?.message} {...register("fatherName")} />
                                <TextInput label="Mother's Name" placeholder="Enter Mother's Name" required error={errors.motherName?.message} {...register("motherName")} />
                            </div>
                            {/* Row 2 */}
                            <div className="grid grid-cols-3 gap-4">
                                <SelectInput label="Gender" required error={errors.gender?.message} {...register("gender")}>
                                    <option value="">--Select Gender--</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </SelectInput>
                                <div>
                                    <Label required>Date of Birth</Label>
                                    <input
                                        type="date"
                                        className={errors.dob ? errorInputCls : inputCls}
                                        {...register("dob")}
                                    />
                                    <FieldError message={errors.dob?.message} />
                                </div>
                                <TextInput label="Aadhaar No" placeholder="Enter Aadhaar Number" required error={errors.aadhaarNo?.message} {...register("aadhaarNo")} />
                            </div>
                            {/* Row 3 */}
                            <div className="grid grid-cols-3 gap-4">
                                <SelectInput label="Country" required error={errors.country?.message} {...register("country")}>
                                    <option value="India">India</option>
                                    <option value="USA">USA</option>
                                    <option value="UK">UK</option>
                                    <option value="Other">Other</option>
                                </SelectInput>
                                <div>
                                    <Label required>Address</Label>
                                    <textarea
                                        rows={4}
                                        className={`${errors.address ? errorInputCls : inputCls} resize-none`}
                                        placeholder="Vill/Town/City, Post Office, Police Station"
                                        {...register("address")}
                                    />
                                    <FieldError message={errors.address?.message} />
                                </div>
                                <div className="space-y-3">
                                    <TextInput label="District" placeholder="Enter District" required error={errors.district?.message} {...register("district")} />
                                    <SelectInput label="State" required error={errors.state?.message} {...register("state")}>
                                        <option value="">-- Select State --</option>
                                        {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                                    </SelectInput>
                                    <TextInput label="Pin" placeholder="Enter Pin Number" required error={errors.pin?.message} {...register("pin")} />
                                </div>
                            </div>
                            {/* Row 4 - Mobile */}
                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <Label required>Mobile No.</Label>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l text-sm text-gray-600">+91</span>
                                        <input
                                            className={`flex-1 border ${errors.mobile ? "border-red-400" : "border-gray-300"} rounded-r px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400`}
                                            placeholder="Enter mobile number (8-15 digits)"
                                            {...register("mobile")}
                                        />
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">8–15 digit mobile number</p>
                                    <FieldError message={errors.mobile?.message} />
                                </div>
                                <TextInput label="Alternative Mobile No." placeholder="Enter alternative Mobile Number" error={errors.altMobile?.message} {...register("altMobile")} />
                                <TextInput label="Email" placeholder="Enter Email Address" required error={errors.email?.message} {...register("email")} />
                            </div>
                        </div>
                    </div>

                    {/* ── Help Videos ─────────────────────────────────────────────────── */}
                    <div className="bg-white border border-gray-200 rounded-md p-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
                            Admission &amp; Student Cycle Help Videos
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                "How to Take Admission",
                                "Student Cycle from Admission to Certificate",
                            ].map((title) => (
                                <div key={title}>
                                    <p className="text-sm font-semibold text-gray-700 mb-1">{title}</p>
                                    <p className="text-xs text-gray-400 mb-2">Select language:</p>
                                    <div className="flex gap-2">
                                        <button type="button" className="bg-orange-500 text-white text-xs px-4 py-1.5 rounded hover:bg-orange-600 transition">English</button>
                                        <button type="button" className="bg-orange-500 text-white text-xs px-4 py-1.5 rounded hover:bg-orange-600 transition">Hindi</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>




                    {/* ── Academic Details ─────────────────────────────────────────────── */}
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <SectionHeader title="Academic Details" />
                        <div className="p-5 grid grid-cols-2 gap-5">
                            <TextInput
                                label="Institute/Franchise Name"
                                placeholder="Enter Institute Name"
                                required
                                error={errors.instituteName?.message}
                                {...register("instituteName")}
                            />
                            <SelectInput
                                label="Course"
                                required
                                error={errors.course?.message}
                                {...register("course")}
                            >
                                <option value="">--Please Select Course--</option>
                                {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
                            </SelectInput>
                        </div>
                    </div>



                    {/* ── Educational Qualification ────────────────────────────────────── */}
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <SectionHeader title="Educational Qualification" />
                        <div className="p-5 grid grid-cols-2 gap-5">
                            <TextInput label="Educational Qualification" placeholder="Enter Educational Qualification" required error={errors.educationalQualification?.message} {...register("educationalQualification")} />
                            <div>
                                <Label required>Qualification Certificate</Label>
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.pdf"
                                    className="block text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border file:border-gray-300 file:text-xs file:bg-white file:text-gray-700 hover:file:bg-gray-50"
                                    {...register("qualificationCertificate")}
                                />
                                <FieldError message={errors.qualificationCertificate?.message} />
                            </div>
                        </div>
                    </div>

                    {/* ── Upload Documents ─────────────────────────────────────────────── */}
                    <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                        <SectionHeader title="Upload Documents" />
                        <div className="p-5 grid grid-cols-3 gap-5">
                            <FileInput
                                label="Photo"
                                description="Upload a clear passport size photo (JPG/PNG)"
                                required
                                error={errors.photo?.message}
                                {...register("photo")}
                            />
                            <FileInput
                                label="Signature"
                                description="Upload your signature on white background (JPG/PNG)"
                                required
                                error={errors.signature?.message}
                                {...register("signature")}
                            />
                            <FileInput
                                label="Aadhaar"
                                description="Upload Aadhaar front side (JPG/PNG)"
                                required
                                error={errors.aadhaarDoc?.message}
                                {...register("aadhaarDoc")}
                            />
                        </div>
                    </div>

                    {/* ── Terms & Submit ───────────────────────────────────────────────── */}
                    <div className="flex items-center justify-between">
                        <div>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-orange-500"
                                    {...register("terms")}
                                />
                                <span className="text-sm text-gray-600">
                                    I accept{" "}
                                    <span className="text-orange-500 hover:underline cursor-pointer font-medium">
                                        Terms and Conditions
                                    </span>
                                </span>
                            </label>
                            <FieldError message={errors.terms?.message} />
                        </div>
                        <button
                            type="submit"
                            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm px-10 py-2.5 rounded transition-colors shadow"
                        >
                            Save
                        </button>
                    </div>

                </form>
            </div>
        </section>
    );
}