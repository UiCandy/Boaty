import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "theme-ui";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { theme } from "./theme";

import App from "./App";
import "app/assets/fonts.css";

import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://sls-sandbox.zizoo.com/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          getBoats: {
            merge(existing = [], incoming = []) {
              return incoming;
            },
          },
        },
      },
    },
  }),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
