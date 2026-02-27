
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './registercomponent/Header'
import AppSidebar from './registercomponent/AppSidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

const RegisterLayout = () => {
    return (




        <SidebarProvider>
            <div className="flex min-h-screen w-full">

                <AppSidebar />

                <div className="flex flex-col flex-1">
                    <Header />

                    <main className="flex-1 w-full px-3">
                        <Outlet />
                    </main>
                </div>

            </div>
        </SidebarProvider>
    )
}

export default RegisterLayout