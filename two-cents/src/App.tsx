
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import CentoSpeechBubble from './components/SpeechBubble'
import SpeechBubble from "./components/SpeechBubble"
import WaitListJoin from './components/WaitlistJoin'



function App() {
  return (
    <>
    <BrowserRouter>
    <SpeechBubble />
    </BrowserRouter>
    </>
  )
}

export default App