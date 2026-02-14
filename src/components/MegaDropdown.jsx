import React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";

const MegaDropdown = ({animatenav}) => {
    // All courses organized in columns for better layout
    const allCourses = [
        { id: 1, title: 'Teacher Training Programs', href: '/courses/teacher-training' },
        { id: 2, title: 'Advance Computer Programs', href: '/courses/advance-computer' },
        { id: 3, title: 'Software Programs', href: '/courses/software' },
        { id: 4, title: 'Web Designing Programs', href: '/courses/web-designing' },
        { id: 5, title: 'Web Development Programs', href: '/courses/web-development' },
        { id: 6, title: 'Hardware & Networking Programs', href: '/courses/hardware-networking' },
        { id: 7, title: 'Mobile App Development Programs', href: '/courses/mobile-app' },
        { id: 8, title: 'Multimedia & Animation Programs', href: '/courses/multimedia-animation' },
        { id: 9, title: 'Accounting Programs', href: '/courses/accounting' },
        { id: 10, title: 'Call Center Executive (CCE)', href: '/courses/call-center' },
        { id: 11, title: 'Fire Safety', href: '/courses/fire-safety' },
        { id: 12, title: 'Management Programs', href: '/courses/management' },
        { id: 13, title: 'Photography Programs', href: '/courses/photography' },
        { id: 14, title: 'Skill & Vocational Courses', href: '/courses/skill-vocational' },
        { id: 15, title: 'Fashion Designing Programs', href: '/courses/fashion-designing' },
        { id: 16, title: 'Interior Designing Programs', href: '/courses/interior-designing' },
        { id: 17, title: 'Beautician Programs', href: '/courses/beautician' },
        { id: 18, title: 'Handicraft Programs', href: '/courses/handicraft' },
        { id: 19, title: 'Jewellery Designing Programs', href: '/courses/jewellery-designing' },
        { id: 20, title: 'Toy Making Programs', href: '/courses/toy-making' },
        { id: 21, title: 'Spoken English Programs', href: '/courses/spoken-english' },
        { id: 22, title: 'Architecture Programs', href: '/courses/architecture' },
        { id: 23, title: 'Yoga Programs', href: '/courses/yoga' },
        { id: 24, title: 'Hotel & Hospitality Programs', href: '/courses/hotel-hospitality' },
        { id: 25, title: 'Occupational Health Programs', href: '/courses/occupational-health' },
    ];

    // Split courses into 5 columns (5 courses each)
    const columns = [
        allCourses.slice(0, 5),    // Column 1: Items 1-5
        allCourses.slice(5, 10),   // Column 2: Items 6-10
        allCourses.slice(10, 15),  // Column 3: Items 11-15
        allCourses.slice(15, 20),  // Column 4: Items 16-20
        allCourses.slice(20, 25),  // Column 5: Items 21-25
    ];

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className={`"px-4 py-2 me-2 ${animatenav ? "text-black" : "text-white"} hover:text-orange-600 font-medium text-[14px] transition-all duration-200 flex items-center gap-1 relative`}>
                        All Courses
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                        <div className="w-screen   P-3">
                            {/* Grid Layout - 5 Columns */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
                                {columns.map((column, columnIndex) => (
                                    <div key={columnIndex} className="space-y-3">
                                        <ul className="space-y-2">
                                            {column.map((course) => (
                                                <li key={course.id}>
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            href={course.href}
                                                            className="group block select-none rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-blue-50 hover:text-blue-900 focus:bg-blue-50 focus:text-blue-900 border border-transparent hover:border-blue-200"
                                                        >
                                                            <div className="flex items-start gap-2">


                                                                {/* Course Title */}
                                                                <span className="text-sm font-medium leading-tight group-hover:text-blue-700 transition-colors">
                                                                    {course.title}
                                                                </span>
                                                            </div>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Action Bar */}
                            <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                                <div className="text-sm text-gray-600">
                                    <span className="font-semibold text-gray-900">25</span> Programs Available
                                </div>
                                <a
                                    href="/courses"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors group"
                                >
                                    View All Courses
                                    <svg
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default MegaDropdown;