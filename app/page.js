import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Partners/>
      <About/>
      <Services/>
      <Projects/>
    </div>
  )
}
