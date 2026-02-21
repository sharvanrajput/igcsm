import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

export const projects = [
    {
        id: 1,
        project: "Seekho Aur Kamao",
        state: "West Bengal",
        districts: ["Gaighata", "Charghat", "Birati", "Barasat"],
    },
    {
        id: 2,
        project: "UPSDM",
        state: "Uttar Pradesh",
        districts: ["Amroha", "G.B. Nagar", "Ghaziabad", "Muzaffarnagar", "Saharanpur"],
    },
    {
        id: 3,
        project: "PMKVY",
        state: "Uttar Pradesh",
        districts: ["Lucknow"],
    },
    {
        id: 4,
        project: "MPSSDEGB",
        state: "Madhya Pradesh",
        districts: ["Damoh", "Tendukhra", "Narsinghpur"],
    },
    {
        id: 5,
        project: "Yuva Swabhiman",
        state: "Madhya Pradesh",
        districts: [],
    },
    {
        id: 6,
        project: "SPEFL-SC",
        state: "Uttar Pradesh, Haryana",
        districts: ["Muzaffarnagar", "Mewat"],
    },
    {
        id: 7,
        project: "Aliah",
        state: "West Bengal",
        districts: [
            "Dakshin Dinajpur",
            "South 24 Parganas",
            "North 24 Pargana",
            "Baharampur",
        ],
    },
    {
        id: 8,
        project: "PBSSD",
        state: "West Bengal",
        districts: [],
    },
    {
        id: 9,
        project: "DAY-NULM",
        state: "Jharkhand",
        districts: ["Basukinath", "Pakur", "Gonda", "Dumka"],
    },
    {
        id: 10,
        project: "GNULM",
        state: "Gujarat",
        districts: ["Rajpipla", "Bharuch"],
    },
    {
        id: 11,
        project: "SJSRY",
        state: "Jharkhand",
        districts: ["Dumka", "Pakur", "Gonda"],
    },
    {
        id: 12,
        project: "VTP",
        state: "Delhi",
        districts: ["Dwarka", "Uttam Nagar", "Kalkaji"],
    },
];

export const projects1 = [
    {
        id: 1,
        project: "Seekho Aur Kamao (MoMA)",
        state: "Uttar Pradesh",
        districts: ["Moradabad", "Ghaziabad", "G.B. Nagar", "Saharanpur"],
    },
    {
        id: 2,
        project: "Seekho Aur Kamao (MAEF)",
        state: "Uttar Pradesh",
        districts: ["Amroha", "Hathras"],
    },
    {
        id: 3,
        project: "UPSDM",
        state: "Uttar Pradesh",
        districts: [
            "Amroha",
            "Bijnor",
            "Bulandshahr",
            "G.B. Nagar",
            "Ghaziabad",
            "Hapur",
            "Kanpur Nagar",
        ],
    },
    {
        id: 4,
        project: "DAY-NULM",
        state: "Madhya Pradesh",
        districts: ["Bhind", "Bhopal", "Mehgaon"],
    },
    {
        id: 5,
        project: "DAY-NULM",
        state: "Uttar Pradesh",
        districts: ["Mathura"],
    },
    {
        id: 6,
        project: "MAPCET",
        state: "Madhya Pradesh",
        districts: ["Teekamgarh", "Morena"],
    },
    {
        id: 7,
        project: "DDU-GKY",
        state: "Uttar Pradesh",
        districts: ["G.B. Nagar"],
    },
    {
        id: 8,
        project: "Jal Jeevan Mission",
        state: "Uttar Pradesh",
        districts: ["Bulandshahr", "Muzaffarnagar"],
    },
    {
        id: 9,
        project: "Green India Mission",
        state: "Madhya Pradesh",
        districts: ["Panna"],
    },
    {
        id: 10,
        project:
            "West Bengal Scheduled Castes, Scheduled Tribes and Other Backward Classes Development & Finance Corporation (WBSCSTDFC)",
        state: "West Bengal",
        districts: ["Coochbehar", "North Paragans"],
    },
];

