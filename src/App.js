import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Search from "./components/Search/Search";
import Results from "./components/Results/Results";

const client = new ApolloClient({
  uri: "https://48p1r2roz4.sse.codesandbox.io",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <Search />
      <Results />
    </div>
  </ApolloProvider>
);
export default App;
