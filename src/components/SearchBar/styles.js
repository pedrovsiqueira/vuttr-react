import styled from "styled-components";

export const Content = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;

  .search-input {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    display: flex;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ebeaed;
    width: 100px;
  }

  .checkbox-input {
    margin: 0 10px;
  }

  .search-bar {
    display: flex;
    align-items: center;
  }

  .search {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    width: 70px;
    height: 25px;
    border: none;
    padding-left: 10px;

    &::placeholder {
      color: #b1adb9;
      letter-spacing: 0.4px;
      font-size: 13px;
    }
  }

  img {
    margin-left: 5px;
    height: 13px;
    width: 13px;
  }

  button {
    width: 100px;
    border: 1px solid #ebeaed;
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border-radius: 5px;
  }
`;
