import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Circle({ filled }) {
  const filledClasses = "w-2 h-2 bg-spindle-300 rounded-full";
  const unfilledClasses = "w-2 h-2 border border-spindle-300 rounded-full";
  const circleClasses = filled ? filledClasses : unfilledClasses;
  return <div className={circleClasses}></div>;
}
export function Slider(props) {
    const {currentIndex, prevSlide, nextSlide, goToSlide, elements} = props;
  return (
    <>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-spindle-950/50 text-spindle-50 cursor-pointer">
        <ChevronLeftIcon onClick={prevSlide} size={30} width={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-spindle-950/50 text-spindle-50 cursor-pointer">
        <ChevronRightIcon onClick={nextSlide} size={30} width={30} />
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
