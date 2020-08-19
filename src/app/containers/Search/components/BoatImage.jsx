/** @jsx jsx */
import { jsx } from "theme-ui";

import TimerTwoToneIcon from "@material-ui/icons/TimerTwoTone";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";

import { Image } from "rebass";

const styles = {
  display: "flex",
  borderRadius: 4,
  background: "linear-gradient( rgba(0,0,0,0.00),rgba(0,0,0,0.60))",
  color: "muted",
  cursor: "pointer",
  width: "100%",
  justifyContent: "space-between",
  marginTop: -66,
  position: "relative",
  padding: 2,
  paddingTop: 4,
  zIndex: 0,
  span: {
    position: "relative",
    top: "3px",
  },
};

const BoatImage = ({ boat }) => {
  return (
    <figure sx={{ margin: 0 }}>
      <Image
        sx={{
          maxWidth: "100%",
          transition: "transform 0.4s, filter 0.8s ease-in-out",
          filter: "contrast(100%) brightness(100%)",
          transform: "scale(1.0)",
          "&:hover": {
            transform: "scale(1.1)",
            filter: "contrast(120%) brightness(110%)",
          },
        }}
        rounded
        src={boat.imageUrl}
        alt={boat.name}
      />
      <figcaption sx={styles}>
        <div role="complementary">
          <TimerTwoToneIcon />
          <span>{10}</span>
        </div>
        <div role="complementary">
          <FastfoodTwoToneIcon />
          <span>{boat.calories}</span>
        </div>
      </figcaption>
    </figure>
  );
};

export default BoatImage;
