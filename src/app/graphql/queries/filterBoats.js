import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";

import { GetBoats as query } from "./getAllBoats";

export const mutation = gql`
  mutation filterBoats($filter: String!) {
    filterBoats(filter: $filter) @client
  }
`;

export default () => {
  let [filterBoats] = useMutation(mutation);

  return (filter) => {
    return filterBoats({
      variables: { filter },
      update: (cache) => {
        const data = cache.readQuery({
          query,
        });

        const dataClone = {
          boats: data.boats.filter((boat) =>
            boat.name.toLowerCase().includes(filter.toLowerCase())
          ),
          allBoats: [...data.boats],
        };

        cache.writeQuery({
          query,
          data: dataClone,
        });
      },
    }).catch((res) => {
      const errors = res.graphQLErrors.map((error) => {
        return error.message;
      });
      console.log(errors);
    });
  };
};
