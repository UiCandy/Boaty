import { gql } from "@apollo/client";

export const BOAT_ATTRIBUTES = gql`
  fragment boatInfo on Boat {
    id
    name
    type
    year
    marina
    locality
    country
    skipper
    active
    cabins
    guests
    length
    price
    imageUrl
    reviews {
      total
      score
    }
  }
`;
