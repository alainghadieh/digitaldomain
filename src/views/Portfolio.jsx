import { PortfolioCard } from "components/PortfolioCard";
import { Slider } from "components/Slider";
import { useState } from "react";
import { Footer } from "components/Footer";
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
  return (
    <div className="container px-6 lg:py-10 mx-auto">
      <div className="max-w-[1400px] w-full m-auto py-2 lg:py-10 lg:px-4 relative group">
        <PortfolioCard
          name={projects[currentIndex].name}
          detail={projects[currentIndex].detail}
          images={projects[currentIndex].images}
          url={projects[currentIndex].url}
        />
        <Slider
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          elements={projects}
        />
      </div>
      <Footer />
    </div>
  );
}
