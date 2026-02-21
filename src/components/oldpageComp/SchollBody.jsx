import React from 'react'
import about from "@/assets/images/aboutbg.webp"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
const SchollBody = () => {
    return (
        <section className="py-14 sm:py-20 bg-gray-50">
            <div className="container">
                <div className="text-center mb-8">

                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Revolutionizing Education in Uttar Pradesh</h2>
                    <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-orange-500" />
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 mb-3">
                    <div>
                        <img src={about} className='rounded-lg ' alt="" />
                    </div>
                    <div className='space-y-3'>
                        <p>'Project Praveen' is Uttar Pradesh's initiative offering free skill training to higher secondary students (classes 9 to 12), benefiting over 21,000 students in its first phase.</p>
                        <p>Operated in collaboration with the Uttar Pradesh Skill Development Mission, the project expands from 150 to 301 schools, reaching 42,140 students.</p>
                        <p>Focused on 11 trades, including IT and Retail, the initiative ensures students gain practical skills for today's job market. Completion awards certificates, enhancing employability, providing job pathways for those leaving studies after 10th or 12th.</p>
                        <p>Conducted in-school by private centers with certified trainers, facilitated by collaboration between the Skill Development Mission and the Department of Secondary Education.</p>

                    </div>
                </div>
                <p>Project Praveen aligns with the National Education Policy 2020, emphasizing a shift towards skill-based education. Project Praveen stands as a successful initiative, showcasing the Uttar Pradesh government's commitment to creating a job-ready workforce and reshaping education.</p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-7 my-10">

                    <div className='space-y-3'>
                        <p className='font-semibold'>INDIRA GANDHI COMPUTER SHAKSHARTA MISSION is running “PRAVEEN PROJECT” in GGIC Noida — Government Girls Inter College, Hoshiyarpur, Sector 51 Noida, Gautam Buddha Nagar, Uttar Pradesh, is a government school under UPSDM. It is administered by the Department of Secondary Education, Uttar Pradesh.</p>
                        <p>The school was established in 2017. The school is affiliated to the UP Board – Uttar Pradesh Madhyamik Shiksha Parishad, Prayagraj, Uttar Pradesh. The school is only for girls. The medium of instruction is in Hindi. Though some classes are also run in English medium.</p>
                    </div>
                    <div>
                        <img src={about} className='rounded-lg ' alt="" />
                    </div>
                </div>

                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-25 border"> S. No.</TableHead>
                            <TableHead className={"border "} >Year </TableHead>
                            <TableHead className={"border "} > Number of Batches</TableHead>
                            <TableHead className={"border "} > Number of Students	</TableHead>
                            <TableHead className="text-right border"> Location</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium"> 1</TableCell>
                            <TableCell className={"border"}>2022-2023 </TableCell>
                            <TableCell className={"border"}> 4</TableCell>
                            <TableCell className={"border"}>140 </TableCell>
                            <TableCell className="text-right border"> 	Gautam Buddha Nagar</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="font-medium border">2 </TableCell>
                            <TableCell className={"border"} >2023-2024 </TableCell>
                            <TableCell className={"border"} >4 </TableCell>
                            <TableCell className={"border"} > 140</TableCell>
                            <TableCell className="text-right border"> 	Gautam Buddha Nagar</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>


            </div>
        </section>
    )
}

export default SchollBody