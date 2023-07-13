import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import PageContextProvider from "./contexts/PageContext/PageContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </BrowserRouter>
);
