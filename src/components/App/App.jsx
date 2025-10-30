import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header isLoggedIn={isLoggedIn} onLogout={handleLogout}></Header>
        <Routes>
          <Route path="/" element={<Main></Main>} />
        </Routes>
        <About></About>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
