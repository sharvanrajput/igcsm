// import {
//     InputOTP,
//     InputOTPGroup,
//     InputOTPSeparator,
//     InputOTPSlot,
// } from "@/components/ui/input-otp";
// import { api } from '@/services/api';
// import { REGEXP_ONLY_DIGITS } from "input-otp";
// import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
// import { useState } from 'react';
// import { toast } from 'react-toastify';
// import { email, z } from "zod";

// const registerSchema = z.object({
//     studentName: z.string().trim().min(5, "Student name is more then 5 Charactor"),
//     mobile: z.string().min(10, "mobile number must be 10 digits").max(10, "mobile number must be 10 digits"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Password must be at least 6 characters"),
// })


// const otpSchema = z.object({
//     otp: z
//         .string()
//         .length(6, "OTP must be 6 digits")
//         .regex(/^\d+$/, "OTP must contain only numbers"),
// });

// const personalSchema = z.object({
//     fatherName: z.string().trim().min(5, "Father name is required"),
//     motherName: z.string().trim().min(5, "Mother name is required"),
//     gender: z.enum(["male", "female", "other"], {
//         errorMap: () => ({ message: "Gender is required" }),
//     }),
//     dob: z.string().min(1, "Date of birth is required"),
//     aadhaar: z.string().length(12, "Aadhaar must be 12 digits"),
//     country: z.string().default("India"),
//     address: z.string().min(1, "Address is required"),
//     district: z.string().min(1, "District is required"),
//     state: z.string().min(1, "State is required"),
//     pin: z.string().length(6, "PIN must be 6 digits"),

//     alternateMobile: z.string().optional(),

// });

// const StudentRegistrationForm = () => {
//     // ================= PERSONAL FORM STATE =================
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [step, setStep] = useState("register");
//     const [otp, setOtp] = useState('');


//     const [studentRegister, setStudentRegister] = useState({
//         studentName: '',
//         mobile: '',
//         email: '',
//         password: '',
//     });

//     // ================= PERSONAL HANDLERS =================

//     const handleInputRegister = (e) => {
//         const { name, value } = e.target;

//         setStudentRegister((prev) => ({
//             ...prev,
//             [name]: value,
//         }));

//         // clear error for that field
//         setErrors((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//     };


//     const [personalFormData, setPersonalFormData] = useState({

//         fatherName: '',
//         motherName: '',
//         gender: '',
//         dob: '',
//         aadhaar: '',
//         country: 'India',
//         address: '',
//         district: '',
//         state: '',
//         pin: '',



//     });

//     // ================= ACADEMIC FORM STATE =================
//     const [academicFormData, setAcademicFormData] = useState({
//         instituteName: 'NCTA Expert Pvt Ltd',
//         course: '',
//         qualification: '',
//         qualificationCert: null,
//         photo: null,
//         signature: null,
//         aadhaarDoc: null,
//         acceptTerms: false
//     });

//     const [selectedLanguage, setSelectedLanguage] = useState({
//         admission: 'english',
//         certificate: 'english'
//     });

//     const courses = [
//         'Select Course',
//         'Diploma in Computer Application',
//         'Advanced Excel',
//         'Web Development',
//         'Digital Marketing',
//         'Graphic Design'
//     ];

//     const states = [
//         'Select State',
//         'Delhi',
//         'Maharashtra',
//         'Karnataka',
//         'Tamil Nadu',
//         'Uttar Pradesh',
//         'West Bengal'
//     ];

//     // ================= PERSONAL HANDLERS =================
//     const handlePersonalInputChange = (e) => {
//         const { name, value } = e.target;
//         setPersonalFormData(prev => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handlePersonalSubmit = async (e) => {
//         e.preventDefault();

//         const result = personalSchema.safeParse(personalFormData);

//         if (!result.success) {
//             const fieldErrors = {};
//             result?.error?.errors?.forEach(err => {
//                 const field = err.path?.[0];
//                 if (field) fieldErrors[field] = err.message;
//                 console.log(fieldErrors)
//             });
//             setErrors(fieldErrors);
//             return;
//         }

//         setErrors({});

//         try {
//             const res = await api.post("/student/student-data-save", result?.data);
//             // const res = await api.post("/student/student-data-save", personalFormData);

//             if (res.data.success) {
//                 toast.success("OTP sent on your email");

//                 setPersonalFormData({
//                     studentName: '',
//                     fatherName: '',
//                     motherName: '',
//                     gender: '',
//                     dob: '',
//                     aadhaar: '',
//                     country: 'India',
//                     address: '',
//                     district: '',
//                     state: '',
//                     pin: '',
//                     mobile: '',
//                     alternateMobile: '',
//                     email: '',
//                     password: '',
//                 });
//             }
//         } catch (error) {
//             console.log(error?.response?.data || error.message);
//             toast.error(error?.response?.data?.message || "Something went wrong");
//         }
//     };

//     // ================= ACADEMIC HANDLERS =================
//     const handleAcademicInputChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setAcademicFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleAcademicFileChange = (e, fieldName) => {
//         const file = e.target.files[0];
//         setAcademicFormData(prev => ({
//             ...prev,
//             [fieldName]: file
//         }));
//     };

//     const handleAcademicSubmit = (e) => {
//         e.preventDefault();
//         console.log("Academic Form Submitted:", academicFormData);
//     };



//     const handleRegister = async (e) => {
//         e.preventDefault();

//         const result = registerSchema.safeParse(studentRegister);

//         if (!result.success) {
//             const fieldErrors = {};

//             result.error.issues.forEach((issue) => {
//                 const field = issue.path[0];
//                 fieldErrors[field] = issue.message;
//             });

