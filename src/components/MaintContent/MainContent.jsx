import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context/Context";

const MainContent = () => {
  const { tools } = useContext(Context);

  return tools.map((item) => <Card key={item.id} {...item} />);
};

export default MainContent;
