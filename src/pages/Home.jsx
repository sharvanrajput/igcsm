import About from '@/components/About'
import AwardsSlider from '@/components/AwardsSlider'
import Banner from '@/components/Banner'
import CoursesSection from '@/components/CoursesSection'
import Cta from '@/components/Cta'
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
            {/* <WhyPartnerWithUs /> */}
            <Cta />
            {/* <StatSection /> */}
        </>
    )
}

export default Home