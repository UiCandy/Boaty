import { useEffect } from "react";

import debounce from "utils/debounce";

const useSlider = (slide, images) => {
  let slideCounter = 0;

  useEffect(() => {
    const handleResize = debounce(() => {
      startSlider();
    }, 400);

    window.addEventListener("resize", handleResize);

    startSlider();

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const startSlider = () => {
    slide.current.style.minHeight = slide.current.clientWidth * 0.584 + "px";
    slide.current.style.backgroundImage = `url(${images[0]})`;
  };

  const handleSlide = (slideIdx) => {
    slide.current.style.minHeight = slide.current.clientWidth * 0.584 + "px";
    slide.current.style.backgroundImage = `url(${images[slideIdx - 1]})`;
    animateSlide(slideIdx);
  };

  const animateSlide = () => {
    slide.current.classList.add("fadeIn");
    setTimeout(() => {
      slide.current.classList.remove("fadeIn");
    }, 800);
  };

  const goToPreviousSlide = () => {
    if (slideCounter === 0) {
      handleSlide(images.length);
      slideCounter = images.length;
    }

    handleSlide(slideCounter);
    slideCounter--;
  };

  const goToNextSlide = () => {
    if (slideCounter === images.length - 1) {
      startSlider();
      slideCounter = -1;
      animateSlide(slide);
    }
    slide.current.style.minHeight = slide.current.clientWidth * 0.584 + "px";
    slide.current.style.backgroundImage = `url(${images[slideCounter + 1]})`;
    slideCounter++;
    animateSlide(slide);
  };

  return { goToPreviousSlide, goToNextSlide };
};

export default useSlider;
