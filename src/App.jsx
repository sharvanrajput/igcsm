import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import StudentRegistrationForm from './components/StudentRegistrationForm';
import OnlineAdmission from './pages/OnlineAdmission';
import About from './pages/about/About';
import Chariman from './pages/about/Chariman';
import Team from './pages/about/Team';
import MissionVisionPage from './pages/about/MissionVisionPage';
import AwardsandRecognition from './pages/about/AwardsandRecognition';
import InternationalStudentSupport from './pages/about/InternationalStudentSupport';

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


          {/*  */}
          <Route path='/online-admission' element={<OnlineAdmission />} />

        </Route>
      </Routes>

    </>
  )
}

export default App