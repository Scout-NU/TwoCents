import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomepageSkeleton from './HomepageSkeleton'
import JoinWaitlist from './components/layout/JoinWaitlist'
=======
import { BrowserRouter } from 'react-router-dom'
// import HomepageSkeleton from './pages/HomepageSkeleton'
import ExploreOurFeatures from './pages/ExploreOurFeatures'
>>>>>>> 8089597 (Add Feature Slider and Explore Features Initial rendition -- still need to test)

function App() {
  return (
    <BrowserRouter>
      <Header />
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<HomePageSkeleton />} />
        <Route path="/home" element={<HomePageSkeleton />} />
        {/* <Route path="/about" element={<OurMissionPage />} /> */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/join-waitlist" element={<PricingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
=======
      {/* <HomepageSkeleton /> */}
      <ExploreOurFeatures />
>>>>>>> 8089597 (Add Feature Slider and Explore Features Initial rendition -- still need to test)
      <Footer />
    </BrowserRouter>
  )
}

export default App