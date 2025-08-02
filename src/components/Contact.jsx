import { Laptop, Server, Layout, ArrowRight, Phone } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="px-4 md:px-16">
      <div className="">
        <div className="py-16 bg-slate-950 text-white">
          <div className="container mx-auto">
            <motion.h2 initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.4, ease: ['easeIn']}} className="text-4xl font-bold text-center mb-12 text-blue-600">
              What I Can Offer
            </motion.h2>
            <motion.p initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.4, ease: ['easeIn']}} className="text-xl text-center mb-16 max-w-3xl mx-auto text-gray-300">
              I help you bring your digital ideas to life, from simple websites
              to complex web applications. With expertise across the entire web
              development spectrum, I'm ready to build the perfect solution for
              your needs.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.4, ease: ['easeIn']}} className="gradient-primary rounded-lg shadow-lg p-8 flex flex-col items-center text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-blue-600 mb-6">
                  <Laptop className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Frontend Development
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Crafting <b>engaging and intuitive web interfaces</b> that
                  captivate your visitors. I focus on user experience and
                  responsive designs across various devices.
                </p>
              </motion.div>

              <motion.div initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.5, ease: ['easeIn']}} className="gradient-primary rounded-lg shadow-lg p-8 flex flex-col items-center text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-blue-600 mb-6">
                  <Server className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Backend Development
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Building <b>robust and secure systems</b> behind the scenes that
                  ensure your website or application runs smoothly. This
                  involves server logic, databases, and efficient APIs.
                </p>
              </motion.div>

              <motion.div initial={{translateY: 100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 0.6, ease: ['easeIn']}} className="gradient-primary rounded-lg shadow-lg p-8 flex flex-col items-center text-center border border-white/20 hover:scale-105 transition-transform duration-300">
                <div className="text-blue-600 mb-6">
                  <Layout className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
                  Fullstack Development
                </h3>
                <p className="text-gray-200 leading-relaxed mb-6">
                  Developing **complete web solutions from start to finish**,
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
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-slate-950 bg-emerald-400 hover:bg-emerald-500 transition-colors duration-300"
              >
                Contact Me Now
                <Phone className="ml-3 w-5 h-5" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
