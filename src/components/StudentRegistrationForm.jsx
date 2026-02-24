import React, { useState } from 'react';
import { Calendar, Upload, Image as ImageIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { api } from '@/services/api';

import { z } from "zod";

export const personalSchema = z.object({
    studentName: z.string().trim().min(5, "Student name is required"),
    fatherName: z.string().trim().min(5, "Father name is required"),
    motherName: z.string().trim().min(5, "Mother name is required"),
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
    mobile: z.string().min(10, "Mobile number is required"),
    alternateMobile: z.string().optional(),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const StudentRegistrationForm = () => {
    // ================= PERSONAL FORM STATE =================
    const [errors, setErrors] = useState({});
    const [personalFormData, setPersonalFormData] = useState({
        studentName: '',
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
        mobile: '',
        alternateMobile: '',
        email: '',
        password: '',
    });

    // ================= ACADEMIC FORM STATE =================
    const [academicFormData, setAcademicFormData] = useState({
        instituteName: 'NCTA Expert Pvt Ltd',
        course: '',
        qualification: '',
        qualificationCert: null,
        photo: null,
        signature: null,
        aadhaarDoc: null,
        acceptTerms: false
    });

    const [selectedLanguage, setSelectedLanguage] = useState({
        admission: 'english',
        certificate: 'english'
    });

    const courses = [
        'Select Course',
        'Diploma in Computer Application',
        'Advanced Excel',
        'Web Development',
        'Digital Marketing',
        'Graphic Design'
    ];

    const states = [
        'Select State',
        'Delhi',
        'Maharashtra',
        'Karnataka',
        'Tamil Nadu',
        'Uttar Pradesh',
        'West Bengal'
    ];

    // ================= PERSONAL HANDLERS =================
    const handlePersonalInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handlePersonalSubmit = async (e) => {
        e.preventDefault();

        const result = personalSchema.safeParse(personalFormData);

        if (!result.success) {
            const fieldErrors = {};
            result?.error?.errors?.forEach(err => {
                const field = err.path?.[0];
                if (field) fieldErrors[field] = err.message;
                console.log(fieldErrors)
            });
            setErrors(fieldErrors);
            return;
        }

        setErrors({});

        try {
            const res = await api.post("/student/student-data-save", result?.data);
            // const res = await api.post("/student/student-data-save", personalFormData);

            if (res.data.success) {
                toast.success("OTP sent on your email");

                setPersonalFormData({
                    studentName: '',
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
                    mobile: '',
                    alternateMobile: '',
                    email: '',
                    password: '',
                });
            }
        } catch (error) {
            console.log(error?.response?.data || error.message);
            toast.error(error?.response?.data?.message || "Something went wrong");
        }
    };

    // ================= ACADEMIC HANDLERS =================
    const handleAcademicInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAcademicFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleAcademicFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setAcademicFormData(prev => ({
            ...prev,
            [fieldName]: file
        }));
    };

    const handleAcademicSubmit = (e) => {
        e.preventDefault();
        console.log("Academic Form Submitted:", academicFormData);
    };


    return (
        <div className=" pt-10    ">
            <div className=" mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Registration</h1>
                    </div>
                </div>

                <form onSubmit={handlePersonalSubmit}>
                    {/* Admission & Student Cycle Help Videos */}

                    {/* Personal Details */}
                    <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                        <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                            <h2 className="font-semibold uppercase tracking-wide">Personal Details</h2>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Student Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Student Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="studentName"
                                        value={personalFormData.studentName}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Student's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    {errors.studentName && (
                                        <p className="text-red-500 text-xs">{errors.studentName}</p>
                                    )}
                                </div>

                                {/* Father's Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Father's Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fatherName"

                                        value={personalFormData.fatherName}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Father's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    {errors.fatherName && (
                                        <p className="text-red-500 text-xs">{errors.fatherName}</p>
                                    )}
                                </div>

                                {/* Mother's Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mother's Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="motherName"

                                        value={personalFormData.motherName}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Mother's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    {errors.motherName && (
                                        <p className="text-red-500 text-xs">{errors.motherName}</p>
                                    )}
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Gender <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={personalFormData.gender}
                                        onChange={handlePersonalInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.gender && (
                                        <p className="text-red-500 text-xs">{errors.gender}</p>
                                    )}
                                </div>



                                {/* Date of Birth */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Date of Birth <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            name="dob"
                                            value={personalFormData.dob}
                                            onChange={handlePersonalInputChange}
                                            placeholder="dd/mm/yyyy"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />

                                        {errors.dob && (
                                            <p className="text-red-500 text-xs">{errors.dob}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Aadhaar No */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Aadhaar No
                                    </label>
                                    <input
                                        type="text"
                                        name="aadhaar"

                                        value={personalFormData.aadhaar}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Aadhaar Number"
                                        maxLength="12"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.aadhaar && (
                                        <p className="text-red-500 text-xs">{errors.aadhaar}</p>
                                    )}
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="country"

                                        value={personalFormData.country}
                                        onChange={handlePersonalInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    {errors.country && (
                                        <p className="text-red-500 text-xs">{errors.country}</p>
                                    )}
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Address<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="address"

                                        value={personalFormData.address}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Vill/Town/City, Post Office, Police Station"
                                        rows="2"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    ></textarea>
                                    {errors.address && (
                                        <p className="text-red-500 text-xs">{errors.address}</p>
                                    )}
                                </div>

                                {/* District */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        District<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="district"

                                        value={personalFormData.district}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter District"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    {errors.district && (
                                        <p className="text-red-500 text-xs">{errors.district}</p>
                                    )}
                                </div>

                                {/* State */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="state"

                                        value={personalFormData.state}
                                        onChange={handlePersonalInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        {states.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                    {errors.state && (
                                        <p className="text-red-500 text-xs">{errors.state}</p>
                                    )}
                                </div>

                                {/* Pin */}
                                <div className="md:col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pin<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="pin"

                                        value={personalFormData.pin}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Pin Number"
                                        maxLength="6"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                    {errors.pin && (
                                        <p className="text-red-500 text-xs">{errors.pin}</p>
                                    )}
                                </div>

                                {/* Mobile No */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mobile No. <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            value="+91"
                                            readOnly
                                            className="w-16 px-2 py-2 border border-gray-300 rounded-md bg-gray-100 text-center"
                                        />
                                        <input
                                            type="tel"
                                            name="mobile"

                                            value={personalFormData.mobile}
                                            onChange={handlePersonalInputChange}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                        {errors.mobile && (
                                            <p className="text-red-500 text-xs">{errors.mobile}</p>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">10-digit mobile number</p>
                                </div>

                                {/* Alternative Mobile No */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Alternative Mobile No.
                                    </label>
                                    <input
                                        type="tel"
                                        name="alternateMobile"

                                        value={personalFormData.alternateMobile}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Student's alternative Mobile Number"
                                        maxLength="10"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.alternateMobile && (
                                        <p className="text-red-500 text-xs">{errors.alternateMobile}</p>
                                    )}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"

                                        value={personalFormData.email}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs">{errors.email}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input
                                        type="text"
                                        name="password"
                                        value={personalFormData.password}
                                        onChange={handlePersonalInputChange}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs">{errors.password}</p>
                                    )}
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                                    <button
                                        type="submit"
                                        className="w-full sm:w-auto bg-orange-500 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>






                </form>




                {false &&
                    <form onSubmit={handleAcademicSubmit}>
                        {/* Admission & Student Cycle Help Videos */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                                ADMISSION & STUDENT CYCLE HELP VIDEOS
                            </h2>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {/* How to Take Admission */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">How to Take Admission</h3>
                                    <p className="text-sm text-gray-600 mb-3">Select language:</p>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedLanguage(prev => ({ ...prev, admission: 'english' }))}
                                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.admission === 'english'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            English
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedLanguage(prev => ({ ...prev, admission: 'hindi' }))}
                                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.admission === 'hindi'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            Hindi
                                        </button>
                                    </div>
                                </div>

                                {/* Student Cycle */}
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2">Student Cycle from Admission to Certificate</h3>
                                    <p className="text-sm text-gray-600 mb-3">Select language:</p>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setSelectedLanguage(prev => ({ ...prev, certificate: 'english' }))}
                                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.certificate === 'english'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            English
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedLanguage(prev => ({ ...prev, certificate: 'hindi' }))}
                                            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${selectedLanguage.certificate === 'hindi'
                                                ? 'bg-orange-500 text-white'
                                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                                }`}
                                        >
                                            Hindi
                                        </button>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Institute/Franchise Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="instituteName"
                                            value={academicFormData.instituteName}
                                            onChange={handleAcademicInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            readOnly
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Course <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="course"
                                            value={academicFormData.course}
                                            onChange={handleAcademicInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        >
                                            {courses.map((course, index) => (
                                                <option key={index} value={course}>{course}</option>
                                            ))}
                                        </select>
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
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Educational Qualification
                                        </label>
                                        <input
                                            type="text"
                                            name="qualification"

                                            value={academicFormData.qualification}
                                            onChange={handleAcademicInputChange}
                                            placeholder="Enter Educational Qualification"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Qualification Certificate
                                        </label>
                                        <input
                                            type="file"
                                            onChange={(e) => handleFileChange(e, 'qualificationCert')}
                                            accept=".pdf,.jpg,.jpeg,.png"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upload Documents */}
                        <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                            <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                                <h2 className="font-semibold uppercase tracking-wide">Upload Documents</h2>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Photo */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                        <div className="text-center">
                                            <div className="mb-4 flex justify-center">
                                                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                                    <ImageIcon className="w-10 h-10 text-gray-400" />
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Photo</h3>
                                            <p className="text-xs text-gray-600 mb-4">Upload a clear passport size photo (JPG/PNG)</p>
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'photo')}
                                                accept="image/*"
                                                className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Signature */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                        <div className="text-center">
                                            <div className="mb-4 flex justify-center">
                                                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                                    <ImageIcon className="w-10 h-10 text-gray-400" />
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Signature</h3>
                                            <p className="text-xs text-gray-600 mb-4">Upload your signature on white background (JPG/PNG)</p>
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'signature')}
                                                accept="image/*"
                                                className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                                            />
                                        </div>
                                    </div>

                                    {/* Aadhaar */}
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                        <div className="text-center">
                                            <div className="mb-4 flex justify-center">
                                                <div className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                                                    <ImageIcon className="w-10 h-10 text-gray-400" />
                                                </div>
                                            </div>
                                            <h3 className="font-semibold text-gray-900 mb-2">Aadhaar</h3>
                                            <p className="text-xs text-gray-600 mb-4">Upload Aadhaar front side (JPG/PNG)</p>
                                            <input
                                                type="file"
                                                onChange={(e) => handleFileChange(e, 'aadhaarDoc')}
                                                accept="image/*,.pdf"
                                                className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Submit */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div className="flex items-start gap-2">
                                    <input
                                        type="checkbox"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleInputChange}
                                        className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                        required
                                    />
                                    <label className="text-sm text-gray-700">
                                        I accept{' '}
                                        <a href="#" className="text-blue-600 hover:underline">
                                            Terms and Conditions
                                        </a>
                                    </label>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-orange-500 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg"
                                >
                                    Save
                                </button>
                            </div>
                        </div>

                    </form>
                }
            </div>
        </div>
    );
};

export default StudentRegistrationForm;