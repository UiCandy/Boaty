/** @jsx jsx */
import { Flex, Box, Heading, Text, Button } from "rebass";
import { jsx } from "theme-ui";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import StarRateIcon from "@material-ui/icons/StarRate";

import Slider from "app/components/Slider";

const headingStyle = {
  fontSize: [2, 3, 4],
  color: "primary",
  padding: ["4px 0 4px 0", null, "0 0 4px 0"],
  marginY: 0,
  fontWeight: 700,
};

const detailsStyle = {
  position: "relative",
  marginTop: 20,
  paddingRight: 4,
  cursor: "pointer",
  transition: "0.2s all ease-in-out",
  "&:hover": {
    background: "secondary",
  },
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0) + s.slice(1).toLowerCase().replace(/_/g, " ");
};

const BoatCard = ({ boat }) => {
  return (
    <Flex
      sx={{
        flexDirection: ["column", "row", "row"],
        backgroundColor: "#fff",
        marginBottom: 4,
        width: "100%",
        boxShadow: "0 0px 8px #dedede",
        borderRadius: 4,
        div: {
          borderRadius: "4px 0 0 4px",
        },
      }}
    >
      <Box width={["100%", "25%", "50%"]}>
        <Slider
          images={[
            boat.imageUrl,
            "https://images.unsplash.com/photo-1520255870062-bd79d3865de7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          ]}
        />
      </Box>
      <Box
        width={["100%", "75%", "50%"]}
        role="contentinfo"
        sx={{
          padding: 3,
          display: "flex",
          flexDirection: "column",
          alignContent: "space-between",
          minHeight: "100%",
          justifyContent: "space-evenly",
        }}
      >
        <Flex justifyContent="space-between">
          <Box>
            <Heading sx={headingStyle}>
              {boat.name} {boat.length}m ({boat.year})
            </Heading>
            <Heading fontSize={4} color="highlight" fontWeight={400}>
              {capitalize(boat.type)}
            </Heading>
          </Box>
          <Box>
            <Heading sx={headingStyle}>€{boat.price}/Day</Heading>
          </Box>
        </Flex>

        <Flex justifyContent="space-between" mt={[2, 3, 4]}>
          <Box
            sx={{
              "> div": {
                p: ["4px 0", null, 1],
              },
            }}
          >
            <Text>Skipper: {capitalize(boat.skipper)}</Text>
            <Text>Cabins: {boat.cabins}</Text>
            <Text>Guests: {boat.guests}</Text>
          </Box>
          <Box>
            {!!boat.reviews.score && (
              <Box textAlign="right">
                {[...Array(boat.reviews.score)].map((e, i) => (
                  <StarRateIcon style={{ color: "#ffe24b" }} key={i} />
                ))}
                <Text
                  display="inline"
                  sx={{
                    top: -6,
                    position: "relative",
                    fontSize: 1,
                  }}
                >
                  ({boat.reviews.total})
                </Text>
              </Box>
            )}
            <Text textAlign="right">Length: {boat.length}m</Text>
            <Text textAlign="right" color="primary">
              Instant booking
            </Text>
            <Button sx={detailsStyle}>
              View Details{" "}
              <ArrowRightIcon
                style={{ position: "absolute", top: 9.5, right: 4 }}
              />
            </Button>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default BoatCard;
