/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { useEffect, useState, useCallback } from "react";
import { jsx } from "theme-ui";
import { Box, Flex, Text } from "rebass";

import GetBoats from "../../graphql/queries/getAllBoats";

import Wrapper from "app/components/Wrapper";
import Loader from "app/components/Loader";
import SearchInput from "app/components/SearchInput";
import BoatList from "./components/BoatList";
import Filters, { filteredBoats } from "./components/Filters";

import debounce from "utils/debounce";

const Search = () => {
  const { loading, data } = GetBoats();
  const [isDisplayDataSet, setIsDisplayDataSet] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  useEffect(() => {
    if (!loading && !isDisplayDataSet) {
      setDisplayData(data.boats);
      setIsDisplayDataSet(true);
    }
  }, [isDisplayDataSet, displayData, data, loading]);

  const handleFilter = (e) => {
    const { name, value } = e.target;
    if (!value.length) {
      setDisplayData(data.boats);
    }
    setDisplayData(filteredBoats(data.boats, value, name));
  };

  const resetFilter = () => {
    setDisplayData(data.boats);
    document
      .getElementsByName("makeYear")
      .forEach((radio) => (radio.checked = false));
    document
      .getElementsByName("boatLength")
      .forEach((radio) => (radio.checked = false));
    document.getElementsByName("search")[0].value = "";
  };

  // Since the debounce func will be created on every render we use the useCallback hook
  // to persist the same func
  const debouncedChange = useCallback(debounce(handleFilter, 200), [data]);

  return (
    <Wrapper>
      <Loader loading={loading} />
      <SearchInput handleChange={debouncedChange} />
      <Text textAlign="right" fontWeight="bold">{`${displayData.length} of ${
        data && data.boats && data.boats.length
      }`}</Text>
      {/* TransitionGroup CSSTransition doesn't play well with module scoped css currently */}
      <Flex mx={0}>
        <Box flexDirection="column">
          <Filters handleFilter={handleFilter} resetFilter={resetFilter} />
        </Box>
        <Box width={4 / 5} p={2}>
          <BoatList boats={displayData} />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Search;
