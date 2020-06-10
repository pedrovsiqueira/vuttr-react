import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalAdd, setModalAdd] = useState(false);

  const [tools, setTools] = useState([]);
  const [searchString, setSearchString] = useState("");
  const url = "http://localhost:3000/tools";

  const handleAdd = (toolRefs) => {
    const { title, link, description, tags } = toolRefs;
    const formattedTags = tags.current.value.split(' ')

    const newTool = {
      title: title.current.value,
      link: link.current.value,
      description: description.current.value,
      tags: formattedTags
    }

    const header = {
      "Content-Type": "application/json"
    }

    axios.post(url, newTool, {headers: header});
  }

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setTools(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleRemove = (id) => {
    setTools((prevTools) => prevTools.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider
      value={{
        tools,
        handleRemove,
        setTools,
        setSearchString,
        searchString,
        modal,
        setModal,
        modalAdd,
        setModalAdd,
        handleAdd
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
