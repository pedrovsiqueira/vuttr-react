import React, { useContext } from "react";
import { Content } from "./styles";
import { Context } from "../../../Context/Context";
import xIconSvg from "../../../assets/icons/x-icon.svg";
import {styleModal} from '../../../Context/styles'
import Modal from "react-modal";

const Card = ({ title, description, link, tags, id }) => {
  const { handleRemove, modal, setModal } = useContext(Context);

  const tag = tags.map((item) => `#${item} `);

  const body = (
    <>
      <h2>Remove tool</h2>
      <p>Are you sure you want to remove {title}?</p>
      <div className="buttons">
        <button onClick={() => setModal(false)}>Cancel</button>
        <button
          onClick={() => {
            handleRemove(id);
            setModal(false);
          }}
        >
          Yes, remove
        </button>
      </div>
    </>
  );

  Modal.setAppElement("#root");
  return (
    <Content>
      <div>
        <a href={link}>
          <h4>{title}</h4>
        </a>
        <button onClick={() => setModal(true)}>
          <img src={xIconSvg} alt="x icon" /> remove
        </button>
        <Modal isOpen={modal} style={styleModal}>
          {body}
        </Modal>
      </div>
      <p>{description}</p>
      <p>{tag}</p>
    </Content>
  );
};

export default Card;
