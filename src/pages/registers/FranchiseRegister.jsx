import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Image as ImageIcon } from "lucide-react";

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
    tradeLicense: z.any().refine((f) => f && f.length > 0, "Trade License is required"),
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
          className={`flex-1 border ${
            error
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
      className={`border-2 border-dashed rounded-lg p-5 bg-white text-center flex flex-col items-center gap-2 transition ${
        error ? "border-red-300 bg-red-50" : "border-gray-300"
      }`}
    >
      <div
        className={`w-20 h-20 rounded flex items-center justify-center ${
          fileName ? "bg-orange-50" : "bg-gray-50"
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

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("✅ Franchise form submitted:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 text-center max-w-sm w-full">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Registration Submitted!</h2>
          <p className="text-sm text-gray-500 mb-6">
            Your franchise registration has been saved successfully.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-2.5 rounded-lg text-sm transition shadow"
          >
            Register Another
          </button>
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
                <TextInput
                  label="Password" type="password"
                  placeholder="Enter Password"
                  required error={errors.password?.message}
                  {...register("password")}
                />
                <div className="sm:col-span-2">
                  <TextInput
                    label="Confirm Password" type="password"
                    placeholder="Confirm Password"
                    required error={errors.confirmPassword?.message}
                    {...register("confirmPassword")}
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
                label="Trade License" required
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
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold text-sm px-12 py-2.5 rounded transition-colors shadow-sm"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}