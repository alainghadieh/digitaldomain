import { PortfolioCard } from "components/PortfolioCard";
import {Slider} from 'components/Slider'
import { useState } from "react";
const projects = [
  {
    name: "Pulse Website",
    images: " bg-pulse-sm lg:bg-pulse-lg ",
    detail: "online fitness wear store",
    url: "https://www.pulsefitnesswear.com/",
  },
  {
    name: "Dr Alexandra Website",
    images: " bg-dralexandra-sm lg:bg-dralexandra-lg ",
    detail: "e-commerce site selling skincare products",
    url: "https://dralexandra.clinic/",
  },
];
export function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;    
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <section className="">
    
    <div className="max-w-[1400px] w-full m-auto lg:py-10 lg:px-4 py-4 relative group">
          
        <PortfolioCard
          name={projects[currentIndex].name}
          detail={projects[currentIndex].detail}
          images={projects[currentIndex].images}
          url={projects[currentIndex].url}
        />
        <Slider currentIndex={currentIndex} prevSlide={prevSlide} nextSlide={nextSlide} goToSlide={goToSlide} elements={projects}/>
        </div>
    </section>
  );
}
