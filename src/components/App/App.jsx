import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";

//context imports
import LoggedInContext from "../../contexts/LoggedInContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <LoggedInContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <Header onLogout={handleLogout}></Header>
          <Routes>
            <Route path="/" element={<Main></Main>} />
          </Routes>
          <About></About>
          <Footer></Footer>
        </div>
      </div>
    </LoggedInContext.Provider>
  );
}

export default App;
