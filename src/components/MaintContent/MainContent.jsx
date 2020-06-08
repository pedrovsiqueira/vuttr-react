import React, { useContext } from "react";
import Card from "./Card/Card";
import { Context } from "../../Context";

const MainContent = () => {
  const { tools } = useContext(Context);

  return tools.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      link={item.link}
      description={item.description}
      tags={item.tags}
    />
  ));
};

export default MainContent;
