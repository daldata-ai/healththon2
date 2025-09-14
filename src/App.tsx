import './App.css'
import About from './component/About'
import Header from './component/Header'
import Hero from './component/Hero'
import Goals from './component/Goals'
import Paths from './component/Paths'
import Price from './component/Price'
import Timeline from './component/Timeline'
import TAndC from './component/TAndC'
import TargetGroup from './component/TargetGroup'
import FAQAccordion from './component/FAQAccordion'
import SharePage from './component/SharePage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/share/:id" element={<SharePage />} />
        <Route path="/" element={
          <div className="h-screen flex flex-col bg-default-bg">
            <Header />
            <div>
              <Hero />
            </div>
            <About />
            <Goals />
            <Paths />
            <TargetGroup />
            <TAndC />
            <Timeline />
            <Price />
            <FAQAccordion />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App