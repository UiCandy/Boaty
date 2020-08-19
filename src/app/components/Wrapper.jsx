/** @jsx jsx */
import { jsx } from "theme-ui";
import { Box } from "rebass";

const Wrapper = ({ children }) => {
  return (
    <Box
      sx={{
        flexFlow: "row wrap",
        justifyContent: "space-between",
        paddingX: 2,
      }}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