//             setErrors(fieldErrors);
//             return;
//         }

//         try {
//             setLoading(true);
//             setErrors({});

//             const res = await api.post("/student/register", studentRegister);

//             if (!res.data.success) {
//                 toast.error(res.data.message);
//                 return;
//             }

//             console.log("Valid Data:", res.data);

//             toast.success("OTP sent to your email 📩");
//             setStep("otp");

//         } catch (error) {
//             toast.error(error?.response?.data?.message || "Something went wrong");
//         } finally {
//             setLoading(false);
//         }
//     };


//     const handleOtpSubmit = async (e) => {
//         e.preventDefault();

//         const result = otpSchema.safeParse({ otp });

//         if (!result.success) {
//             setErrors({ otp: result.error.issues[0].message });
//             return;
//         }

//         try {
//             setLoading(true);
//             setErrors({});
//             const email = studentRegister?.email
//             const res = await api.post("/student/verify-email", { otp, email });

//             if (!res.data.success) {
//                 setErrors({ otp: res.data.message });
//                 return;
//             }

//             toast.success("OTP Verified ✅");
//             setStep("personal");

//         } catch (err) {
//             setErrors({ otp: "Something went wrong" });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className=" pb-20 pt-10    ">
//             <div className=" mx-auto">
//                 {step === "register" &&
//                     <form onSubmit={handleRegister} className='max-w-md mx-auto' >
//                         <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
//                             <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
//                                 <h2 className="font-semibold text-2xl text-center tracking-wide">Student Register</h2>
//                             </div>
//                             <div className="p-4 sm:p-6 ">
//                                 <div className=" space-y-4  gap-6">

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Student Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             disabled={loading}
//                                             name="studentName"
//                                             value={studentRegister.studentName}
//                                             onChange={handleInputRegister}
//                                             placeholder="Enter Student's Name"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.studentName && (
//                                             <p className="text-red-500 text-xs">{errors.studentName}</p>
//                                         )}
//                                     </div>


//                                     <div className="md:col-span-2">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Mobile No. <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="flex gap-2">
//                                             <input
//                                                 type="text"
//                                                 value="+91"
//                                                 readOnly
//                                                 className="w-16 px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-center"
//                                             />
//                                             <input
//                                                 type="tel"
//                                                 name="mobile"
//                                                 disabled={loading}
//                                                 value={studentRegister.mobile}
//                                                 onChange={handleInputRegister}
//                                                 placeholder="Enter 10-digit mobile number"
//                                                 maxLength="10"
//                                                 className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                                 required
//                                             />
//                                         </div>
//                                         {errors.mobile && (
//                                             <p className="text-red-500 text-xs">{errors.mobile}</p>
//                                         )}
//                                     </div>


//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Email
//                                         </label>
//                                         <input
//                                             type="email"
//                                             name="email"
//                                             disabled={loading}
//                                             value={studentRegister.email}
//                                             onChange={handleInputRegister}
//                                             placeholder="Enter Email Address"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.email && (
//                                             <p className="text-red-500 text-xs">{errors.email}</p>
//                                         )}
//                                     </div>

//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="password"
//                                             disabled={loading}
//                                             value={studentRegister.password}
//                                             onChange={handleInputRegister}
//                                             placeholder="Enter Email Address"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.password && (
//                                             <p className="text-red-500  text-xs">{errors.password}</p>
//                                         )}
//                                     </div>

//                                     <div className="flex flex-col mt-5 sm:flex-row items-start sm:items-center justify-between gap-4">

//                                         <button
//                                             type="submit"
//                                             className="w-full  bg-orange-500 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
//                                         >

//                                             {loading ? "Loading..." : "Register"}
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </form>
//                 }

//                 {step === "otp" &&
//                     <form
//                         onSubmit={handleOtpSubmit}
//                         className="w-full max-w-md mb-10 mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
//                     >
//                         {/* header */}
//                         <div className="bg-orange-500 text-white py-4 text-center">
//                             <h2 className="text-2xl font-semibold">Verify OTP</h2>
//                             <p className="text-sm text-white opacity-90">
//                                 Enter the 6-digit code sent to your email
//                             </p>
//                         </div>

//                         {/* body */}
//                         <div className="p-6 space-y-6">

//                             <div className="flex justify-center">
//                                 <InputOTP
//                                     name="otp"
//                                     value={otp}
//                                     onChange={(val) => {
//                                         setOtp(val)
//                                         setErrors("")
//                                     }}
//                                     maxLength={6}
//                                     pattern={REGEXP_ONLY_DIGITS}
//                                 >
//                                     {[0, 1, 2, 3, 4, 5].map((i) => (
//                                         <InputOTPGroup key={i}>
//                                             <InputOTPSlot index={i} />
//                                         </InputOTPGroup>
//                                     ))}
//                                 </InputOTP>
//                             </div>

//                             {errors.otp && (
//                                 <p className="text-red-500 text-sm text-center">{errors.otp}</p>
//                             )}
//                             <div className="flex justify-between">

//                                 <button

//                                     disabled={loading}
//                                     onClick={() => setStep("register")}
//                                     className=" flex  gap-2 bg-orange-500 px-3 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
//                                 >
//                                     <ArrowLeft />  back
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="  bg-orange-500 px-3 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
//                                 >
//                                     {loading ? "Verifying..." : "Verify OTP"}
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 }
//                 {step === "personal" &&
//                     < form onSubmit={handlePersonalSubmit}>
//                         {/* Admission & Student Cycle Help Videos */}

