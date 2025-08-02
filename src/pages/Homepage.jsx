import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Project from '../components/Project'
import Tools from '../components/Tools'
import Contact from '../components/Contact'

const Homepage = () => {
  return (
    <div className='bg-slate-950 min-w-full min-h-[100vh] text-slate-100 overflow-hidden'>
      <Sidebar />
      <Hero />
      <Project />
      <Tools />
      <Contact />
    </div>
  )
}

export default Homepage