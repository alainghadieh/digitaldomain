import { InstagramIcon } from "./InstagramIcon";
import { LinkedInIcon } from "./LinkedInIcon";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-spindle-900">
      <div className="px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center ">
          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <div className="text-center max-w-md ">
              <p className="text-2xl font-semibold text-white">
                Let’s get you started on something great
              </p>
              <small className="mt-8  font-semibold text-lg  text-center tracking-wide text-spindle-100">
                Together, we'll ensure your project is delivered promptly and within budget.
              </small>
              <div className="flex flex-col mt-6 items-center justify-center">
                <button className="btn-primary">Get in touch</button>
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