//                         {/* Personal Details */}
//                         <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
//                             <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
//                                 <h2 className="font-semibold uppercase tracking-wide">Personal Details</h2>
//                             </div>
//                             <div className="p-4 sm:p-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                     {/* Student Name */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Student Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="studentName"
//                                             value={personalFormData.studentName}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Student's Name"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.studentName && (
//                                             <p className="text-red-500 text-xs">{errors.studentName}</p>
//                                         )}
//                                     </div>

//                                     {/* Father's Name */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Father's Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="fatherName"

//                                             value={personalFormData.fatherName}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Father's Name"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.fatherName && (
//                                             <p className="text-red-500 text-xs">{errors.fatherName}</p>
//                                         )}
//                                     </div>

//                                     {/* Mother's Name */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Mother's Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="motherName"

//                                             value={personalFormData.motherName}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Mother's Name"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.motherName && (
//                                             <p className="text-red-500 text-xs">{errors.motherName}</p>
//                                         )}
//                                     </div>

//                                     {/* Gender */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Gender <span className="text-red-500">*</span>
//                                         </label>
//                                         <select
//                                             name="gender"
//                                             value={personalFormData.gender}
//                                             onChange={handlePersonalInputChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         >
//                                             <option value="">--Select Gender--</option>
//                                             <option value="male">Male</option>
//                                             <option value="female">Female</option>
//                                             <option value="other">Other</option>
//                                         </select>
//                                         {errors.gender && (
//                                             <p className="text-red-500 text-xs">{errors.gender}</p>
//                                         )}
//                                     </div>



//                                     {/* Date of Birth */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Date of Birth <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="relative">
//                                             <input
//                                                 type="date"
//                                                 name="dob"
//                                                 value={personalFormData.dob}
//                                                 onChange={handlePersonalInputChange}
//                                                 placeholder="dd/mm/yyyy"
//                                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                                 required
//                                             />

//                                             {errors.dob && (
//                                                 <p className="text-red-500 text-xs">{errors.dob}</p>
//                                             )}
//                                         </div>
//                                     </div>

//                                     {/* Aadhaar No */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Aadhaar No
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="aadhaar"

//                                             value={personalFormData.aadhaar}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Aadhaar Number"
//                                             maxLength="12"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.aadhaar && (
//                                             <p className="text-red-500 text-xs">{errors.aadhaar}</p>
//                                         )}
//                                     </div>

//                                     {/* Country */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Country <span className="text-red-500">*</span>
//                                         </label>
//                                         <select
//                                             name="country"

//                                             value={personalFormData.country}
//                                             onChange={handlePersonalInputChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         >
//                                             <option value="India">India</option>
//                                             <option value="USA">USA</option>
//                                             <option value="UK">UK</option>
//                                         </select>
//                                         {errors.country && (
//                                             <p className="text-red-500 text-xs">{errors.country}</p>
//                                         )}
//                                     </div>

//                                     {/* Address */}
//                                     <div className="md:col-span-2">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Address<span className="text-red-500">*</span>
//                                         </label>
//                                         <textarea
//                                             name="address"

//                                             value={personalFormData.address}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Vill/Town/City, Post Office, Police Station"
//                                             rows="2"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         ></textarea>
//                                         {errors.address && (
//                                             <p className="text-red-500 text-xs">{errors.address}</p>
//                                         )}
//                                     </div>

//                                     {/* District */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             District<span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="district"

//                                             value={personalFormData.district}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter District"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.district && (
//                                             <p className="text-red-500 text-xs">{errors.district}</p>
//                                         )}
//                                     </div>

//                                     {/* State */}
//                                     <div className="md:col-span-2">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             State <span className="text-red-500">*</span>
//                                         </label>
//                                         <select
//                                             name="state"

//                                             value={personalFormData.state}
//                                             onChange={handlePersonalInputChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         >
//                                             {states.map((state, index) => (
//                                                 <option key={index} value={state}>{state}</option>
//                                             ))}
//                                         </select>
//                                         {errors.state && (
//                                             <p className="text-red-500 text-xs">{errors.state}</p>
//                                         )}
//                                     </div>

//                                     {/* Pin */}
//                                     <div className="md:col-span-1">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Pin<span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="pin"

//                                             value={personalFormData.pin}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Pin Number"
//                                             maxLength="6"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         />
//                                         {errors.pin && (
//                                             <p className="text-red-500 text-xs">{errors.pin}</p>
//                                         )}
//                                     </div>

//                                     {/* Mobile No */}
//                                     <div className="md:col-span-2">
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Mobile No. <span className="text-red-500">*</span>
//                                         </label>
//                                         <div className="flex gap-2">
//                                             <input
//                                                 type="text"
//                                                 value="+91"
//                                                 readOnly
//                                                 className="w-16 px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-center"
//                                             />
//                                             <input
//                                                 type="tel"
//                                                 name="mobile"

//                                                 value={personalFormData.mobile}
//                                                 onChange={handlePersonalInputChange}
//                                                 placeholder="Enter 10-digit mobile number"
//                                                 maxLength="10"
//                                                 className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                                 required
//                                             />
//                                             {errors.mobile && (
//                                                 <p className="text-red-500 text-xs">{errors.mobile}</p>
//                                             )}
//                                         </div>
//                                         <p className="text-xs text-gray-500 mt-1">10-digit mobile number</p>
//                                     </div>

//                                     {/* Alternative Mobile No */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Alternative Mobile No.
//                                         </label>
//                                         <input
//                                             type="tel"
//                                             name="alternateMobile"

//                                             value={personalFormData.alternateMobile}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Student's alternative Mobile Number"
//                                             maxLength="10"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.alternateMobile && (
//                                             <p className="text-red-500 text-xs">{errors.alternateMobile}</p>
//                                         )}
//                                     </div>

