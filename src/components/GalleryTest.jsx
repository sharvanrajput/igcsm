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
 
const logos = [
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

  
];
 

const GalleryTest = () => {
  // const logos = [
  //   gallery1,
  //   gallery2,
  //   gallery3,
  //   gallery4,
  //   gallery5,
  //   gallery6,
  //   gallery7,
  // ];

  return (
    <section className='pt-10'>
      <div className='mb-10 text-center'>
        <h2 className="text-3xl text-orange-500 mb-3 lg:text-4xl font-semibold leading-tight">
          Gallery
        </h2>
      </div>

      <div className='relative'>
        {/* gradient edges */}
        <div className="absolute h-full w-50 left-0 top-0 bg-linear-to-r from-white/70 z-10 to-orange-50/0"></div>
        <div className="absolute h-full w-50 right-0 top-0 bg-linear-to-l from-white/70 z-10 to-orange-50/0"></div>

        <div className="overflow-hidden py-3">
          <div className="flex w-max mx-auto items-center gap-5 animate-[scroll_20s_linear_infinite]">
            {[...logos, ...logos].map((logo, i) => (
              <img
                key={i}
                src={logo.image}
                alt="gallery"
                className="h-50 md:h-70 rounded-md object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GalleryTest
