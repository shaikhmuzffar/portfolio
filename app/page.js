import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Expertice from './components/Expertice'
import Articles from './components/Articles'
import AnyProject from './components/AnyProject'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div style={{fontFamily:'Poppins'}} >
      <Navbar/>
      <Hero/>
      <Partners/>
      <About/>
      <Services/>
      <Projects/>
      <Expertice/>
      <Articles/>
      <AnyProject/>
      <Footer/>
    </div>
  )
}
