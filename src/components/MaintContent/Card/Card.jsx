import React from "react";
import { Container, Content } from "./styles";

const Card = ({ title, description, link, tags }) => {
  return (
    <Container>
      <Content>
        <div>
          <a href={link}>
            <h4>{title}</h4>
          </a>
          <button>X remove</button>
        </div>
        <p>{description}</p>
        <p>{tags}</p>
      </Content>
    </Container>
  );
};

export default Card;
