import { Laptop, Server, Layout, ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useContext } from "react";
import themeContext from "../context/ThemeContext";

const Contact = () => {
  const { locale } = useContext(themeContext);
  return (
    <div className="px-4 md:px-16">
      <div className="">
        <div className="py-16  text-white">
          <div className="container mx-auto">
            <motion.h2
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: ["easeIn"] }}
              className="text-4xl font-bold text-center mb-12 text-blue-600"
            >
              What I Can Offer
            </motion.h2>
            <motion.p
              initial={{ translateY: 100, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.4, ease: ["easeIn"] }}
              className={`text-xl text-center mb-16 max-w-3xl mx-auto text-gray-300 ${
                locale === "light" && "text-gray-900"
              }`}
            >
              I help you bring your digital ideas to life, from simple websites
              to complex web applications. With expertise across the entire web
              development spectrum, I'm ready to build the perfect solution for
              your needs.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 group">
              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: ["easeIn"] }}
                className="bg-gray-300/20 backdrop-blur-sm xl:translate-x-[200px] group-hover:translate-x-0 group-hover:rotate-0 xl:rotate-[-5deg] rounded-lg shadow-lg p-8 flex flex-col items-center text-center border border-white/20  transition-transform duration-300"
              >
                <div className="text-blue-600 mb-6">
                  <Laptop className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Frontend Development
                </h3>
                <p
                  className={`text-gray-200 leading-relaxed mb-6 ${
                    locale === "light" && "text-gray-900"
                  }`}
                >
                  Crafting <b>engaging and intuitive web interfaces</b> that
                  captivate your visitors. I focus on user experience and
                  responsive designs across various devices.
                </p>
              </motion.div>

              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: ["easeIn"] }}
                className="bg-gray-300/20 backdrop-blur-sm z-10 rounded-lg shadow-lg p-8 flex flex-col items-center text-center border border-white/20  transition-transform"
              >
                <div className="text-blue-600 mb-6">
                  <Server className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Backend Development
                </h3>
                <p
                  className={`text-gray-200 leading-relaxed mb-6 ${
                    locale === "light" && "text-gray-900"
                  }`}
                >
                  Building <b>robust and secure systems</b> behind the scenes
                  that ensure your website or application runs smoothly. This
                  involves server logic, databases, and efficient APIs.
                </p>
              </motion.div>

              <motion.div
                initial={{ translateY: 100, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: ["easeIn"] }}
                className="bg-gray-300/20 z-30 xl:translate-x-[-200px] group-hover:translate-x-0 group-hover:rotate-0 xl:rotate-[5deg] backdrop-blur-sm rounded-lg shadow-lg p-8 flex flex-col items-center text-center transition-transform duration-300 border border-white/20"
              >
                <div className="text-blue-600 mb-6">
                  <Layout className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Fullstack Development
                </h3>
                <p
                  className={`text-gray-200 leading-relaxed mb-6 ${
                    locale === "light" && "text-gray-900"
                  }`}
                >
                  Developing <b>complete web solutions from start to finish </b>
                  ensuring a seamless user experience and efficiency for your
                  business. From design to server implementation.
                </p>
              </motion.div>
            </div>

            <div className="text-center mt-16">
              <h3 className="text-3xl font-bold mb-6 text-blue-600">
                Ready to bring your ideas to life?
              </h3>
              <a
                href="#contact"
                className="relative block w-[15rem] group py-1 mx-auto"
              >
                <div className={`flex justify-center z-20 mx-auto items-center w-60 px-6 rounded-full relative py-4 bg-slate-950 ${ locale === 'light' && 'bg-transparent text-gray-900 font-bold hover:bg-gray-900 hover:text-gray-300 transition-colors duration-150 ease-in-out border-2 border-gray-900' }`}>
                  Contact Me Now
                  <Phone className="ml-3 w-5 h-5" />
                </div>
                {locale === "dark" && (
                  <>
                    <div className="absolute inset-0 group-hover:blur-md transition-all ease-in w-full animate-tilt rounded-full blur-sm bg-conic from-blue-600 to-emerald-400 to-50%"></div>
                  </>
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
