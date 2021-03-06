import React, { useContext, useRef } from "react";
import { Content } from "./styles";
import searchIcon from "../../assets/icons/search-icon.svg";
import { Context } from "../../Context/Context";
import Modali, { useModali } from "modali";

const SearchBar = () => {
  const searchRef = useRef(null);
  const checkedRef = useRef(null);
  const titleToolRef = useRef(null);
  const linkToolRef = useRef(null);
  const descriptionToolRef = useRef(null);
  const tagsToolRef = useRef(null);

  const [exampleModal, toggleExampleModal] = useModali();

  const toolRefs = {
    title: titleToolRef,
    link: linkToolRef,
    description: descriptionToolRef,
    tags: tagsToolRef,
  };

  const {
    setSearchString,
    handleAdd,
    handleCheckBoxClick,
  } = useContext(Context);

  const body = (
    <>
      <form>
        <h2>Add new tool</h2>
        <label htmlFor="name">Tool Name</label>
        <input ref={toolRefs.title} type="text" id="name" />
        <label htmlFor="link">Tool Link</label>
        <input ref={toolRefs.link} type="text" id="link" />
        <label htmlFor="description">Tool description</label>
        <textarea ref={toolRefs.description} id="description" />
        <label htmlFor="tags">Tags</label>
        <input ref={toolRefs.tags} type="text" id="tags" />
        <button onClick={() => handleAdd(toolRefs)}>Add tool</button>
      </form>
    </>
  );

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
          onClick={() => handleCheckBoxClick(checkedRef)}
        />
        <label htmlFor="checkbox">search in tags only</label>
      </div>
      <button onClick={toggleExampleModal}>add</button>
      <Modali.Modal {...exampleModal}>{body}</Modali.Modal>
    </Content>
  );
};

export default SearchBar;
