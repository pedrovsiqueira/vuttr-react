import React, { useContext } from "react";
import { Content } from "./styles";
import { Context } from "../../../Context/Context";
import xIconSvg from "../../../assets/icons/x-icon.svg";

import Modali, { useModali } from "modali";

const Card = ({ title, description, link, tags, id }) => {
  const { handleRemove } = useContext(Context);

  const [exampleModal, toggleExampleModal] = useModali();

  const tag = tags.map((item) => `#${item} `);

  const body = (
    <>
      <h2>Remove tool</h2>
      <p>Are you sure you want to remove {title}?</p>
      <div className="buttons">
        <button onClick={toggleExampleModal}>Cancel</button>
        <button
          onClick={() => {
            handleRemove(id);
          }}
        >
          Yes, remove
        </button>
      </div>
    </>
  );

  return (
    <Content>
      <div>
        <a href={link}>
          <h4>{title}</h4>
        </a>
        <button onClick={toggleExampleModal}>
          <img src={xIconSvg} alt="x icon" /> remove
        </button>
        <Modali.Modal {...exampleModal}>{body}</Modali.Modal>
      </div>
      <p>{description}</p>
      <p>{tag}</p>
    </Content>
  );
};

export default Card;
