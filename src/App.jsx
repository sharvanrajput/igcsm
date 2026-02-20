import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import StudentRegistrationForm from './components/StudentRegistrationForm';
import OnlineAdmission from './pages/admission/OnlineAdmission';
import About from './pages/about/About';
import Chariman from './pages/about/Chariman';
import Team from './pages/about/Team';
import MissionVisionPage from './pages/about/MissionVisionPage';
import AwardsandRecognition from './pages/about/AwardsandRecognition';
import InternationalStudentSupport from './pages/about/InternationalStudentSupport';
import Courses from './pages/Courses';
import NoticeBoard from './pages/admission/NoticeBoard';
import Contact from './pages/Contact';
import JobUpdate from './pages/JobUpdate';
import PrivacyPolicy from './pages/Terms/PrivacyPolicy';
import TermsAndCo from './pages/Terms/TermsAndCo';
import Faq from './pages/Faq';
import Rti from './pages/Terms/Rti';
 

// Import Swiper styles

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* about pages */}
          <Route path='/about' element={<About />} />
          <Route path='/mission-vision' element={<MissionVisionPage />} />
          <Route path='/chairman-mesage' element={<Chariman />} />
          <Route path='/awards-and-recognition' element={<AwardsandRecognition />} />
          <Route path='/team' element={<Team />} />
          <Route path='/international-student-support' element={<InternationalStudentSupport />} />

          {/* courses */}
          <Route path='/courses/:slug' element={<Courses />} />

          {/* admission   */}
          <Route path='/online-admission' element={<OnlineAdmission />} />
          <Route path='/notice-board' element={<NoticeBoard />} />

          {/* contact */}
          <Route path='/contact' element={<Contact />} />
          {/* job updates */}
          <Route path='/job-updates' element={<JobUpdate />} />



          {/* popicies*/}
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/terms-and-condition' element={<TermsAndCo />} />
          <Route path='/rti' element={<Rti />} />
          <Route path='/faq' element={<Faq />} />


        </Route>
      </Routes>

    </>
  )
}

export default App