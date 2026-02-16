import About from '@/components/About'
import AwardsSlider from '@/components/AwardsSlider'
import Banner from '@/components/Banner'
import CoursesSection from '@/components/CoursesSection'
import Cta from '@/components/Cta'
import ImageGallery from '@/components/GalarySection'
import Reviews from '@/components/Reviews'
import TeamSecton from '@/components/TeamSecton'
import WhyPartnerWithUs from '@/components/WhyPartnerWithUs'

const Home = () => {

    return (
        <>
            <Banner />
            <About />
            {/* <Joinus /> */}
            {/* <MissionVision /> */}
            <AwardsSlider />
            <CoursesSection />
            {/* <TeamSecton /> */}
            {/* <ImageGallery /> */}
            {/* <Reviews /> */}

            <Cta />
            {/* <StatSection /> */}
        </>
    )
}

export default Home