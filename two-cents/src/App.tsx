import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
// import ExploreOurFeatures from './pages/ExploreOurFeatures'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/" element={<Navigate to="/features" replace />} /> */}
        {/* <Route path="/features" element={<ExploreOurFeatures />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
