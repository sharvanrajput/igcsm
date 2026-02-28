import React, { useState } from 'react'
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
export function EnquiryNow({ children, className = "" }) {
    const [enquiryData, setEnquiryData] = useState({
        name: "",
        email: "",
        mobile: null,
        message: ""
    })
    const handleEnquiryInput = (e) => {
        const { name, value } = e.target;
        setEnquiryData(prev => ({ ...prev, [name]: value }));

    };
    const handleEnquiry = (e) => {
        e.preventDefault()

        console.log(enquiryData)

    }

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

                                <Label className={"mb-2"} >Name <span className="text-red-500">*</span></Label>
                                <Input type={"name"} value={enquiryData.name} onChange={handleEnquiryInput} name="name" placeholder="Enter Name" />
                            </div>
                            <div>

                                <Label className={"mb-2"} >Email <span className="text-red-500">*</span></Label>
                                <Input type={"email"} value={enquiryData.email} onChange={handleEnquiryInput} name="email" placeholder="Enter Email" />
                            </div>
                            <div>
                                <Label className={"mb-2"} >Mobile <span className="text-red-500">*</span></Label>
                                <Input type={"number"} value={enquiryData.mobile} onChange={handleEnquiryInput} name="number" placeholder="Enter Mobile" />
                            </div>
                            <div>

                                <Label className={"mb-2"} >Message <span className="text-red-500">*</span></Label>
                                <Textarea id="textarea-message" value={enquiryData.message} onChange={handleEnquiryInput} name="message" placeholder="Type your message here." />
                            </div>
                            <Button type="submit" className={"bg-orange-500 hover:bg-orange-500 w-full rounded-full"} >Submit</Button>
                        </div>

                    </form>

                </DialogContent>
            </Dialog>

        </div>
    )
}
