import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Circle({ filled }) {
  const filledClasses = "w-2 h-2 bg-spindle-300 rounded-full";
  const unfilledClasses = "w-2 h-2 border border-spindle-300 rounded-full";
  const circleClasses = filled ? filledClasses : unfilledClasses;
  return <div className={circleClasses}></div>;
}
export function Slider(props) {
    const {currentIndex, setCurrentIndex, elements} = props;
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? elements.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === elements.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;    
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };
  return (
    <>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -left-4 text-2xl rounded-full p-2 bg-spindle-100/40 text-spindle-50 cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} size={25} width={25} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] -right-4 text-2xl rounded-full p-2 bg-spindle-100/40 text-spindle-50 cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} size={25} width={25} />
      </div>
      <div className="flex flex-row gap-1 top-4 justify-center py-2">
        {elements.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <Circle filled={currentIndex === slideIndex}></Circle>
          </div>
        ))}
      </div>
    </>
  );
}
