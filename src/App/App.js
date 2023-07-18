import React from "react";
import "./App.css";
import AppUi from "./AppUi";
import { ContextProvider } from "../Context/Context";

function App() {
  return (
    <ContextProvider>
      <AppUi />
    </ContextProvider>
  );
}

export default App;
