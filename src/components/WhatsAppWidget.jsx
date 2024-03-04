import { motion } from "framer-motion";
import { Ping } from "components/Ping";
import { TooltipDiamond } from "components/TooltipDiamond";
export function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/96176024091?text=Hello, How can I help ?"
      target="_blank"
      type="button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="fixed bottom-4 right-4 cta-btn !w-fit !rounded-full !p-3 !shadow-spindle-200/35 z-20"
    >
      <span className="inline-flex justify-center align-bottom text-center">
        <img
          src="figures/whatsapp-logo.svg"
          alt="whatsapp-logo"
          className="lg:h-12 lg:w-12 h-14 w-14"
        />
      </span>
      <Ping />
      <p className="hidden md:block absolute lg:w-28 w-32 px-4 py-3 text-center text-spindle-600 text-sm -translate-x-1/2 bg-spindle-200 rounded-lg shadow-md top-3 right-1/2 shadow-spindle-200/35">
        <span className="transition-colors hover:text-bermuda-400/80 ">
          WhatsApp
        </span>
        <TooltipDiamond />
      </p>
    </motion.a>
  );
}
