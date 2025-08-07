import Hero from '../components/Hero'
import Project from '../components/Project'
import Tools from '../components/Tools'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div className='bg-slate-950 min-w-full min-h-[100vh] text-slate-100 overflow-hidden'>
      <Hero />
      <Project />
      <Tools />
      <Contact />
      <Footer />
    </div>
  )
}

export default Homepage