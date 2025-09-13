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

function App() {
  return (
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
    </div>
  )
}

export default App