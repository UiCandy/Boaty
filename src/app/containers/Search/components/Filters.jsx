import React, { useRef } from "react";
import { Box, Text, Button } from "rebass";
import { Label, Radio } from "@rebass/forms";
import ClearIcon from "@material-ui/icons/Clear";

export const filteredBoats = (boats, searchTerm, fieldName) => {
  if (!searchTerm.length) {
    return boats;
  }
  console.log(boats, searchTerm, fieldName);
  return boats.filter((boat) => {
    const { name, year, length } = boat;
    switch (fieldName) {
      case "search":
        return name.toLowerCase().includes(searchTerm.toLowerCase());

      case "makeYear":
        return year >= searchTerm;

      case "boatLength":
        return length >= searchTerm;

      default:
        return boat;
    }
  });
};

const Filters = ({ handleFilter, resetFilter }) => {
  return (
    <>
      <Box p={2}>
        <Box
          sx={{
            cursor: "pointer",
            border: "1px dashed #EAD94C",
            color: "#DD7373",
            padding: 1,
            borderRadius: 4,
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
            borderBottom: "2px solid #EAD94C",
            paddingBottom: 2,
            marginBottom: 3,
            color: "#2b193d",
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
      <Box p={2}>
        <Text
          sx={{
            paddingTop: 3,
            borderBottom: "2px solid #EAD94C",
            paddingBottom: 2,
            marginBottom: 3,
            color: "#2b193d",
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
