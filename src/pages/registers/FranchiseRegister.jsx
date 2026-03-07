import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Image as ImageIcon } from "lucide-react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import Recaptcha from "../../components/Recaptcha";

// ─── Zod Schema ────────────────────────────────────────────────────────────────
const schema = z
  .object({
    trainingCentreName: z.string().min(1, "Training Centre Name is required"),
    trainingCentreContact: z
      .string()
      .min(1, "Contact number is required")
      .regex(/^\d{10}$/, "Must be exactly 10 digits"),
    trainingCentreEmail: z
      .string()
      .min(1, "Email is required")
      .email("Enter a valid email address"),
    ownerName: z.string().min(1, "Owner Name is required"),
    ownerMobile: z
      .string()
      .min(1, "Owner Mobile is required")
      .regex(/^\d{10}$/, "Must be exactly 10 digits"),
    ownerEmail: z
      .string()
      .min(1, "Owner Email is required")
      .email("Enter a valid email address"),
    country: z
      .string()
      .min(1, "Please select a country")
      .refine((v) => v !== "Select Country", "Please select a country"),
    address: z.string().min(5, "Address must be at least 5 characters"),
    ps: z.string().min(1, "Ps is required"),
    district: z.string().min(1, "District is required"),
    pin: z
      .string()
      .min(1, "Pin is required")
      .regex(/^\d{6}$/, "Pin must be exactly 6 digits"),
    state: z
      .string()
      .min(1, "Please select a state")
      .refine((v) => v !== "Please Select State", "Please select a state"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Please confirm your password"),
    tradeLicenseNumber: z.string().min(1, "Trade License Number is required"),
    tradeLicense: z.any().refine((f) => f && f.length > 0, "Trade License (document) is required"),
    institutePhoto: z.any().refine((f) => f && f.length > 0, "Institute Photo is required"),
    directorPhoto: z.any().refine((f) => f && f.length > 0, "Director Photo is required"),
    directorSignature: z.any().refine((f) => f && f.length > 0, "Director Signature is required"),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// ─── Constants ─────────────────────────────────────────────────────────────────
const COUNTRIES = ["India", "USA", "UK", "Canada", "Australia"];
const STATES = [
  "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu",
  "Uttar Pradesh", "West Bengal", "Gujarat", "Rajasthan", "Punjab",
];

// ─── Shared Classes ────────────────────────────────────────────────────────────
const inputBase =
  "w-full border rounded px-3 py-2 text-sm text-gray-800 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 transition";
const inputNormal = `${inputBase} border-gray-300 focus:ring-orange-400 focus:border-orange-400`;
const inputErr = `${inputBase} border-red-400 focus:ring-red-300 bg-red-50`;

// ─── Reusable Components ───────────────────────────────────────────────────────
function SectionHeader({ title }) {
  return (
    <div className="bg-orange-500 px-4 py-2.5">
      <h2 className="text-white text-xs font-bold tracking-widest uppercase">{title}</h2>
    </div>
  );
}

function FieldError({ message }) {
  if (!message) return null;
  return (
    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
      <span>⚠</span>{message}
    </p>
  );
}

function FieldLabel({ children, required }) {
  return (
    <label className="block text-xs font-medium text-gray-600 mb-1">
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}

function TextInput({ label, placeholder, error, required, type = "text", ...rest }) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        type={type}
        className={error ? inputErr : inputNormal}
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
      <FieldLabel required={required}>{label}</FieldLabel>
      <select
        className={`${error ? inputErr : inputNormal} appearance-none cursor-pointer`}
        {...rest}
      >
        {children}
      </select>
      <FieldError message={error} />
    </div>
  );
}

function MobileInput({ label, error, required, hint, ...rest }) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <div className="flex">
        <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l text-sm text-gray-600 select-none">
          +91
        </span>
        <input
          type="tel"
          maxLength={10}
          className={`flex-1 border ${error
            ? "border-red-400 bg-red-50 focus:ring-red-300"
            : "border-gray-300 focus:ring-orange-400 focus:border-orange-400"
            } rounded-r px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 transition`}
          {...rest}
        />
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
      <FieldError message={error} />
    </div>
  );
}

