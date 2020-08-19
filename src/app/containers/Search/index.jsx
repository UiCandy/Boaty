/* eslint-disable react/jsx-fragments */
/** @jsx jsx */
import { useEffect, useState, useCallback, useRef } from "react";
import { jsx } from "theme-ui";
import { Box, Flex, Text } from "rebass";

import GetBoats from "../../graphql/queries/getAllBoats";

import Wrapper from "app/components/Wrapper";
import Loader from "app/components/Loader";
import SearchInput from "app/components/SearchInput";
import BoatList from "./components/BoatList";
import Filters from "./components/Filters";

import debounce from "utils/debounce";

const Search = () => {
  const { loading, data } = GetBoats();
  const [isDisplayDataSet, setIsDisplayDataSet] = useState(false);
  const [displayData, setDisplayData] = useState([]);
  let activeFilters = useRef({
    makeYear: "",
    boatLength: "",
    search: "",
  });
  useEffect(() => {
    if (!loading && !isDisplayDataSet) {
      setDisplayData(data.boats);
      setIsDisplayDataSet(true);
    }
  }, [isDisplayDataSet, displayData, data, loading]);

  const filteredBoats = (boats, { search, makeYear, boatLength }) => {
    const nameMatch = (boat) =>
      boat.name.toLowerCase().includes(search.toLowerCase()) ||
      boat.type.toLowerCase().includes(search.toLowerCase());
    const yearMatch = (boat) =>
      makeYear === "modern" ? boat.year >= 2010 : boat.year < 2010;
    const sizeMatch = (boat) =>
      boatLength === "short" ? boat.length <= 14 : boat.length > 14;
    const res = boats.filter((boat) => {
      return (
        (!search.length || nameMatch(boat)) &&
        (!makeYear.length || yearMatch(boat)) &&
        (!boatLength.length || sizeMatch(boat))
      );
    });
    return res;
  };

  const handleFilter = (e) => {
    const { name, value } = e.target;
    activeFilters.current = {
      ...activeFilters.current,
      [name]: value,
    };

    const result = filteredBoats(data.boats, activeFilters.current);
    setDisplayData(result);
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
      <Text textAlign="right" fontWeight="bold">{`Showing ${
        displayData.length
      } of ${data && data.boats && data.boats.length} boats`}</Text>
      {/* TransitionGroup CSSTransition doesn't play well with module scoped css currently */}
      <Flex mx={-1} justifyContent="space-between">
        <Box flexDirection="column">
          <Filters handleFilter={handleFilter} resetFilter={resetFilter} />
        </Box>
        <Box width={4 / 5} p={2} pr={0}>
          <BoatList boats={displayData} />
        </Box>
      </Flex>
    </Wrapper>
  );
};

export default Search;
