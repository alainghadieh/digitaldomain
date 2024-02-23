import { Testimonials } from "../components/Testimonials";
import { useTypeWriter } from "../hooks/useTypeWriter";
import React from "react";
export function Home() {
  const message = useTypeWriter({
    texts: ["E-commerce", "Fintech", "Telecom", "Retail"],
    delay: 210,
    infinite: true,
  });
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold tracking-normal pb-4 text-white sm:text-6xl text-shadow-md ">
          Web & Mobile App Development
        </h1>
        <h2 className="font-display text-xl font-bold tracking-normal text-white sm:text-xl text-shadow-md ">
          State of the Art, Captivating Websites &#x2022; SEO Services
        </h2>
        <h2 className="mt-6 text-2xl leading-8 text-spindle-100">
          Your go-to Digital Transformation for: {message} <br />
        </h2>
        <h4 className="text-spindle-200 text-lg"></h4>
        <p className="text-lg mt-3 text-center capitalize leading-8 text-spindle-100">
          Hi, I'm Alain a Freelance Software & Web Developer Based in Lebanon
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <span className="relative inline-flex">
            <a
              href="#"
              type="button"
              className="inline-flex items-center px-5 py-3 font-display font-semibold leading-6 text-xl shadow  text-white focus-visible:outline-offset-2 rounded-md bg-gradient-to-br from-spindle-400 to-spindle-600 hover:from-spindle-500 hover:to-spindle-700 focus-visible:outline-spindle-700 transition ease-in-out duration-150 tracking-wider focus:outline-none focus:ring focus:ring-spindle-700 focus:ring-opacity-80"
            >
              submit project
            </a>
            <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping-fast absolute inline-flex h-full w-full rounded-full bg-bermuda-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-bermuda-300"></span>
            </span>
          </span>
          <a
            href="/website-design-and-seo-services"
            className="font-display lg:text-xl sm:text-lg font-semibold leading-6 text-white transition-colors duration-300 hover:text-bermuda-300 tracking-wider"
          >
            Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <br />
      <br />
      <Testimonials />
    </>
  );
}