function FileUploadBox({ label, error, required, onChange, name, ...rest }) {
  const [fileName, setFileName] = useState(null);
  return (
    <div
      className={`border-2 border-dashed rounded-lg p-5 bg-white text-center flex flex-col items-center gap-2 transition ${error ? "border-red-300 bg-red-50" : "border-gray-300"
        }`}
    >
      <div
        className={`w-20 h-20 rounded flex items-center justify-center ${fileName ? "bg-orange-50" : "bg-gray-50"
          }`}
      >
        {fileName ? (
          <span className="text-3xl">✅</span>
        ) : (
          <ImageIcon className="w-10 h-10 text-gray-400" />
        )}
      </div>
      <p className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </p>
      <label className="cursor-pointer">
        <span className="inline-block text-xs border border-gray-300 rounded px-3 py-1.5 bg-white text-gray-600 hover:bg-gray-50 transition">
          {fileName ? "Change file" : "Choose file"}
        </span>
        <input
          type="file"
          accept="image/*,.pdf"
          name={name}
          className="hidden"
          onChange={(e) => {
            setFileName(e.target.files?.[0]?.name || null);
            onChange?.(e);
          }}
          {...rest}
        />
      </label>
      {fileName ? (
        <p className="text-xs text-orange-600 font-medium truncate max-w-full px-2">{fileName}</p>
      ) : (
        <p className="text-xs text-gray-400">No file chosen</p>
      )}
      <FieldError message={error} />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function FranchiseRegister() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState(null);
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [resendBusy, setResendBusy] = useState(false);
  const [savedFormData, setSavedFormData] = useState(null); // Store full form for later finalization
  const [otpVerified, setOtpVerified] = useState(false); // Track if OTP step passed
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  // Step 1: Send OTP (extract only email, mobile, ownerName) + reCAPTCHA
  const onSubmit = (data) => {
    if (!captchaToken) {
      toast.error("Please complete the reCAPTCHA (I'm not a robot)");
      return;
    }
    setSubmitting(true);
    setSavedFormData(data); // Save full form data for later

    api.post("/franchise-submission/send-otp", {
      email: data.ownerEmail,
      mobile: data.ownerMobile,
      ownerName: data.ownerName,
      captchaToken,
    })
      .then((res) => {
        setSubmissionId(res.data.submissionId);
        setOtp("");
        setOtpVerified(false);
        setSubmitting(false);
        setCaptchaToken(null);
        recaptchaRef.current?.reset();
        toast.success("OTP sent to your email!");
        if (res.data.debugOtp) toast.info(`(Debug) OTP: ${res.data.debugOtp}`);
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
      await api.post("/franchise-submission/verify-otp", { submissionId, email: savedFormData.ownerEmail, otp });
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
      const formData = new FormData();
      Object.entries(savedFormData).forEach(([k, v]) => {
        if (v === undefined || v === null) return;
        if (["ownerEmail", "ownerMobile", "ownerName"].includes(k)) return;
        if (v instanceof FileList) {
          if (v.length > 0) formData.append(k, v[0]);
          return;
        }
        formData.append(k, v);
      });

      formData.append("submissionId", submissionId);
      formData.append("email", savedFormData.ownerEmail);
      formData.append("mobile", savedFormData.ownerMobile);
      formData.append("ownerName", savedFormData.ownerName);
      formData.append("instituteName", savedFormData.trainingCentreName);

      const res = await api.post("/franchise-submission/finalize", formData);
      if (res.data?.success) {
        setSubmitted(true);
        toast.success("Franchise registration submitted successfully!");
      } else {
        toast.error(res.data?.message || "Registration failed");
      }
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
      await api.post("/franchise-submission/resend-otp", { submissionId, email: savedFormData.ownerEmail });
      toast.success("OTP resent to your email");
    } catch (err) {
      console.error(err?.response?.data || err.message || err);
      toast.error(err?.response?.data?.message || "Resend failed");
    } finally {
      setResendBusy(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-md w-full">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Submitted!</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your franchise registration has been saved. Please login to access your dashboard.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            
            <button
              onClick={() => setSubmitted(false)}
              className="border border-orange-500 text-orange-500 font-semibold px-8 py-2.5 rounded-lg text-sm hover:bg-orange-50 transition"
            >
              Register Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submissionId && !otpVerified) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 px-4">
        <div className="bg-white rounded-xl shadow p-8 text-center max-w-md w-full">
          <h2 className="text-lg font-bold mb-3">Verify Your Email</h2>
          <p className="text-sm text-gray-600 mb-4">
            We've sent a 6-digit OTP to <strong>{savedFormData?.ownerEmail}</strong>. Enter it below to verify and complete registration.
          </p>
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            className="w-full border border-gray-300 rounded px-3 py-2 text-sm text-center text-lg tracking-widest mb-4"
            placeholder="000000"
          />
          <div className="flex gap-2">
            <button
              onClick={handleVerifyOtp}
              disabled={verifying || otp.length < 6}
              className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-400 text-white px-4 py-2 rounded font-semibold transition"
            >
              {verifying ? "Verifying..." : "Verify & Complete"}
            </button>
            <button
              onClick={handleResend}
              disabled={resendBusy}
              className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 disabled:opacity-50 px-4 py-2 rounded font-semibold transition"
            >
              {resendBusy ? "Resending..." : "Resend OTP"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-4">Check spam folder or click Resend if you didn't receive the OTP.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen   py-6 px-4">
      <div className="  mx-auto">

        {/* Page Header */}
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-gray-800">Franchise Registration</h1>
          <nav className="text-sm text-gray-400">
            <span className="text-orange-500 hover:underline cursor-pointer">Home</span>
            <span className="mx-1">/</span>
            <span className="text-gray-500">Franchise Registration</span>
          </nav>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">

          {/* ── Franchise Details ───────────────────────────────────────────── */}
          <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
            <SectionHeader title="Franchise Details" />
            <div className="p-5 space-y-4">

              {/* Row 1: Centre Name / Contact / Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TextInput
                  label="Training Centre Name" placeholder="Enter Training Centre Name"
                  required error={errors.trainingCentreName?.message}
                  {...register("trainingCentreName")}
                />
                <MobileInput
                  label="Training Centre Contact No" required
                  placeholder="Enter 10-digit mobile number"
                  hint="10-digit contact number"
                  error={errors.trainingCentreContact?.message}
                  {...register("trainingCentreContact")}
                />
                <TextInput
                  label="Training Centre Email ID" type="email"
                  placeholder="Enter Training Centre Email ID"
                  required error={errors.trainingCentreEmail?.message}
                  {...register("trainingCentreEmail")}
                />
              </div>

              {/* Row 2: Owner Name / Mobile / Email */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TextInput
                  label="Owner Name" placeholder="Enter Owner Name"
                  required error={errors.ownerName?.message}
                  {...register("ownerName")}
                />
                <MobileInput
                  label="Owner Mobile" required
                  placeholder="Enter 10-digit mobile number"
                  hint="10-digit mobile number"
                  error={errors.ownerMobile?.message}
                  {...register("ownerMobile")}
                />
                <TextInput
                  label="Owner Email" type="email"
                  placeholder="Enter Owner Email ID"
                  required error={errors.ownerEmail?.message}
                  {...register("ownerEmail")}
                />
              </div>

              {/* Row 3: Country / Address */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SelectInput
                  label="Country" required error={errors.country?.message}
                  {...register("country")}
                >
                  <option value="">-- Select Country --</option>
                  {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </SelectInput>
                <div className="sm:col-span-2">
                  <FieldLabel required>Address</FieldLabel>
                  <textarea
                    rows={4}
                    className={`${errors.address ? inputErr : inputNormal} resize-none`}
                    placeholder="Vill/Town/City, Post Office, Police Station"
                    {...register("address")}
                  />
                  <FieldError message={errors.address?.message} />
                </div>
              </div>

              {/* Row 4: Ps / District */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TextInput
                  label="Ps" placeholder="Enter Ps Name"
                  required error={errors.ps?.message}
                  {...register("ps")}
                />
                <div className="sm:col-span-2">
                  <TextInput
                    label="District" placeholder="Enter District Name"
                    required error={errors.district?.message}
                    {...register("district")}
                  />
                </div>
              </div>

              {/* Row 5: Pin / State */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <TextInput
                  label="Pin" placeholder="Enter Pin Number"
                  required error={errors.pin?.message}
                  maxLength={6}
                  {...register("pin")}
                />
                <div className="sm:col-span-2">
                  <SelectInput
                    label="State" required error={errors.state?.message}
                    {...register("state")}
                  >
                    <option value="">-- Please Select State --</option>
                    {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </SelectInput>
                </div>
              </div>

              {/* Row 6: Password / Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <FieldLabel required>Password</FieldLabel>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full border ${errors.password ? "border-red-400" : "border-gray-300"} rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400`}
                      placeholder="Enter password"
                      {...register("password")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <FieldError message={errors.password?.message} />
                </div>
                <div>
                  <FieldLabel required>Confirm Password</FieldLabel>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`w-full border ${errors.confirmPassword ? "border-red-400" : "border-gray-300"} rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400`}
                      placeholder="Confirm password"
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      {showConfirmPassword ? (
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  <FieldError message={errors.confirmPassword?.message} />
                </div>
                <div>
                  <TextInput
                    label="Trade License Number"
                    placeholder="Enter Trade License Number"
                    required
                    error={errors.tradeLicenseNumber?.message}
                    {...register("tradeLicenseNumber")}
                  />
                </div>
              </div>

            </div>
          </div>

          {/* ── KYC ────────────────────────────────────────────────────────── */}
          <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
            <SectionHeader title="KYC" />
            <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <FileUploadBox
                label="Trade License (document upload)" required
                error={errors.tradeLicense?.message}
                {...register("tradeLicense")}
              />
              <FileUploadBox
                label="Institute Photo" required
                error={errors.institutePhoto?.message}
                {...register("institutePhoto")}
              />
              <FileUploadBox
                label="Director Photo" required
                error={errors.directorPhoto?.message}
                {...register("directorPhoto")}
              />
              <FileUploadBox
                label="Director Signature" required
                error={errors.directorSignature?.message}
                {...register("directorSignature")}
              />
            </div>
          </div>

          {/* ── reCAPTCHA ──────────────────────────────────────────────────── */}
          <div className="bg-white border border-gray-200 rounded-md p-4">
            <Recaptcha ref={recaptchaRef} onChange={setCaptchaToken} />
          </div>

          {/* ── Terms & Submit ──────────────────────────────────────────────── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6">
            <div>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-orange-500 cursor-pointer"
                  {...register("acceptTerms")}
                />
                <span className="text-sm text-gray-600">
                  I accept{" "}
                  <span className="text-orange-500 hover:underline cursor-pointer font-medium">
                    Terms and Conditions
                  </span>
                </span>
              </label>
              <FieldError message={errors.acceptTerms?.message} />
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !captchaToken}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold text-sm px-12 py-2.5 rounded transition-colors shadow-sm"
            >
              {isSubmitting ? "Sending OTP..." : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}