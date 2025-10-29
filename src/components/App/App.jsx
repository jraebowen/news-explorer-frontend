import { useState } from "react";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
