import { Testimonials } from "../Testimonials";
import {BackgroundPolygon1} from "./../BackgroundPolygon1";

export function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl text-shadow-md">
          Web Developer & SEO Specialist
        </h1>
        <h2 className="mt-6 text-2xl leading-8 text-slate-200">
          State of the Art & Captivating Websites &#x2022; SEO Services <br />
        </h2>
        <h4 className="text-slate-200 text-lg">
          Freelance Web Developer Based in Lebanon
        </h4>
        <p className="text-lg text-left leading-8 text-slate-200">
          Welcome I will work directly with you to determine the best course of
          action for your project, ensuring that your website is delivered on
          time and on budget.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <span className="relative inline-flex">
            <a
              href="#"
              type="button"
              className="inline-flex items-center px-5 py-3 font-display font-semibold leading-6 text-2xl shadow hover:bg-indigo-500 text-white focus-visible:outline-offset-2 rounded-md bg-indigo-600 focus-visible:outline-indigo-600 transition ease-in-out duration-150 tracking-wider focus:outline-none focus:ring focus:ring-green focus:ring-opacity-80"
            >
              CTA
            </a>
            <span className="flex absolute h-4 w-4 top-0 right-0 -mt-1 -mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green"></span>
            </span>
          </span>
          <a
            href="/website-design-and-seo-services"
            className="font-display text-xl font-semibold leading-6 text-white transition-colors duration-300 hover:text-green"
          >
            Services <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <br /><br />
      <Testimonials />
    </>
  );
}