//                                     {/* Email */}
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Email
//                                         </label>
//                                         <input
//                                             type="email"
//                                             name="email"

//                                             value={personalFormData.email}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Email Address"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.email && (
//                                             <p className="text-red-500 text-xs">{errors.email}</p>
//                                         )}
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Password
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="password"
//                                             value={personalFormData.password}
//                                             onChange={handlePersonalInputChange}
//                                             placeholder="Enter Email Address"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                         {errors.password && (
//                                             <p className="text-red-500 text-xs">{errors.password}</p>
//                                         )}
//                                     </div>
//                                     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

//                                         <button
//                                             type="submit"
//                                             className="w-full sm:w-auto bg-orange-500 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
//                                         >
//                                             Save
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>






//                     </form>
//                 }


//                 {false &&
//                     <form onSubmit={handleAcademicSubmit}>
//                         {/* Admission & Student Cycle Help Videos */}
//                         <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
//                             <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
//                                 ADMISSION & STUDENT CYCLE HELP VIDEOS
//                             </h2>

//                             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//                                 {/* How to Take Admission */}
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900 mb-2">How to Take Admission</h3>
//                                     <p className="text-sm text-gray-600 mb-3">Select language:</p>
//                                     <div className="flex gap-2">
//                                         <button
//                                             type="button"
//                                             onClick={() => setSelectedLanguage(prev => ({ ...prev, admission: 'english' }))}
//                                             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.admission === 'english'
//                                                 ? 'bg-orange-500 text-white'
//                                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                                 }`}
//                                         >
//                                             English
//                                         </button>
//                                         <button
//                                             type="button"
//                                             onClick={() => setSelectedLanguage(prev => ({ ...prev, admission: 'hindi' }))}
//                                             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.admission === 'hindi'
//                                                 ? 'bg-orange-500 text-white'
//                                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                                 }`}
//                                         >
//                                             Hindi
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Student Cycle */}
//                                 <div>
//                                     <h3 className="font-semibold text-gray-900 mb-2">Student Cycle from Admission to Certificate</h3>
//                                     <p className="text-sm text-gray-600 mb-3">Select language:</p>
//                                     <div className="flex gap-2">
//                                         <button
//                                             type="button"
//                                             onClick={() => setSelectedLanguage(prev => ({ ...prev, certificate: 'english' }))}
//                                             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.certificate === 'english'
//                                                 ? 'bg-orange-500 text-white'
//                                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                                 }`}
//                                         >
//                                             English
//                                         </button>
//                                         <button
//                                             type="button"
//                                             onClick={() => setSelectedLanguage(prev => ({ ...prev, certificate: 'hindi' }))}
//                                             className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.certificate === 'hindi'
//                                                 ? 'bg-orange-500 text-white'
//                                                 : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//                                                 }`}
//                                         >
//                                             Hindi
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Academic Details */}
//                         <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
//                             <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
//                                 <h2 className="font-semibold uppercase tracking-wide">Academic Details</h2>
//                             </div>
//                             <div className="p-4 sm:p-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Institute/Franchise Name <span className="text-red-500">*</span>
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="instituteName"
//                                             value={academicFormData.instituteName}
//                                             onChange={handleAcademicInputChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             readOnly
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Course <span className="text-red-500">*</span>
//                                         </label>
//                                         <select
//                                             name="course"
//                                             value={academicFormData.course}
//                                             onChange={handleAcademicInputChange}
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                             required
//                                         >
//                                             {courses.map((course, index) => (
//                                                 <option key={index} value={course}>{course}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>


//                         {/* Educational Qualification */}
//                         <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
//                             <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
//                                 <h2 className="font-semibold uppercase tracking-wide">Educational Qualification</h2>
//                             </div>
//                             <div className="p-4 sm:p-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Educational Qualification
//                                         </label>
//                                         <input
//                                             type="text"
//                                             name="qualification"

//                                             value={academicFormData.qualification}
//                                             onChange={handleAcademicInputChange}
//                                             placeholder="Enter Educational Qualification"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium text-gray-700 mb-2">
//                                             Qualification Certificate
//                                         </label>
//                                         <input
//                                             type="file"
//                                             onChange={(e) => handleFileChange(e, 'qualificationCert')}
//                                             accept=".pdf,.jpg,.jpeg,.png"
//                                             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Upload Documents */}
//                         <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
//                             <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
//                                 <h2 className="font-semibold uppercase tracking-wide">Upload Documents</h2>
//                             </div>
//                             <div className="p-4 sm:p-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                                     {/* Photo */}
//                                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
//                                         <div className="text-center">
//                                             <div className="mb-4 flex justify-center">
//                                                 <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
//                                                     <ImageIcon className="w-10 h-10 text-gray-400" />
//                                                 </div>
//                                             </div>
//                                             <h3 className="font-semibold text-gray-900 mb-2">Photo</h3>
//                                             <p className="text-xs text-gray-600 mb-4">Upload a clear passport size photo (JPG/PNG)</p>
//                                             <input
//                                                 type="file"
//                                                 onChange={(e) => handleFileChange(e, 'photo')}
//                                                 accept="image/*"
//                                                 className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Signature */}
//                                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
//                                         <div className="text-center">
//                                             <div className="mb-4 flex justify-center">
//                                                 <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
//                                                     <ImageIcon className="w-10 h-10 text-gray-400" />
//                                                 </div>
//                                             </div>
//                                             <h3 className="font-semibold text-gray-900 mb-2">Signature</h3>
//                                             <p className="text-xs text-gray-600 mb-4">Upload your signature on white background (JPG/PNG)</p>
//                                             <input
//                                                 type="file"
//                                                 onChange={(e) => handleFileChange(e, 'signature')}
//                                                 accept="image/*"
//                                                 className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                                             />
//                                         </div>
//                                     </div>

