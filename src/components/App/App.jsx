import { useState } from "react";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
