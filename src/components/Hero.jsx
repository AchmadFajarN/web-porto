import { Typewriter } from 'react-simple-typewriter'
import { Download, FolderGit2, Linkedin, Mail, ChevronDown } from 'lucide-react';
import profile from '../assets/profile.jpg'

const Hero = () => {
  const data = ["Web Developer", "Front-End", "Back-End"];
  return (
    <div className="relative w-full pt-10 flex flex-col items-center h-screen bg-radial-[at_50%_0%] from-slate-50/20 via-slate-950 via-60% to-slate-950 to-90%">
      <div className='absolute size-200 -top-[50%] animate-wiggle '>
        <div className='absolute shadow-[0_0_10px_#ffffff] size-1 bg-white border bottom-0 rounded-full'>
        </div>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border bottom-0 right-0 rounded-full'>
        </div>
      </div>
      <div className='absolute size-[30rem] -top-[50%] animate-wiggle '>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border bottom-0 rounded-full'>
        </div>
        <div className='absolute size-1 bg-white border bottom-0 right-0 rounded-full'>
        </div>
      </div>
      <div className='absolute size-[40rem] -top-[50%] animate-wiggle '>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-0 rounded-full'>
        </div>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-0 right-0 rounded-full'>
        </div>
      </div>
      <div className='absolute size-[40rem] -top-[50%] animate-wiggle '>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-25 rounded-full'>
        </div>
        <div className='absolute size-1 shadow-[0_0_10px_#ffffff] bg-white border top-25 right-0 rounded-full'>
        </div>
      </div>
      <div style={{backgroundImage: `url(${profile})`}} className="size-40 bg-center bg-cover rounded-full shadow-[0_25px_10px_rgba(0,0,0,0.3)] mt-10">
      </div>
      <div className="mt-8 text-center">
        <h1 className="font-bold text-xl md:text-2xl">Achmad Fajar</h1>
        <h2 className="font-semibold my-2"><Typewriter loop={false} words={data} /><span className='border size-2 animate-ping'></span></h2>
        <p className="text-sm">"Transforming Ideas into Interactive Interfaces"</p>
      </div>
      <div className='mt-4 z-20 flex flex-col md:flex-row gap-4'>
        <button className=' cursor-pointer font-semibold  text-sm justify-center items-center py-2 px-4 bg-linear-to-t from-sky-500 to-indigo-500 hover:shadow-[0_0_20px_2px_rgba(59,130,246,0.5)] transition-all ease-in duration-300 rounded-md'>
          <div className='flex w-full h-full shadow-[0_25px_10px_rgba(0,0,0,0.3)] justify-center items-center gap-2'>
            <Download size={20} />
            Download CV
          </div>
        </button>
        <button className=' cursor-pointer font-semibold text-sm justify-center items-center py-2 px-4 bg-linear-to-t from-emerald-400 to-green-500 hover:shadow-[0_0_20px_2px_rgba(52,211,153,0.5)] transition-all ease-in duration-300 rounded-md'>
          <div className='flex w-full h-full shadow-[0_25px_10px_rgba(0,0,0,0.3)] justify-center items-center gap-2'>
            <FolderGit2 size={20} />
            See My Project
          </div>
        </button>
      </div>
      <div className='flex gap-4 mt-8 z-20'>
        <div className='p-2 shadow-[0_25px_10px_rgba(0,0,0,0.3)] cursor-pointer bg-white/10 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-full'>
          <Linkedin className='text-gray-50/50' />
        </div>
        <div className='p-2 shadow-[0_25px_10px_rgba(0,0,0,0.3)] cursor-pointer bg-white/10 hover:bg-white/20 transition-colors duration-300 ease-in-out rounded-full'>
          <Mail className='text-gray-50/50' />
        </div>
      </div>
      <div className='mt-10 z-20 cursor-pointer'>
        <ChevronDown className='text-gray-50/50 animate-bounce' />
      </div>
    </div>
  )
}

export default Hero