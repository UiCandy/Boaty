import React from "react";
import { Box, Text } from "rebass";
import { Label, Radio } from "@rebass/forms";
import ClearIcon from "@material-ui/icons/Clear";

const Filters = ({ handleFilter, resetFilter }) => {
  return (
    <>
      <Box
        p={2}
        sx={{
          label: {
            cursor: "pointer",
            "&:hover": {
              color: "secondary",
            },
          },
        }}
      >
        <Box
          sx={{
            cursor: "pointer",
            border: "2px dashed #96c5dc",
            color: "highlight",
            padding: 1,
            borderRadius: 4,
            transition: "0.2s all ease-in-out",
            "&:hover": {
              borderColor: "highlight",
            },
          }}
          onClick={resetFilter}
          backgroundColor="transparent"
        >
          Clear Filters{" "}
          <ClearIcon
            fontSize="small"
            style={{ position: "relative", top: 4, float: "right" }}
          />
        </Box>

        <Text
          sx={{
            paddingTop: 3,
            borderBottom: "2px dashed #96c5dc",
            paddingBottom: 2,
            marginBottom: 3,
            fontWeight: "bold",
          }}
          fontFamily="heading"
        >
          Year
        </Text>
        <Label>
          <Radio
            name="makeYear"
            id="vintage"
            value={2009}
            onChange={handleFilter}
          />
          Vintage (Older than 2010)
        </Label>
        <Label>
          <Radio
            name="makeYear"
            id="modern"
            value={2010}
            onChange={handleFilter}
          />
          Modern (2010)
        </Label>
      </Box>
      <Box
        p={2}
        sx={{
          label: {
            cursor: "pointer",
            "&:hover": {
              color: "highlight",
            },
          },
        }}
      >
        <Text
          sx={{
            paddingTop: 3,
            borderBottom: "2px solid #96c5dc",
            paddingBottom: 2,
            marginBottom: 3,
            fontWeight: "bold",
          }}
          fontFamily="heading"
        >
          Length
        </Text>

        <Label>
          <Radio
            name="boatLength"
            id="short"
            value="14"
            onChange={handleFilter}
          />
          Short (2010)
        </Label>
        <Label>
          <Radio
            name="boatLength"
            id="long"
            value="15"
            onChange={handleFilter}
          />
          Long (Older than 2010)
        </Label>
      </Box>
    </>
  );
};

export default Filters;
