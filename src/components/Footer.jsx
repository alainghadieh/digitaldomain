import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { Logo } from "./Logo";
import { useLocation } from "react-router";

export function Footer() {
  const location = useLocation();
  const shouldHideSection = location.pathname === '/contact';
  const sectionClasses = `flex flex-col items-center text-center ${shouldHideSection ? 'hidden' : ''}`;

  return (
    <footer className="bg-spindle-900">
      <div className="px-6 py-8 mx-auto">
        <div className={sectionClasses}>
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <div className="text-center max-w-md rounded-3xl p-6 border border-spindle-400/20 drop-shadow-lg">
              <p className="text-2xl font-display tracking-normal text-spindle-50 text-shadow-md capitalize">
                Let’s get you started on something great
              </p>
              <p className="mt-4 font-semibold tracking-wide text-spindle-100">
                Together, we'll ensure your project is delivered promptly and within budget.
              </p>
              <div className="flex flex-col mt-6 items-center justify-center">
                <a href="/contact" className="btn-primary animate-pulse-slow">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="flex flex-row justify-center -mx-2">
            <Logo />
          </div>
          <div className="my-6 flex flex-row justify-center -mx-2">
            <LinkedInIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </footer>
  );
}
