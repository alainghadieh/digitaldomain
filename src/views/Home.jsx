import { Testimonials } from "components/Testimonials";
import { Footer } from "components/Footer";
import { useTypeWriter } from "hooks/useTypeWriter";
import { motion } from "framer-motion";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/outline";

const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -175,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delay: 0.75,
    },
  },
};
export function Home() {
  const message = useTypeWriter({
    texts: ["E-commerce", "Retail", "Fintech", "Telecom"],
    delay: 210,
    infinite: true,
  });
  return (
    <>
      <motion.section
        className=" flex flex-col justify-end text-left homepage snap-center h-screen pt-48 px-5 "
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <h1 className="lowercase md:text-center z-10">
          Unlock Your Digital Potential
        </h1>
        <h2 className="uppercase md:text-center z-10">
          with Tailored Web & Mobile Solutions
        </h2>
        <br />
        <span className="!lowercase md:text-center z-10">for {message}</span>
        <div className="mt-10 flex items-center justify-center gap-x-6 z-10">
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a href="/contact" type="button" className="cta-btn">
              get started
            </a>
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="relative"
          >
            <a
              href="/website-design-and-seo-services"
              className="btn-outline"
              type="button"
            >
              Services
            </a>
          </motion.span>
        </div>
        <motion.a
          href="#section2"
          className="flex justify-center pt-20"
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ChevronDoubleDownIcon className="h2-icon" />
        </motion.a>
      </motion.section>
      <section className="flex flex-col justify-center snap-center h-screen  max-w-screen-lg mx-auto pt-48  px-5 relative">
        <a id="section2"> </a>
        <Testimonials />
        <motion.a
          href="#section3"
          className="flex justify-center "
          animate={{
            y: [0, -20, 0],
            transition: {
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <ChevronDoubleDownIcon className="h2-icon" />
        </motion.a>
      </section>
      <section className="flex flex-col justify-center snap-center h-screen pt-24 md:pt-48 px-5 max-w-3xl m-auto">
        <a id="section3"></a>
        <Footer />
      </section>
    </>
  );
}
