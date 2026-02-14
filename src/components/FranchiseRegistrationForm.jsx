import React, { useState } from 'react';
import { Image as ImageIcon } from 'lucide-react';

const FranchiseRegistrationForm = () => {
    const [formData, setFormData] = useState({
        trainingCentreName: '',
        trainingCentreContact: '',
        trainingCentreEmail: '',
        ownerName: '',
        ownerMobile: '',
        ownerEmail: '',
        country: '',
        address: '',
        ps: '',
        district: '',
        pin: '',
        state: '',
        password: '',
        confirmPassword: '',
        tradeLicense: null,
        institutePhoto: null,
        directorPhoto: null,
        directorSignature: null,
        acceptTerms: false
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
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    const countries = ['Select Country', 'India', 'USA', 'UK', 'Canada', 'Australia'];
    const states = [
        'Please Select State',
        'Delhi',
        'Maharashtra',
        'Karnataka',
        'Tamil Nadu',
        'Uttar Pradesh',
        'West Bengal',
        'Gujarat',
        'Rajasthan',
        'Punjab'
    ];

    return (
        <div className="   py-6  ">
            <div className="  mx-auto">
                {/* Header */}
                <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Franchise Registration</h1>
                       
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Franchise Details */}
                    <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                        <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                            <h2 className="font-semibold uppercase tracking-wide">Franchise Details</h2>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Training Centre Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Training Centre Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="trainingCentreName"
                                        value={formData.trainingCentreName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Training Centre Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Training Centre Contact No */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Training Centre Contact No <span className="text-red-500">*</span>
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
                                            name="trainingCentreContact"
                                            value={formData.trainingCentreContact}
                                            onChange={handleInputChange}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">10-digit contact number</p>
                                </div>

                                {/* Training Centre Email ID */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Training Centre Email ID <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="trainingCentreEmail"
                                        value={formData.trainingCentreEmail}
                                        onChange={handleInputChange}
                                        placeholder="Enter Training Centre Email ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Owner Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Owner Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ownerName"
                                        value={formData.ownerName}
                                        onChange={handleInputChange}
                                        placeholder="Enter Owner Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Owner Mobile */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Owner Mobile <span className="text-red-500">*</span>
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
                                            name="ownerMobile"
                                            value={formData.ownerMobile}
                                            onChange={handleInputChange}
                                            placeholder="Enter 10-digit mobile number"
                                            maxLength="10"
                                            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            required
                                        />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">10-digit mobile number</p>
                                </div>

                                {/* Owner Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Owner Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="ownerEmail"
                                        value={formData.ownerEmail}
                                        onChange={handleInputChange}
                                        placeholder="Enter Owner Email ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
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
                                        {countries.map((country, index) => (
                                            <option key={index} value={country}>
                                                {index === 0 ? '-- Select Country --' : country}
                                            </option>
                                        ))}
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
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    ></textarea>
                                </div>

                                {/* Ps */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Ps <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="ps"
                                        value={formData.ps}
                                        onChange={handleInputChange}
                                        placeholder="Enter Ps Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* District */}
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        District<span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        placeholder="Enter District Name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                    />
                                </div>

                                {/* Pin */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Pin <span className="text-red-500">*</span>
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
                                            <option key={index} value={state}>
                                                {index === 0 ? '--Please Select State--' : state}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Password */}
                                <div className="md:col-span-3 lg:col-span-1">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        placeholder="Enter Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                        minLength="6"
                                    />
                                </div>

                                {/* Confirm Password */}
                                <div className="md:col-span-3 lg:col-span-2">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        placeholder="Confirm Password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        required
                                        minLength="6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* KYC */}
                    <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
                        <div className="bg-orange-500 text-white px-4 sm:px-6 py-3">
                            <h2 className="font-semibold uppercase tracking-wide">KYC</h2>
                        </div>
                        <div className="p-4 sm:p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {/* Trade License */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <div className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <div className="w-24 h-24 bg-gray-50 rounded flex items-center justify-center">
                                                <ImageIcon className="w-12 h-12 text-gray-400" />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Trade License</h3>
                                        <input
                                            type="file"
                                            onChange={(e) => handleFileChange(e, 'tradeLicense')}
                                            accept="image/*,.pdf"
                                            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                                        />
                                        {!formData.tradeLicense && (
                                            <p className="text-xs text-gray-500 mt-2">No file chosen</p>
                                        )}
                                    </div>
                                </div>

                                {/* Institute Photo */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <div className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <div className="w-24 h-24 bg-gray-50 rounded flex items-center justify-center">
                                                <ImageIcon className="w-12 h-12 text-gray-400" />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Institute Photo</h3>
                                        <input
                                            type="file"
                                            onChange={(e) => handleFileChange(e, 'institutePhoto')}
                                            accept="image/*"
                                            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                                        />
                                        {!formData.institutePhoto && (
                                            <p className="text-xs text-gray-500 mt-2">No file chosen</p>
                                        )}
                                    </div>
                                </div>

                                {/* Director Photo */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <div className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <div className="w-24 h-24 bg-gray-50 rounded flex items-center justify-center">
                                                <ImageIcon className="w-12 h-12 text-gray-400" />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Director Photo</h3>
                                        <input
                                            type="file"
                                            onChange={(e) => handleFileChange(e, 'directorPhoto')}
                                            accept="image/*"
                                            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                                        />
                                        {!formData.directorPhoto && (
                                            <p className="text-xs text-gray-500 mt-2">No file chosen</p>
                                        )}
                                    </div>
                                </div>

                                {/* Director Signature */}
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                                    <div className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <div className="w-24 h-24 bg-gray-50 rounded flex items-center justify-center">
                                                <ImageIcon className="w-12 h-12 text-gray-400" />
                                            </div>
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-4">Director Sing</h3>
                                        <input
                                            type="file"
                                            onChange={(e) => handleFileChange(e, 'directorSignature')}
                                            accept="image/*"
                                            className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer"
                                        />
                                        {!formData.directorSignature && (
                                            <p className="text-xs text-gray-500 mt-2">No file chosen</p>
                                        )}
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
                                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-12 py-3 rounded-md transition-colors duration-200 shadow-lg"
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

export default FranchiseRegistrationForm;