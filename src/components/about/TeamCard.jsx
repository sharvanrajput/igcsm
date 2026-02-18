import member1 from "@/assets/images/abhay-pratap-singh.jpg";
import member2 from "@/assets/images/avinash-yadav.webp";
import member3 from "@/assets/images/inderjeet.webp";
import member4 from "@/assets/images/naval-chaudhary.jpg";
import member5 from "@/assets/images/sanjeev.webp";
import member6 from "@/assets/images/shivani-singh.webp";
import member7 from "@/assets/images/kapil-dev.webp";
import member8 from "@/assets/images/arvind-pandey.webp";
import member9 from "@/assets/images/prince-kumar-soni.webp";
import member10 from "@/assets/images/Sabir-Sir.jpeg";
import member11 from "@/assets/images/jitender.png";
import {
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaWhatsapp
} from "react-icons/fa";
const teamData = [
    { id: "1", name: "Mr. Abhay Pratap Singh", image: member1, post: "Project Manager" },
    { id: "2", name: "Mr. Avinash Yadav", image: member2, post: "Sr. Project Manager" },
    { id: "3", name: "Mr. Inderjeet", image: member3, post: "Finance Head" },
    { id: "4", name: "Mr. Naval Chaudhary", image: member4, post: "Project Manager" },
    { id: "5", name: "Mr. Sanjeev Prajapati", image: member5, post: "Director (Project)" },
    { id: "6", name: "Ms. Shivani Singh", image: member6, post: "Project manager" },
    { id: "7", name: "Mr. Kapil Dev", image: member7, post: "Project manager" },
    { id: "8", name: "Mr. Arvind Pandey", image: member8, post: "Project manager" },
    { id: "9", name: "Mr. Prince Kumar Soni", image: member9, post: "Project manager" },
    { id: "10", name: "Mr. Sabir", image: member10, post: "Project manager" },
    { id: "11", name: "Mr. Jitender", image: member11, post: "Project manager" },

    // { id: "7", name: "Team", image: member7, post: "" },
];
const socials = [
    { icon: FaInstagram, label: "Instagram", hoverClass: "hover:bg-linear-to-br hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 hover:text-white" },
    { icon: FaTwitter, label: "Twitter", hoverClass: "hover:bg-sky-500 hover:text-white" },
    { icon: FaLinkedinIn, label: "LinkedIn", hoverClass: "hover:bg-blue-600 hover:text-white" },
    { icon: FaWhatsapp, label: "WhatsApp", hoverClass: "hover:bg-green-500 hover:text-white" },
];


const TeamCard = () => {
    return (
        <section className='py-20'>
            <div className="container">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        teamData?.map(member => (
                            <div
                                className={`
                group relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              opacity-100 z-10  
            `}
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-md group-hover:shadow-2xl group-hover:shadow-orange-200/50 transition-shadow duration-500">

                                    {/* Image area */}
                                    <div className="relative h-55 sm:h-60 md:h-85 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-auto  object-top transition-transform duration-700 ease-out group-hover:scale-110"
                                        />

                                        {/* Permanent dark linear for text readability */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

                                        {/* Orange tint on hover */}
                                        <div className="absolute inset-0 bg-linear-to-t from-orange-600/70 via-orange-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Social icons — spring up from center on hover */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex gap-2.5 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]">
                                                {socials.map(({ icon: Icon, label, hoverClass }) => (
                                                    <a
                                                        key={label}
                                                        href="#"
                                                        title={label}
                                                        rel="noopener noreferrer"
                                                        className={`w-8 h-8 rounded-full bg-white text-gray-700 flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-1 ${hoverClass} transition-all duration-200`}
                                                    >
                                                        <Icon size={13} />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Orange sweep bar at image bottom */}
                                        <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-linear-to-r from-orange-500 via-orange-400 to-amber-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                                    </div>

                                    {/* Info block */}
                                    <div className="relative px-4 py-4 bg-white overflow-hidden">
                                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-linear-to-r from-transparent via-orange-100/60 to-transparent transition-transform duration-700 ease-in-out pointer-events-none" />
                                        <div className="absolute left-0 top-4 bottom-4 w-0.75 rounded-full bg-linear-to-b from-orange-500 to-amber-300 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-400 ease-out" />

                                        <div className="pl-1 transition-all duration-300 group-hover:pl-3">
                                            <h4 className="font-bold text-[14px] sm:text-[15px] text-stone-800 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                                {member.name}
                                            </h4>
                                            {member.post && (
                                                <p className="text-[10px] sm:text-[11px] font-semibold text-stone-400 uppercase tracking-widest mt-0.5">
                                                    {member.post}
                                                </p>
                                            )}
                                            <div className="mt-2 h-0.5 w-6 rounded-full bg-linear-to-r from-orange-500 to-amber-300 group-hover:w-12 transition-all duration-500 ease-out" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default TeamCard

