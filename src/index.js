import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Context";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
    <ContextProvider>
      <App />
    </ContextProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
