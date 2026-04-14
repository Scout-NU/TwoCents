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
        <Route path="/" element={<HomepageSkeleton />} />
        <Route path="/JoinWaitlist" element={<JoinWaitlist />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App