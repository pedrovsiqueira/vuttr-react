import styled from "styled-components";

export const Content = styled.div`
  width: 600px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 2px solid #333;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    &:nth-child(2) {
      margin-bottom: 10px;
    }

    &:nth-child(3) {
      font-weight: 600;
    }
  }

  img {
    height: 10px;
    width: 10px;
    filter: brightness(0%);
  }


`;
