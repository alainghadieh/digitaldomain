export function Home() {
  return (
    <div className="text-center">
      <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
        Web Developer & SEO Specialist
      </h1>
      <p className="mt-6 text-xl leading-8 text-slate-200">
        State of the Art Websites &#x2022; SEO Services <br /> Freelance Web
        Developer Based in Lebanon <br />
        Welcome I will work directly with you to determine the best course of
        action for your project, ensuring that your website is delivered on time
        and on budget.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <span className="relative inline-flex">
          <a
            href="#"
            type="button"
            className="inline-flex items-center px-4 py-2 font-display font-semibold leading-6 text-lg shadow hover:bg-indigo-500 text-white focus-visible:outline-offset-2 rounded-md bg-indigo-600 focus-visible:outline-indigo-600 transition ease-in-out duration-150 ring-1  ring-slate-200/20 tracking-wider"
          >
            CTA
          </a>
          <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green"></span>
          </span>
        </span>
        <a href="/website-design-and-seo-services" className="font-display text-md font-semibold leading-6 text-white">
          Services <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}
