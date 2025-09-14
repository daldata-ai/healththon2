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
import { motion } from 'framer-motion'


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
           <a href='https://t.me/+Bq7GmSlDY_liNGI8' className='bg-inherit'>
          <motion.img 
          src="price end.svg" 
          alt="Prize" 
          className="w-full my-10"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        /></a>
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