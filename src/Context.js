import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const Context = createContext({});

const ContextProvider = ({ children }) => {
  const [tools, SetTools] = useState([]);
  const url = "http://localhost:3000/tools";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => SetTools(resp.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(tools);

  return <Context.Provider value={{tools}}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
