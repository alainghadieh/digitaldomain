import { Testimonials } from "components/Testimonials";
import { Ping } from "components/Ping";
import { useTypeWriter } from "hooks/useTypeWriter";

export function Home() {
  const message = useTypeWriter({
    texts: ["E-commerce", "Fintech", "Telecom", "Retail"],
    delay: 210,
    infinite: true,
  });
  return (
    <>
      <div className="text-center">
        <h1>Web & Mobile App Development</h1>
        <h2>Beautiful, Captivating Websites &#x2022; SEO Services</h2>
        <h4 className="mt-6">
          Your go-to Digital Transformation for: {message} <br />
        </h4>
        <p>
          Hi, I'm Alain a Freelance Software & Web Developer Based in Lebanon
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <span className="relative">
            <a href="#" type="button" className="cta-btn">
              submit project
            </a>
            <Ping />
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
