import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomepageSkeleton from './HomepageSkeleton'
import JoinWaitlist from './components/layout/JoinWaitlist'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePageSkeleton />} />
        <Route path="/home" element={<HomePageSkeleton />} />
        {/* <Route path="/about" element={<OurMissionPage />} /> */}
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/join-waitlist" element={<PricingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App