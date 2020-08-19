import React from "react";
import { Link } from "react-router-dom";
import { Box, Heading, Image } from "rebass";

import bg from "app/assets/photo.jpeg";
const Home = () => {
  return (
    <Box
      backgroundImage={bg}
      p={0}
      sx={{
        maxHeight: "40vh",
        maxWidth: "100%",
        position: "relative",
        a: { color: "#DD7373" },
      }}
    >
      <Box className="App-header">
        <Image src={bg} className="App-logo" alt="hero" />
        <Box
          sx={{
            color: "#fff",
            position: "absolute",
            fontSize: 5,
            top: "30vh",
            left: 24,
          }}
        >
          <Heading fontSize={7} sx={{ textShadow: "0 0 3px #888" }}>
            Welcome to Zizoo
          </Heading>
          <Link className="App-link" to="/search">
            Book your next adventure!
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
