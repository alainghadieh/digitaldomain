import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/website-design-and-seo-services" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinkClasses =
    " px-[3px] link-container text-sm font-extrabold leading-6 font-display tracking-[1px] transition-colors duration-300 hover:text-bermuda-300 ";
  return (
    <header className="inset-x-0 top-0 z-50 sticky rounded-bl-3xl rounded-br-3xl backdrop-blur-lg backdrop-saturate-100 drop-shadow-lg bg-spindle-200/10 border-x border-b border-spindle-400/20 max-w-screen-lg	mx-auto my-0">
      <nav
        className="flex items-center justify-between p-5 lg:py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
          >
            <Logo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-bermuda-300 underline underline-offset-[37px] decoration-[3px]" + navLinkClasses
                  : "text-white " + navLinkClasses
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-5 py-5 sm:max-w-sm sm:ring-1 sm:ring-gray-900/bg-slate-800 bg-slate-800/30  backdrop-blur-md transition ease-in-out delay-1050 duration-300">
          <div className="flex items-center justify-between">
          <a
            href="/"
            className="pl-[1px]"
          >
            <Logo />
          </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-8 w-8 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="my-17 divide-y divide-gray-500/10 items-center grow">
              <div className="space-y-2 py-6 flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-4 text-2xl font-extrabold  font-display  tracking-[1px] leading-9 hover:bg-gradient-to-b :hover:text-spindle-50 hover:bg-spindle-700 hover:border hover:border-spindle-700 focus-visible:outline-spindle-800 text-white text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
