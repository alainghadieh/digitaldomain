import BackgroundPolygon from "./BackgroundPolygon";
import { NavBar } from "./NavBar";

export default function App() {
  return (
    <div className="bg-slate-800">
      <NavBar></NavBar>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <BackgroundPolygon isFirst="true"/>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Web Developer & SEO Specialist
            </h1>
            <p className="mt-6 text-2xl leading-8 text-slate-400">
              State of the Art Websites &#x2022; SEO
              Services <br /> Freelance Web Developer Based in Lebanon <br />
              Welcome I will work directly with you to determine the best course
              of action for your project, ensuring that your website is
              delivered on time and on budget.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <span className="relative inline-flex">
                <a
                  href="#"
                  type="button"
                  className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-lg shadow hover:bg-indigo-500 text-white focus-visible:outline-offset-2 rounded-md bg-indigo-600 focus-visible:outline-indigo-600 transition ease-in-out duration-150 ring-1 ring-slate-900/10 ring-slate-200/20 "
                >
                  CTA
                </a>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
                </span>
              </span>
              <a
                href="#"
                className="text-md font-semibold leading-6 text-white"
              >
                Check Out My Resume <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="relative rounded-xl overflow-auto p-8"><div className="flex justify-center">
  <div className="animate-bounce p-2 w-10 h-10 ring-1 ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
    <svg className="w-6 h-6 text-violet-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
  </div>
</div></div>
        </div>
        <BackgroundPolygon isFirst="false" />
      </div>
    </div>
  );
}
