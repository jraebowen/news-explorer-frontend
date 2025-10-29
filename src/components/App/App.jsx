import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>} />
        </Routes>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
