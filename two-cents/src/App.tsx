import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import { BrowserRouter } from 'react-router-dom'
import HomepageSkeleton from './HomepageSkeleton'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <HomepageSkeleton />
      <Footer />
    </BrowserRouter>
  )
}

export default App