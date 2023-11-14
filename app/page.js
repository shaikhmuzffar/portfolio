import Hero from './components/Hero'
import Partners from './components/Partners'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Expertice from './components/Expertice'
import Articles from './components/Articles'
import AnyProject from './components/AnyProject'


export default function Home() {
  return (
    <div style={{fontFamily:'Poppins'}} >
      <Hero/>
      <Partners/>
      <About/>
      <Services/>
      <Projects/>
      <Expertice/>
      <Articles/>
      <AnyProject/>
    </div>
  )
}
