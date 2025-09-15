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
import { Helmet } from 'react-helmet-async';


function App() {
  const pageTitle = 'الداتاثون الصحي - نحو إطالة العمر الصحي';
  const pageDescription = 'انضم إلى الداتاثون الصحي لحل تحديات حقيقية مرتبطة بطول العمر وجودة الحياة باستخدام بيانات صحية وتقنيات علوم البيانات.';
  const canonicalUrl = 'https://health-datathon.daldata.ai';
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/share/:id" element={<SharePage />} />
        <Route path="/" element={
          <>
            <Helmet>
              <title>{pageTitle}</title>
              <meta name="description" content={pageDescription} />
              <meta name="keywords" content="داتاثون, صحة, بيانات, ابتكار, تقنية, السعودية, فعاليات, الذكاء الاصطناعي" />
              <meta property="og:title" content={pageTitle} />
              <meta property="og:description" content={pageDescription} />
              <meta property="og:type" content="website" />
              <meta property="og:url" content={canonicalUrl} />
              <meta property="og:image" content="/logo-green.svg" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content={pageTitle} />
              <meta name="twitter:description" content={pageDescription} />
              <meta name="twitter:image" content="/logo-green.svg" />
              <link rel="canonical" href={canonicalUrl} />
              <script type="application/ld+json">{`
                {
                  "@context": "https://schema.org",
                  "@type": "Event",
                  "name": "الداتاثون الصحي",
                  "description": "${pageDescription}",
                  "url": "${canonicalUrl}",
                  "image": "/logo-green.svg",
                  "organizer": {
                    "@type": "Organization",
                    "name": "daldata-ai",
                    "url": "https://daldata.ai"
                  },
                  "eventStatus": "https://schema.org/EventScheduled",
                  "eventAttendanceMode": "https://schema.org/MixedEventAttendanceMode",
                  "location": {
                    "@type": "Place",
                    "name": "المملكة العربية السعودية"
                  }
                }
              `}</script>
            </Helmet>
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
                />
              </a>
              <Price />
              <Timeline />
              <TAndC />
              <FAQAccordion />
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App