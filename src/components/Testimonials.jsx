import { Testimonial } from "./Testimonial";
import {Slider} from 'components/Slider'
import { useState } from "react";
const testimonials = [
  {
    reviewerName: "Dr Alexandra",
    jobTitle: "Founder, Alexandra Ageless Glowing",
    avatar: "./dralexandra_avatar.jpeg",
    alt: `Dr Alexandra's avatar`,
    review: `“Working with Alain was fantastic! His expertise and attention to detail resulted in a stunning skincare ecommerce site. Communication was seamless, and he kept me updated throughout. Highly recommend for anyone seeking top-notch web development!”`,
  },
  {
    reviewerName: "Nadine",
    jobTitle: "Marketing Manager at Fab",
    avatar: "./nadine_avatar.jpeg",
    alt: `Nadine's avatar`,
    review: `“Alain transformed our clothing store's online presence! His design skills captured our brand perfectly. Communication was excellent, and he delivered on time. Our website is now a seamless shopping experience thanks to his expertise!”`,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;    
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className="card">
      <div className="container px-6 lg:py-10 py-6 mx-auto">
        <h2 className="text-center">
          What my <span className="text-bermuda-300 ">clients</span> say
        </h2>

        <div className="max-w-[1400px] w-full m-auto lg:py-10 lg:px-4 py-4 relative group">
          <Testimonial
            reviewerName={testimonials[currentIndex].reviewerName}
            jobTitle={testimonials[currentIndex].jobTitle}
            avatar={testimonials[currentIndex].avatar}
            alt={testimonials[currentIndex].alt}
            review={testimonials[currentIndex].review}
          />
        <Slider currentIndex={currentIndex} prevSlide={prevSlide} nextSlide={nextSlide} goToSlide={goToSlide} elements={testimonials}/>
        </div>
      </div>
    </section>
  );
}
