/** @jsx jsx */
import { jsx } from "theme-ui";
import { Input } from "@rebass/forms";

const style = {
  width: "100%",
  flexGrow: 1,
  marginTop: 4,
  marginBottom: 4,
  outline: "none",
  padding: 2,
  fontSize: 4,
  fontFamily: "body",
  border: "2px solid #444",
  borderRadius: 4,
  transition: "0.3s all ease-in-out",
  "&:focus": {
    borderColor: "primary",
  },
};

const SearchInput = ({ handleChange }) => {
  return (
    <Input
      sx={style}
      type="search"
      name="search"
      placeholder="Search for Luxurious Boats..."
      onChange={handleChange}
    />
  );
};

export default SearchInput;
