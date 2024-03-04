import { Testimonial } from "./Testimonial";
import { Slider } from "components/Slider";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    reviewerName: "Dr Alexandra",
    jobTitle: "Founder, Alexandra Ageless Glowing",
    avatar: "./avatars/dralexandra_avatar.jpeg",
    alt: `Dr Alexandra's avatar`,
    review: `“Working with Alain was fantastic! His expertise and attention to detail resulted in a stunning skincare ecommerce site. Communication was seamless, and he kept me updated throughout. Highly recommend for anyone seeking top-notch web development!”`,
  },
  {
    reviewerName: "Nadine",
    jobTitle: "Marketing Manager at Fab",
    avatar: "./avatars/nadine_avatar.jpeg",
    alt: `Nadine's avatar`,
    review: `“Alain transformed our clothing store's online presence! His design skills captured our brand perfectly. Communication was excellent, and he delivered on time. Our website is now a seamless shopping experience thanks to his expertise!”`,
  },
];

const variants = {
  initial: {
    y: 0,
    opacity: 0,
  },
  animate: {
    y: -75,
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.1,
      delay: 0.75,
    },
  },
};
export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <motion.div
      className="flex flex-col justify-end"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <h2 className="text-center md:text-6xl mb-4">
        What my <span className="text-bermuda-300">clients</span> say
      </h2>
      <div className="w-full m-auto md:py-10 relative group">
        <Testimonial
          reviewerName={testimonials[currentIndex].reviewerName}
          jobTitle={testimonials[currentIndex].jobTitle}
          avatar={testimonials[currentIndex].avatar}
          alt={testimonials[currentIndex].alt}
          review={testimonials[currentIndex].review}
        />
        <Slider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          elements={testimonials}
        />
      </div>
    </motion.div>
  );
}
