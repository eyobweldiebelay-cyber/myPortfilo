import './App.css'
import Navbar from './commponents/Navbar'
import About from './section/About'
import Hero from './section/Hero'
import Services from './section/Services'
import Skills from './section/Skills'
import Projects from './section/Projects'
import Education from './section/Education'
import WhyHireMe from './section/WhyHireMe'
import Resume from './section/Resume'
import Contact from './section/Contact'
import Footer from './commponents/Footer'




function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home">
         <Hero/>
         <About/>
         <Services/>
         <Skills/>
         <Projects/>
         <Education />
         <WhyHireMe />
         <Resume />
         <Contact />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App