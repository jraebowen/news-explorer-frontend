import { useState } from "react";
import { Routes, Route } from "react-router-dom";

//css import
import "./App.css";

//component imports
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";

//context imports
import LoggedInContext from "../../contexts/LoggedInContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [activeModal, setActiveModal] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handleLoginModal = () => {
    setActiveModal("login-modal");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  return (
    <LoggedInContext.Provider value={{ isLoggedIn }}>
      <div className="page">
        <div className="page__content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header
                    onLogout={handleLogout}
                    toggleMobileMenu={toggleMobileMenu}
                    isMobileMenuOpened={isMobileMenuOpened}
                    onLogin={handleLoginModal}
                    activeModal={activeModal}
                  ></Header>
                  <Main></Main>
                  <About />
                </>
              }
            />
          </Routes>
          <Routes>
            <Route
              path="/saved-news"
              element={
                <SavedNews
                  onLogout={handleLogout}
                  toggleMobileMenu={toggleMobileMenu}
                  isMobileMenuOpened={isMobileMenuOpened}
                ></SavedNews>
              }
            />
          </Routes>
          <Footer></Footer>
        </div>
        <LoginModal
          isOpen={activeModal === "login-modal"}
          onClose={handleModalClose}
        ></LoginModal>
      </div>
    </LoggedInContext.Provider>
  );
}

export default App;
