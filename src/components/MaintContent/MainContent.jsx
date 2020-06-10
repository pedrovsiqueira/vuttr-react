import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context/Context";

const MainContent = () => {
  const { tools, searchString } = useContext(Context);

  return tools
    .filter((item) =>
      item.title.toLowerCase().includes(searchString.toLowerCase())
    )
    .map((item) => <Card key={item.id} {...item} />);
};

export default MainContent;
