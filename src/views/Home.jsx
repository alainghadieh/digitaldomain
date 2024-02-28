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
        <h3 className="mt-6">
          Your go-to Digital Transformation <br/>for {message} <br />
        </h3>
        <p className="hidden lg:block">
          Hi, I'm Alain a Freelance Software & Web Developer Based in Lebanon
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <span className="relative">
            <a href="/contact" type="button" className="cta-btn">
              reach out
            </a>
            <Ping />
          </span>
          <a
            href="/website-design-and-seo-services"
            className="btn-outline"
            type="button"
          >
            Services
          </a>
        </div>
      </div>
      <br />
      <br />
      <Testimonials />
    </>
  );
}