//                                     {/* Aadhaar */}
//                                     <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
//                                         <div className="text-center">
//                                             <div className="mb-4 flex justify-center">
//                                                 <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
//                                                     <ImageIcon className="w-10 h-10 text-gray-400" />
//                                                 </div>
//                                             </div>
//                                             <h3 className="font-semibold text-gray-900 mb-2">Aadhaar</h3>
//                                             <p className="text-xs text-gray-600 mb-4">Upload Aadhaar front side (JPG/PNG)</p>
//                                             <input
//                                                 type="file"
//                                                 onChange={(e) => handleFileChange(e, 'aadhaarDoc')}
//                                                 accept="image/*,.pdf"
//                                                 className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Terms and Submit */}
//                         <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
//                             <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//                                 <div className="flex items-start gap-2">
//                                     <input
//                                         type="checkbox"
//                                         name="acceptTerms"
//                                         checked={formData.acceptTerms}
//                                         onChange={handleInputChange}
//                                         className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
//                                         required
//                                     />
//                                     <label className="text-sm text-gray-700">
//                                         I accept{' '}
//                                         <a href="#" className="text-blue-600 hover:underline">
//                                             Terms and Conditions
//                                         </a>
//                                     </label>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full sm:w-auto bg-orange-500 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
//                                 >
//                                     Save
//                                 </button>
//                             </div>
//                         </div>

//                     </form>
//                 }
//             </div>
//         </div >
//     );
// };

// export default StudentRegistrationForm;







