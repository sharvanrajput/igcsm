import { Button } from '@/components/ui/button'
import { useSidebar } from '@/components/ui/sidebar'
import { Menu } from 'lucide-react'
import React from 'react'

export default function Header() {

    const { toggleSidebar } = useSidebar()

    return (
        <header className='full bg-orange-50 ' >
            <div className="flex px-3 py-2">
                <Button className={"bg-orange-500 h-8 px-2 hover:bg-orange-600"} onClick={() => toggleSidebar()} >
                    <Menu />
                </Button>
            </div>
        </header>
    )
}
