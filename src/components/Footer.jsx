import { Linkedin, Github } from "lucide-react"
import { useContext } from "react"
import themeContext from "../context/ThemeContext"

const Footer = () => {
  const { locale } = useContext(themeContext);
  return (
    <footer className={`w-full h-60 flex flex-col justify-center items-center gap-5 bg-black/50 px-2 py-4 ${ locale === 'light' && 'bg-gray-900' }`}>
        <div className="flex gap-4">
            <Linkedin />
            <Github />
        </div>
        <p className="text-sm font-semibold mt-5 text-center">© 2025 | Achmad Fajar | achmadfajar712@gmail.com</p>
    </footer>
  )
}

export default Footer