const VocationalStudiesbody = () => {
    return (
        <section className="py-14 sm:py-20 bg-gray-50">
            <div className="container">

                <div className="text-center mb-8">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Vocational Studies</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                    <p>Indira Gandhi Computer Shaksharta Mission is having more than 15 years of experience in field of Vocational studies with completion of 34 numbers of successful government projects and IGCSM have trained more than 3 Lakhs candidates across Nation. The details of some projects are as follows:</p>
                </div>


                <h2 className="text-xl mb-5 sm:text-2xl font-bold text-gray-900">Completed Projects</h2>
                <div className="w-full overflow-x-auto">
                    <Table className={"rounded-md    border"}>
                        <TableHeader className={"overflow-hidden     "}>
                            <TableRow className={"bg-orange-500 hover:bg-orange-600 rounded-t-m    "}>
                                <TableHead className={"text-white border"} >S. No.</TableHead>
                                <TableHead className={"text-white border"} >Project</TableHead>
                                <TableHead className={"text-white border"} >State</TableHead>
                                <TableHead className={"text-white border"} >District</TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody  >
                            {projects.map((item) => (
                                <TableRow key={item.id} className={"border"}>
                                    <TableCell className={"border"} >{item.id}</TableCell>
                                    <TableCell className={"border"} >{item.project}</TableCell>
                                    <TableCell className={"border"} >{item.state}</TableCell>
                                    <TableCell className={"border"} >
                                        {item.districts.length > 0
                                            ? item.districts.join(", ")
                                            : "-"}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                <h2 className="text-xl my-5 sm:text-2xl font-bold text-gray-900">On-going Projects</h2>

                <div className="w-full flex justify-center  ">
                    <div className="w-full max-w-6xl overflow-x-auto">
                        <Table className="border rounded-lg">

                            <TableHeader>
                                <TableRow className="bg-orange-500 hover:bg-orange-500">
                                    <TableHead className="text-white border w-16">
                                        S. No.
                                    </TableHead>

                                    <TableHead className="text-white border min-w-[220px]">
                                        Project
                                    </TableHead>

                                    <TableHead className="text-white border min-w-[160px]">
                                        State
                                    </TableHead>

                                    <TableHead className="text-white border min-w-[220px]">
                                        District
                                    </TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {projects1.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="border align-top">
                                            {item.id}
                                        </TableCell>

                                        <TableCell className="border whitespace-normal break-words">
                                            {item.project}
                                        </TableCell>

                                        <TableCell className="border whitespace-nowrap">
                                            {item.state}
                                        </TableCell>

                                        <TableCell className="border whitespace-normal">
                                            {item.districts.length > 0
                                                ? item.districts.join(", ")
                                                : "-"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>

                        </Table>
                    </div>
                </div>

                <h2 className="text-xl my-5 sm:text-2xl font-bold text-gray-900">Upcoming Projects</h2>

                <div className="w-full flex justify-center  ">
                    <div className="w-full max-w-6xl overflow-x-auto">
                        <Table className="border rounded-lg">

                            <TableHeader>
                                <TableRow className="bg-orange-500 hover:bg-orange-500">
                                    <TableHead className="text-white border w-16">
                                        S. No.
                                    </TableHead>

                                    <TableHead className="text-white border min-w-[220px]">
                                        Project
                                    </TableHead>

                                    <TableHead className="text-white border min-w-[160px]">
                                        State
                                    </TableHead>


                                </TableRow>
                            </TableHeader>

                            <TableBody>

                                <TableRow  >
                                    <TableCell className="border align-top">
                                        1
                                    </TableCell>

                                    <TableCell className="border whitespace-normal break-words">
                                        PMKVY 4.0
                                    </TableCell>

                                    <TableCell className="border whitespace-nowrap">
                                        Uttar Pradesh
                                        Madhya Pradesh
                                        West Bengal
                                        Sikkim
                                    </TableCell>
                                </TableRow>
                                <TableRow  >
                                    <TableCell className="border align-top">
                                        2
                                    </TableCell>
                                    <TableCell className="border whitespace-normal break-words">
                                        Technical Training projects
                                    </TableCell>
                                    <TableCell className="border whitespace-nowrap">
                                        Uttar Pradesh
                                    </TableCell>
                                </TableRow>

                            </TableBody>

                        </Table>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default VocationalStudiesbody