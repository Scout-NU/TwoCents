import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Homepage from './pages/Homepage'
import ExploreOurFeatures from './pages/ExploreOurFeatures'
import OurMission from './pages/OurMission'
import Pricing from './pages/Pricing'
import JoinWaitlist from './components/layout/JoinWaitlist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/features" element={<ExploreOurFeatures />} />
          <Route path="/mission" element={<OurMission />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/waitlist" element={<JoinWaitlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
