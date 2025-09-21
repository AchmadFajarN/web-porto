import { useContext, useState } from "react"
import themeContext from "../context/ThemeContext"

const Hamburger = ({ active, setActive }) => {
  const { locale } = useContext(themeContext)  
  return (
    <div onClick={() => setActive(!active)} className='md:hidden flex flex-col gap-2 cursor-ponter'> 
        <div className={`w-8 h-[2px] ${locale === 'light'? 'bg-gray-900': 'bg-white'} ${ active ? 'rotate-40' : 'rotate-0' } origin-left transition-transform duration-300 ease-in-out`}></div>
        <div className={`w-8 h-[2px] ${locale === 'light'? 'bg-gray-900': 'bg-white'} ${ active ? 'scale-0' : 'scale-100' } transition-transform duration-300 ease-in-out`}></div>
        <div className={`w-8 h-[2px] ${locale === 'light'? 'bg-gray-900': 'bg-white'} ${ active ? '-rotate-40' : '-rotate-0' } origin-left transition-transform duration-300 ease-in-out`}></div>
    </div>
  )
}

export default Hamburger