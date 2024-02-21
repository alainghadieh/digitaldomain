import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Logo } from "./Logo";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/website-design-and-seo-services" },
  { name: "RESUME", href: "/resume" },
  { name: "PROJECTS", href: "" },
  { name: "CONTACT", href: "#" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinkClasses =
    "text-lg font-light leading-6 font-link transition-colors duration-300 hover:text-green";
  return (
    <header className="inset-x-0 top-0 z-50 sticky rounded-bl-3xl rounded-br-3xl backdrop-blur-sm backdrop-saturate-150 border-x border-b border-solid	border-[#e5e7eb33]	shadow-[1px_1px_20px_rgba(0,0,0,0.12)] max-w-screen-lg	mx-auto my-0">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
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
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
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
                  ? "text-green underline underline-offset-8 " + navLinkClasses
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/bg-slate-800 bg-slate-800/30  backdrop-blur-md transition ease-in-out delay-1050 duration-300">
          <div className="flex items-center justify-between">
          <a
            href="/"
          >
            <Logo />
          </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6">
            <div className="my-17 divide-y divide-gray-500/10 items-center grow">
              <div className="space-y-2 py-6 flex flex-col">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-4 font-link font-light text-3xl leading-9 hover:bg-fuchsia-500 text-white text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200"
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
