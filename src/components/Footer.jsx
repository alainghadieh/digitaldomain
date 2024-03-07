import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { Logo } from "./Logo";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: '90%',
    opacity: 0,
  },
  animate: {
    y:'0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
export function Footer() {
  return (
    <motion.footer  variants={variants} initial="initial" whileInView="animate" className="">
      <div className="px-6 py-8 mx-auto ">
        <div className="flex flex-col items-center text-center ">
          <div className="flex flex-wrap justify-center mt-6 -mx-4 ">
            <div className="text-center max-w-screen-lg rounded-3xl card border border-bermuda-600 drop-shadow-lg p-3 md:p-8 bg-bermuda-700/80">
              <p className="text-2xl font-display tracking-normal text-spindle-50 text-shadow-md capitalize md:text-4xl md:mb-5">
                Let’s get you started on something great
              </p>
              <p className="mt-4 font-semibold tracking-wide text-spindle-100 md:text-2xl md:leading-8">
                Together, we'll ensure your project is delivered promptly and within budget.
              </p>
              <div className="flex flex-col mt-6 items-center justify-center">
                <a href="/contact" className="btn-outline">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="relative">
          <div className="flex flex-row justify-center -mx-2">
            <Logo />
          </div>
          <div className="my-6 flex flex-row justify-center -mx-2">
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
