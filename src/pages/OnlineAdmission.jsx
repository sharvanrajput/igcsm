import FranchiseRegistrationForm from '@/components/FranchiseRegistrationForm'
import LoginForm from '@/components/LoginForm'
import StudentRegistrationForm from '@/components/StudentRegistrationForm'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
const OnlineAdmission = () => {
    return (
        <section className='pt-35'>
            <div className="container">

                <Tabs defaultValue="one"  >
                    <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1 rounded-lg">
                        <TabsTrigger
                            value="one"
                            className="data-[state=active]:bg-white data-[state=active]:text-orange-500 data-[state=active]:shadow-sm rounded-md transition-all"
                        >
                            Student Register
                        </TabsTrigger>
                        <TabsTrigger
                            value="two"
                            className="data-[state=active]:bg-white data-[state=active]:text-orange-500 data-[state=active]:shadow-sm rounded-md transition-all"
                        >
                            Franchise Register
                        </TabsTrigger>
                        <TabsTrigger
                            value="three"
                            className="data-[state=active]:bg-white data-[state=active]:text-orange-500 data-[state=active]:shadow-sm rounded-md transition-all"
                        >
                            Login
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="one">
                        <StudentRegistrationForm />
                    </TabsContent>
                    <TabsContent value="two">
                        <FranchiseRegistrationForm />
                    </TabsContent>
                    <TabsContent value="three">
                        <LoginForm />
                    </TabsContent>
                </Tabs>

            </div>
        </section>
    )
}

export default OnlineAdmission