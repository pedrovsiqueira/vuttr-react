import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
  font-family: 'Source Sans Pro', sans-serif;
  }

  button{
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  a{
    text-decoration: none;
  }

  .full-page{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
