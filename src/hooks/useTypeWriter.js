import { useState, useEffect } from "react";

export function useTypeWriter({ texts, delay, infinite }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentArrayIndex, setCurrentArrayIndex] = useState(0);
  const [shouldIncrement, setIsIncrement] = useState(true);
  useEffect(() => {
    let timeout1, timeout2;

    if (currentArrayIndex != texts.length) {
      if (currentIndex < texts[currentArrayIndex].length && shouldIncrement) {
        timeout1 = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + texts[currentArrayIndex][currentIndex]
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else if (currentIndex === texts[currentArrayIndex].length) {
        setIsIncrement(false);
      }
    }

    if (currentIndex >= 0 && !shouldIncrement) {
      timeout2 = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, delay);
    }

    // Check if the current text array is complete and move to the next one
    if (
      currentIndex === 0 &&
      !shouldIncrement &&
      currentArrayIndex < texts.length
    ) {
      setCurrentArrayIndex((prevIndex) => prevIndex + 1);
      setIsIncrement(true);
    }
    if (currentArrayIndex == texts.length && infinite) {
      setCurrentText("");
      setCurrentIndex(0);
      setCurrentArrayIndex(0);
      setIsIncrement(true);
    }

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [currentIndex, shouldIncrement, currentArrayIndex, delay, texts]);

  return <span className="typewriter">{currentText}</span>;
}
