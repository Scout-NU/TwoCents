import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import ExploreOurFeatures from './pages/ExploreOurFeatures'
import JoinWaitlist from './components/layout/JoinWaitlist'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/features" element={<ExploreOurFeatures />} />
        <Route path="/waitlist" element={<JoinWaitlist />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
