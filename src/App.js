import React from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header/Header";
import MainContent from "./components/MaintContent/MainContent";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => (
  <div className="full-page">
    <div>
      <Header />
      <SearchBar />
      <MainContent />
      <GlobalStyle />
    </div>
  </div>
);

export default App;
