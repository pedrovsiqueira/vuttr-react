import React from "react";
import { Container, Content } from "./styles";

const Card = ({ title, description, tags }) => {
  return (
    <Container>
      <Content>
        <div>
          <h4>{title}</h4>
          <button>X remove</button>
        </div>
        <p>{description}</p>
        <p>{tags}</p>
      </Content>
    </Container>
  );
};

export default Card;
