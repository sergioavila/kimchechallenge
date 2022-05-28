import React from "react";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import Search from "./components/Search/Search";
import Results from "./components/Results/Results";
import About from "./components/About/About";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="app">
      <Search />
      <Results>asd</Results>
      <About />
    </div>
  </ApolloProvider>
);
export default App;