import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { api } from '@/services/api';
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { useEffect, useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { z } from "zod";
import success from "@/assets/images/thankyou.svg"
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

// bring course metadata for dynamic dropdowns
import { courses as courseData } from '@/components/data/courses';


// ================= SCHEMAS =================
const registerSchema = z
    .object({
        studentName: z.string().trim().min(5, "Student name must be more than 5 characters"),
        mobile: z.string().min(10, "Mobile number must be 10 digits").max(10, "Mobile number must be 10 digits"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters"),
        confirmPassword: z.string().min(6, "Confirm password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });

const otpSchema = z.object({
    otp: z
        .string()
        .length(6, "OTP must be 6 digits")
        .regex(/^\d+$/, "OTP must contain only numbers"),
});

const academicPersonalSchema = z.object({
    // Personal fields
    fatherName: z.string().trim().min(5, "Father name must be at least 5 characters"),
    motherName: z.string().trim().min(5, "Mother name must be at least 5 characters"),
    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Gender is required" }),
    }),
    dob: z.string().min(1, "Date of birth is required"),
    aadhaar: z.string().length(12, "Aadhaar must be 12 digits"),
    country: z.string().default("India"),
    address: z.string().min(1, "Address is required"),
    district: z.string().min(1, "District is required"),
    state: z.string().min(1, "State is required"),
    pin: z.string().length(6, "PIN must be 6 digits"),


    // Academic fields
    instituteName: z.string().min(1, "Institute name is required"),
    duration: z.string().min(1, "Duration is required").refine(v => v !== "", "Please select a duration"),
    course: z.string().min(1, "Course is required").refine(v => v !== "", "Please select a course"),
    qualification: z.string().optional(),
    acceptTerms: z.boolean().refine(v => v === true, "You must accept the terms and conditions"),

    // Language preferences
    admissionLanguage: z.enum(["english", "hindi"]).default("english"),
    certificateLanguage: z.enum(["english", "hindi"]).default("english"),
});


const StudentRegistrationForm = (props) => {
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState("register");
    const [otp, setOtp] = useState('');



    // ================= REGISTER STATE =================
    const [studentRegister, setStudentRegister] = useState({
        studentName: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // ================= COMBINED FORM STATE =================
    const [formData, setFormData] = useState({
        // Personal
        fatherName: '',
        motherName: '',
        gender: '',
        dob: '',
        aadhaar: '',
        country: 'India',
        address: '',
        district: '',
        state: '',
        pin: '',

        // Academic
        instituteName: 'NCTA Expert Pvt Ltd',
        duration: props?.duration || '',  // will be duration (Certification, Diploma, etc.)
        course: props?.coursename || '',
        qualification: '',
        qualificationCert: null,
        photo: null,
        signature: null,
        aadhaarDoc: null,
        acceptTerms: false,

        // Language preferences
        admissionLanguage: 'english',
        certificateLanguage: 'english',
    });

    // derive list of unique durations from courses data
    const ALL_DURATIONS = useMemo(() => {
        const seen = new Set();
        const list = [];
        courseData.forEach(c => {
            if (!seen.has(c.subcategory)) {
                seen.add(c.subcategory);
                list.push(c.subcategory);
            }
        });
        return list.sort();
    }, []);

    const coursesByDuration = useMemo(() => {
        const map = new Map();
        courseData.forEach(c => {
            if (!map.has(c.subcategory)) map.set(c.subcategory, []);
            // push unique course names only
            const arr = map.get(c.subcategory);
            if (!arr.includes(c.major)) arr.push(c.major);
        });
        return map;
    }, []);

    // helper for options shown in course dropdown
    const availableCourses = useMemo(() => {
        return coursesByDuration.get(formData.duration) || [];
    }, [formData.duration, coursesByDuration]);

    // if incoming props change (may come from URL) or user data is available, update formData
    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            duration: props?.duration || prev.duration,
            course: props?.coursename || prev.course,
        }));
    }, [props?.duration, props?.coursename]);

    // fetch current authenticated user and prefill duration/course if available
    useEffect(() => {
        let mounted = true;
        const loadMe = async () => {
            try {
                const res = await api.get('/student/me');
                if (!mounted) return;
                if (res?.data?.success && res.data.user) {
                    const u = res.data.user;
                    setFormData(prev => ({
                        ...prev,
                        duration: u.duration || prev.duration,
                        course: u.course || prev.course,
                        instituteName: u.instituteName || prev.instituteName,
                    }));
                    setStudentRegister(prev => ({
                        ...prev,
                        studentName: u.studentName || prev.studentName,
                        email: u.email || prev.email,
                        mobile: u.mobile || prev.mobile,
                    }));
                }
            } catch (err) {
                // ignore if not authenticated
            }
        };
        loadMe();
        return () => { mounted = false };
    }, []);

    const states = [
        'Select State',
        'Delhi',
        'Maharashtra',
        'Karnataka',
        'Tamil Nadu',
        'Uttar Pradesh',
        'West Bengal',
    ];

    // ================= UNIFIED HANDLERS =================
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => {
            const next = {
                ...prev,
                [name]: type === 'checkbox' ? checked : value,
            };
            // if duration changes, reset course value
            if (name === 'duration') {
                next.course = '';
            }
            return next;
        });
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setFormData(prev => ({ ...prev, [fieldName]: file }));
    };

    const handleLanguageChange = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    // ================= REGISTER HANDLER =================
    const handleInputRegister = (e) => {
        const { name, value } = e.target;
        setStudentRegister(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        const result = registerSchema.safeParse(studentRegister);

        if (!result.success) {
            const fieldErrors = {};
            result.error.issues.forEach(issue => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        try {
            setLoading(true);
            setErrors({});
            // send only the fields needed by the API (exclude confirmPassword)
            const payload = {
                studentName: result.data.studentName,
                mobile: result.data.mobile,
                email: result.data.email,
                password: result.data.password,
            };
            const res = await api.post("/student/register", payload);

            if (!res.data.success) {
                toast.error(res.data.message);
                return;
            }

            toast.success("OTP sent to your email 📩");
            setStep("otp");
        } catch (error) {
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    // ================= OTP HANDLER =================
    const handleOtpSubmit = async (e) => {
        e.preventDefault();
        const result = otpSchema.safeParse({ otp });

        if (!result.success) {
            setErrors({ otp: result.error.issues[0].message });
            return;
        }

        try {
            setLoading(true);
            setErrors({});
            const res = await api.post("/student/verify-email", {
                otp,
                email: studentRegister.email,
            });

            if (!res.data.success) {
                setErrors({ otp: res.data.message });
                return;
            }

            toast.success("OTP Verified ✅");
            setStep("personal");
        } catch (err) {
            setErrors({ otp: "Something went wrong" });
        } finally {
            setLoading(false);
        }
    };

    // ================= PERSONAL + ACADEMIC SUBMIT =================
    const handlePersonalAcademicSubmit = async (e) => {
        e.preventDefault();

        // Validate that all required files are uploaded
        if (!formData.photo) {
            setErrors(prev => ({ ...prev, photo: "Photo is required" }));
            return;
        }
        if (!formData.signature) {
            setErrors(prev => ({ ...prev, signature: "Signature is required" }));
            return;
        }
        if (!formData.aadhaarDoc) {
            setErrors(prev => ({ ...prev, aadhaarDoc: "Aadhaar document is required" }));
            return;
        }
        if (!formData.qualificationCert) {
            setErrors(prev => ({ ...prev, qualificationCert: "Qualification certificate is required" }));
            return;
        }

        // Extract only the fields that zod schema validates (exclude File objects)
        const dataToValidate = {
            fatherName: formData.fatherName,
            motherName: formData.motherName,
            gender: formData.gender,
            dob: formData.dob,
            aadhaar: formData.aadhaar,
            country: formData.country,
            address: formData.address,
            district: formData.district,
            state: formData.state,
            pin: formData.pin,
            instituteName: formData.instituteName,
            duration: formData.duration,
            course: formData.course,
            qualification: formData.qualification,
            acceptTerms: formData.acceptTerms,
            admissionLanguage: formData.admissionLanguage,
            certificateLanguage: formData.certificateLanguage,

        };

        const result = academicPersonalSchema.safeParse(dataToValidate);
        console.log("before")

        if (!result.success) {
            const fieldErrors = {};
            result?.error?.issues?.forEach(err => {
                const field = err.path?.[0];
                if (field) fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            const firstErrorField = Object.keys(fieldErrors)[0];
            document.getElementsByName(firstErrorField)?.[0]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }
        console.log("after")

        setErrors({});

        try {
            setLoading(true);

            // Use FormData to support file uploads
            const payload = new FormData();

            // Append validated fields
            Object.entries(result.data).forEach(([key, value]) => {
                payload.append(key, value);
            });

            // Append file fields separately
            if (formData.qualificationCert) payload.append('qualificationCert', formData.qualificationCert);
            if (formData.photo) payload.append('photo', formData.photo);
            if (formData.signature) payload.append('signature', formData.signature);
            if (formData.aadhaarDoc) payload.append('aadhaarDoc', formData.aadhaarDoc);

            // Let axios set multipart boundary header automatically
            const res = await api.patch("/student/student-update", payload);

            if (!res.data.success) {
                toast.error(res.data.message || "Failed to save data");
                return;
            }

            console.log("working or not ")
            toast.success("Details saved successfully ✅");
            setStep("success")

        } catch (error) {
            console.error(error?.response?.data || error.message);
            toast.error(error?.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pb-20 pt-10">
            <div className="mx-auto">

                {/* ===== REGISTER STEP ===== */}
                {step === "register" && (
                    <form onSubmit={handleRegister} className="max-w-md mx-auto">
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold text-2xl text-center tracking-wide">Student Register</h2>
                            </div>
                            <div className="p-4 sm:p-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Student Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        disabled={loading}
                                        value={studentRegister.studentName}
                                        onChange={handleInputRegister}
                                        placeholder="Enter Student's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.studentName && <p className="text-red-500 text-xs mt-1">{errors.studentName}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile No. <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input type="text" value="+91" readOnly className="w-16 px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-center" />
                                        <input
                                            type="tel"
                                            name="mobile"
                                            disabled={loading}
                                            value={studentRegister.mobile}
                                            onChange={handleInputRegister}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        disabled={loading}
                                        value={studentRegister.email}
                                        onChange={handleInputRegister}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2"> New Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        disabled={loading}
                                        value={studentRegister.password}
                                        onChange={handleInputRegister}
                                        placeholder="Enter Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        disabled={loading}
                                        value={studentRegister.confirmPassword}
                                        onChange={handleInputRegister}
                                        placeholder="Re-enter Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
                                >
                                    {loading ? "Loading..." : "Register"}
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                {/* ===== OTP STEP ===== */}
                {step === "otp" && (
                    <form onSubmit={handleOtpSubmit} className="w-full max-w-md mb-10 mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="bg-orange-500 text-white py-4 text-center">
                            <h2 className="text-2xl font-semibold">Verify OTP</h2>
                            <p className="text-sm opacity-90">Enter the 6-digit code sent to your email</p>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="flex justify-center">
                                <InputOTP
                                    value={otp}
                                    onChange={(val) => { setOtp(val); setErrors({}); }}
                                    maxLength={6}
                                    pattern={REGEXP_ONLY_DIGITS}
                                >
                                    {[0, 1, 2, 3, 4, 5].map((i) => (
                                        <InputOTPGroup key={i}>
                                            <InputOTPSlot index={i} />
                                        </InputOTPGroup>
                                    ))}
                                </InputOTP>
                            </div>
                            {errors.otp && <p className="text-red-500 text-sm text-center">{errors.otp}</p>}
                            <div className="flex justify-between">
                                <button
                                    type="button"
                                    disabled={loading}
                                    onClick={() => setStep("register")}
                                    className="flex gap-2 items-center bg-orange-500 px-3 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
                                >
                                    <ArrowLeft size={18} /> Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="bg-orange-500 px-3 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition"
                                >
                                    {loading ? "Verifying..." : "Verify OTP"}
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                {/* ===== PERSONAL + ACADEMIC STEP ===== */}
                {step === "personal" && (
                    <form onSubmit={handlePersonalAcademicSubmit}>

                        {/* Help Videos */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                                Admission & Student Cycle Help Videos
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">How to Take Admission</h3>
                                    <p className="text-sm text-gray-600 mb-3">Select language:</p>
                                    <div className="flex gap-2">
                                        {['english', 'hindi'].map(lang => (
                                            <button
                                                key={lang}
                                                type="button"
                                                onClick={() => handleLanguageChange('admissionLanguage', lang)}
                                                className={`px-4 py-2 rounded text-sm font-medium capitalize transition-colors ${formData.admissionLanguage === lang ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Student Cycle from Admission to Certificate</h3>
                                    <p className="text-sm text-gray-600 mb-3">Select language:</p>
                                    <div className="flex gap-2">
                                        {['english', 'hindi'].map(lang => (
                                            <button
                                                key={lang}
                                                type="button"
                                                onClick={() => handleLanguageChange('certificateLanguage', lang)}
                                                className={`px-4 py-2 rounded text-sm font-medium capitalize transition-colors ${formData.certificateLanguage === lang ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                                            >
                                                {lang}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Details */}
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold uppercase tracking-wide">Personal Details</h2>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* Father's Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Father's Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="fatherName" value={formData.fatherName} onChange={handleInputChange} placeholder="Enter Father's Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.fatherName && <p className="text-red-500 text-xs mt-1">{errors.fatherName}</p>}
                                    </div>

                                    {/* Mother's Name */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Mother's Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="motherName" value={formData.motherName} onChange={handleInputChange} placeholder="Enter Mother's Name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.motherName && <p className="text-red-500 text-xs mt-1">{errors.motherName}</p>}
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Gender <span className="text-red-500">*</span></label>
                                        <select name="gender" value={formData.gender} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                            <option value="">--Select Gender--</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                        {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                                    </div>

                                    {/* Date of Birth */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                                        <input type="date" name="dob" value={formData.dob} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.dob && <p className="text-red-500 text-xs mt-1">{errors.dob}</p>}
                                    </div>

                                    {/* Aadhaar */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Aadhaar No <span className="text-red-500">*</span></label>
                                        <input type="text" name="aadhaar" value={formData.aadhaar} onChange={handleInputChange} placeholder="Enter Aadhaar Number" maxLength="12"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.aadhaar && <p className="text-red-500 text-xs mt-1">{errors.aadhaar}</p>}
                                    </div>

                                    {/* Country */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Country <span className="text-red-500">*</span></label>
                                        <select name="country" value={formData.country} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="UK">UK</option>
                                        </select>
                                        {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                                    </div>

                                    {/* Address */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Address <span className="text-red-500">*</span></label>
                                        <textarea name="address" value={formData.address} onChange={handleInputChange} rows="2"
                                            placeholder="Vill/Town/City, Post Office, Police Station"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                                    </div>

                                    {/* District */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">District <span className="text-red-500">*</span></label>
                                        <input type="text" name="district" value={formData.district} onChange={handleInputChange} placeholder="Enter District"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district}</p>}
                                    </div>

                                    {/* State */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">State <span className="text-red-500">*</span></label>
                                        <select name="state" value={formData.state} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                            {states.map((s, i) => <option key={i} value={s}>{s}</option>)}
                                        </select>
                                        {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                                    </div>

                                    {/* Pin */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">PIN <span className="text-red-500">*</span></label>
                                        <input type="text" name="pin" value={formData.pin} onChange={handleInputChange} placeholder="Enter PIN" maxLength="6"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                        {errors.pin && <p className="text-red-500 text-xs mt-1">{errors.pin}</p>}
                                    </div>



                                </div>
                            </div>
                        </div>

                        {/* Academic Details */}
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold uppercase tracking-wide">Academic Details</h2>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Institute/Franchise Name <span className="text-red-500">*</span></label>
                                        <input type="text" name="instituteName" value={formData.instituteName} readOnly
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Course Duration <span className="text-red-500">*</span></label>
                                        <select name="duration" value={formData.duration} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                            <option value="">Select Duration</option>
                                            {ALL_DURATIONS.map((dur, idx) => (
                                                <option key={idx} value={dur}>{dur}</option>
                                            ))}
                                        </select>
                                        {errors.duration && <p className="text-red-500 text-xs mt-1">{errors.duration}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Course <span className="text-red-500">*</span></label>
                                        <select name="course" value={formData.course} onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500">
                                            <option value="">Select Course</option>
                                            {availableCourses.map((c, i) => <option key={i} value={c}>{c}</option>)}
                                        </select>
                                        {errors.course && <p className="text-red-500 text-xs mt-1">{errors.course}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Educational Qualification */}
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold uppercase tracking-wide">Educational Qualification</h2>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Educational Qualification</label>
                                        <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange}
                                            placeholder="e.g., Bachelor of Science, 12th Pass"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Qualification Certificate <span className="text-red-500">*</span></label>
                                        <div className="relative">
                                            <input type="file" onChange={(e) => { handleFileChange(e, 'qualificationCert'); setErrors(prev => ({ ...prev, qualificationCert: '' })); }} accept=".pdf,.jpg,.jpeg,.png"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200" />
                                        </div>
                                        {formData.qualificationCert && <p className="text-green-600 text-xs mt-2">✓ {formData.qualificationCert.name}</p>}
                                        {errors.qualificationCert && <p className="text-red-500 text-xs mt-2">{errors.qualificationCert}</p>}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upload Documents */}
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold uppercase tracking-wide">Upload Documents (All fields are required)</h2>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {[
                                        { label: 'Photo', field: 'photo', accept: 'image/*', hint: 'Upload a clear passport size photo (JPG/PNG)' },
                                        { label: 'Signature', field: 'signature', accept: 'image/*', hint: 'Upload your signature on white background (JPG/PNG)' },
                                        { label: 'Aadhaar', field: 'aadhaarDoc', accept: 'image/*,.pdf', hint: 'Upload Aadhaar front side (JPG/PNG/PDF)' },
                                    ].map(({ label, field, accept, hint }) => (
                                        <div key={field}>
                                            <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${formData[field] ? 'border-green-400 bg-green-50' : 'border-gray-300'}`}>
                                                <div className="mb-4 flex justify-center">
                                                    <div className={`w-20 h-20 rounded flex items-center justify-center ${formData[field] ? 'bg-green-100' : 'bg-gray-100'}`}>
                                                        <ImageIcon className={`w-10 h-10 ${formData[field] ? 'text-green-600' : 'text-gray-400'}`} />
                                                    </div>
                                                </div>
                                                <h3 className="font-semibold text-gray-900 mb-2">{label} {formData[field] ? '✓' : '*'}</h3>
                                                <p className="text-xs text-gray-600 mb-4">{hint}</p>
                                                <input type="file" onChange={(e) => { handleFileChange(e, field); setErrors(prev => ({ ...prev, [field]: '' })); }} accept={accept}
                                                    className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200" />
                                                {formData[field] && <p className="text-green-600 text-xs mt-2">✓ {formData[field].name}</p>}
                                                {errors[field] && <p className="text-red-500 text-xs mt-2">{errors[field]}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                    <p className="text-xs text-blue-700"><strong>Note:</strong> All documents are mandatory. Please ensure clear, readable copies for processing.</p>
                                </div>
                            </div>
                        </div>

                        {/* Terms & Submit */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-2">
                                    <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500" />
                                    <label className="text-sm text-gray-700">
                                        I accept <a href="#" className="text-blue-600 hover:underline">Terms and Conditions</a>
                                    </label>
                                </div>
                                {errors.acceptTerms && <p className="text-red-500 text-xs">{errors.acceptTerms}</p>}
                                <button type="submit" disabled={loading}
                                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg disabled:opacity-60">
                                    {loading ? "Saving..." : "Save"}
                                </button>
                            </div>
                        </div>

                    </form>
                )}

                {step === "success" && (
                    <div className="w-fit mx-auto text-center">
                        <img src={success} className="h-[300px] mx-auto w-auto" alt="" />
                        <h2 className="text-2xl font-bold text-orange-500">Your Form Has Been Submitted Successfully!</h2>
                        <p className="font-bold">to See you details to to dashboard</p>
                        <Button className={"bg-orange-500 hover:bg-orange-600"} asChild>
                            <Link to="http://localhost:5174/login" target="_blank" className=" hover:underline text-blue-500" >
                                Dashboard
                            </Link>
                        </Button>
                    </div>
                )}






            </div>
        </div>
    );
};

export default StudentRegistrationForm;