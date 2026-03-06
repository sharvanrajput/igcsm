import React, { useState, useRef } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { api } from '../services/api';
import Recaptcha from './Recaptcha';

export function EnquiryNow({ children, className = "" }) {
    const [enquiryData, setEnquiryData] = useState({
        name: "",
        email: "",
        mobile: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [recaptchaToken, setRecaptchaToken] = useState("");
    const [message, setMessage] = useState("");
    const recaptchaRef = useRef(null);
    
    const handleEnquiryInput = (e) => {
        const { name, value } = e.target;
        setEnquiryData(prev => ({ ...prev, [name]: value }));
    };

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const handleEnquiry = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!recaptchaToken) {
            setMessage("Please complete the reCAPTCHA (I'm not a robot)");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await api.post("/enquiry", {
                ...enquiryData,
                captchaToken: recaptchaToken
            });

            if (response.data.success) {
                setMessage("Thank you for your enquiry! We'll get back to you soon.");
                setEnquiryData({ name: "", email: "", mobile: "", message: "" });
                setRecaptchaToken("");
                recaptchaRef.current?.reset();
            } else {
                setMessage(response.data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Enquiry submission error:", error);
            if (error.response) {
                // Server responded with error status
                setMessage(`Error: ${error.response.status} - ${error.response.data.message || 'Server error'}`);
            } else if (error.request) {
                // Network error
                setMessage("Network error. Please check your internet connection and try again.");
            } else {
                // Other error
                setMessage("Failed to submit enquiry. Please try again later.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger className={className} >
                    {children}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Enquiry Now</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleEnquiry}>
                        <div className="space-y-3">
                            <div>
                                <Label className={"mb-2"} required>Name</Label>
                                <Input 
                                    type="text" 
                                    value={enquiryData.name} 
                                    onChange={handleEnquiryInput} 
                                    name="name" 
                                    placeholder="Enter Name" 
                                    required
                                />
                                {message && message.includes("Name") && (
                                    <p className="text-red-500 text-xs mt-1">{message}</p>
                                )}
                            </div>
                            <div>
                                <Label className={"mb-2"} required>Email</Label>
                                <Input 
                                    type="email" 
                                    value={enquiryData.email} 
                                    onChange={handleEnquiryInput} 
                                    name="email" 
                                    placeholder="Enter Email" 
                                    required
                                />
                                {message && message.includes("Email") && (
                                    <p className="text-red-500 text-xs mt-1">{message}</p>
                                )}
                            </div>
                            <div>
                                <Label className={"mb-2"} required>Mobile</Label>
                                <Input 
                                    type="tel" 
                                    value={enquiryData.mobile} 
                                    onChange={handleEnquiryInput} 
                                    name="mobile" 
                                    placeholder="Enter Mobile" 
                                    required
                                />
                                {message && message.includes("Mobile") && (
                                    <p className="text-red-500 text-xs mt-1">{message}</p>
                                )}
                            </div>
                            <div>
                                <Label className={"mb-2"} required>Message</Label>
                                <Textarea 
                                    value={enquiryData.message} 
                                    onChange={handleEnquiryInput} 
                                    name="message" 
                                    placeholder="Type your message here." 
                                    required
                                />
                                {message && message.includes("Message") && (
                                    <p className="text-red-500 text-xs mt-1">{message}</p>
                                )}
                            </div>
                            
                            {/* reCAPTCHA Section */}
                            <div className="bg-white border border-gray-200 rounded-md p-4 relative z-50">
                                <Recaptcha ref={recaptchaRef} onChange={handleRecaptchaChange} />
                                {message && message.includes("Please complete the reCAPTCHA") && (
                                    <p className="text-red-500 text-xs mt-2">{message}</p>
                                )}
                            </div>

                            {message && !message.includes("Please complete the reCAPTCHA") && (
                                <div className={`p-3 rounded ${message.includes('Thank you') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                    {message}
                                </div>
                            )}
                            
                            <Button 
                                type="submit" 
                                className="bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold text-sm px-10 py-2.5 rounded transition-colors shadow"
                                disabled={isSubmitting || !recaptchaToken}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
