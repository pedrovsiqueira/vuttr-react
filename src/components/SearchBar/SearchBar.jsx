import React, { useContext, useRef } from "react";
import { Content } from "./styles";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Context } from "../../Context";

const SearchBar = () => {
  const searchRef = useRef(null);
  const checkedRef = useRef(null);
  const { setSearchString } = useContext(Context);

  return (
    <Content>
      <div className="search-bar">
        <div className="search-input">
          <img src={searchIcon} alt="search icon" />
          <input
            ref={searchRef}
            className="search"
            placeholder="search"
            type="search"
            name="search"
            id="search"
            onChange={() => setSearchString(searchRef.current.value)}
          />
        </div>
        <input
          ref={checkedRef}
          className="checkbox-input"
          type="checkbox"
          name="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox">search in tags only</label>
      </div>
      <button>add</button>
    </Content>
  );
};

export default SearchBar;
