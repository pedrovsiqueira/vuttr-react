import React, { useContext } from "react";
import { Content } from "./styles";
import { Context } from "../../../Context";
import xIconSvg from "../../../assets/icons/x-icon.svg";

const Card = ({ title, description, link, tags, id }) => {
  
  const { handleRemove } = useContext(Context)
  
  const tag = tags.map((item) => `#${item} `);

  return (
    <Content>
      <div>
        <a href={link}>
          <h4>{title}</h4>
        </a>
        <button onClick={() => handleRemove(id)}>
          <img src={xIconSvg} alt="x icon" /> remove
        </button>
      </div>
      <p>{description}</p>
      <p>{tag}</p>
    </Content>
  );
};

export default Card;
