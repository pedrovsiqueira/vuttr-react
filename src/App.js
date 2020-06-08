import React from "react";
import GlobalStyle from "./styles/global";

import Header from "./components/Header/Header";
import MainContent from "./components/MaintContent/MainContent";

const App = () => (
  <>
    <Header />
    <MainContent />
    <GlobalStyle />
  </>
);

export default App;
