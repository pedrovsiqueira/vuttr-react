import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [tools, setTools] = useState([]);
  const [searchString, setSearchString] = useState("");
  const url = "http://localhost:3000/tools";

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
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
