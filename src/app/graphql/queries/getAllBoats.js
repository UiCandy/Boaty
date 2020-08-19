import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

import { BOAT_ATTRIBUTES } from "../fragments/boat";

export const GetBoats = gql`
  query GetBoats {
    boats: getBoats(input: { active: true }) {
      ...boatInfo
    }
  }
  ${BOAT_ATTRIBUTES}
`;

export default () => useQuery(GetBoats);
