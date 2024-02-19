import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/website-design-and-seo-services" },
  { name: "RESUME", href: "/resume" },
  { name: "PROJECTS", href: "" },
  { name: "CONTACT", href: "#" },
];

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-primary font-display font-thin text-4xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            DIGIT<span className="font-medium">AL</span> DOM<span className="font-medium">AIN</span>
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
            <Link
              key={item.name}
              to={item.href}
              className="text-lg font-semibold leading-6 font-display text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
            >
              {item.name}
            </Link>
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
            <a href="/" className="-m-1.5 p-1.5 font-display text-green font-thin text-4xl">
            DIGIT<span className="font-medium">AL</span> DOM<span className="font-medium">AIN</span>
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
                    className="-mx-3 block rounded-lg px-3 py-4 font-display text-3xl font-semibold leading-9 hover:bg-fuchsia-500 text-white text-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-200"
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
