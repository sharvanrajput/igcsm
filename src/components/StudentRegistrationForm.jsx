import React, { useState } from 'react';
import { Calendar, Upload, Image as ImageIcon } from 'lucide-react';

const StudentRegistrationForm = () => {
    const [formData, setFormData] = useState({
        instituteName: 'NCTA Expert Pvt Ltd',
        course: '',
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

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleFileChange = (e, fieldName) => {
        const file = e.target.files[0];
        setFormData(prev => ({
            ...prev,
            [fieldName]: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

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

    return (
        <div className=" pt-10    ">
            <div className=" mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Registration</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
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
                                        value={formData.instituteName}
                                        onChange={handleInputChange}
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
                                        value={formData.course}
                                        onChange={handleInputChange}
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
                                        value={formData.studentName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Student's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Father's Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Father's Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="fatherName"
                                        value={formData.fatherName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Father's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Mother's Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Mother's Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="motherName"
                                        value={formData.motherName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Mother's Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Gender <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
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
                                            value={formData.dob}
                                            onChange={handleInputChange}
                                            placeholder="dd/mm/yyyy"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                        <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white bg-blue-400 p-0.5 rounded pointer-events-none" />
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
                                        value={formData.aadhaar}
                                        onChange={handleInputChange}
                                        placeholder="Enter Aadhaar Number"
                                        maxLength="12"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Country */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Country <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="country"
                                        value={formData.country}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        <option value="India">India</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                </div>

                                {/* Address */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Address<span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        placeholder="Vill/Town/City, Post Office, Police Station"
                                        rows="3"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    ></textarea>
                                </div>

                                {/* District */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        District<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        placeholder="Enter District"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* State */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        State <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="state"
                                        value={formData.state}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    >
                                        {states.map((state, index) => (
                                            <option key={index} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Pin */}
                                <div className="md:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pin<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="pin"
                                        value={formData.pin}
                                        onChange={handleInputChange}
                                        placeholder="Enter Pin Number"
                                        maxLength="6"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Mobile No */}
                                <div>
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
                                            value={formData.mobile}
                                            onChange={handleInputChange}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
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
                                        value={formData.alternateMobile}
                                        onChange={handleInputChange}
                                        placeholder="Enter Student's alternative Mobile Number"
                                        maxLength="10"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Enter Email Address"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                    />
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
                                        value={formData.qualification}
                                        onChange={handleInputChange}
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
            </div>
        </div>
    );
};

export default StudentRegistrationForm;