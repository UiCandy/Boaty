import React, { useRef } from "react";
import { Box } from "rebass";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import useSlider from "../hooks/useSlider";

const Slider = ({ images }) => {
  const slide = useRef(null);
  const { goToPreviousSlide, goToNextSlide } = useSlider(slide, images);
  return (
    <Box
      width={"100%"}
      sx={{
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        svg: { fontSize: 40, color: "white", cursor: "pointer" },
      }}
      className="slider"
      ref={slide}
    >
      <Box
        sx={{
          justifyContent: "space-between",
          alignContent: "normal",
          display: "flex",
          flexGrow: "1",
          alignItems: "center",
        }}
      >
        <ArrowLeftIcon onClick={goToPreviousSlide} />

        <ArrowRightIcon onClick={goToNextSlide} />
      </Box>
    </Box>
  );
};

export default Slider;
