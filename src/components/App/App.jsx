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
import RegisterModal from "../RegisterModal/RegisterModal";

//utils imports
import { searchArticles } from "../../utils/newsApi";
import { API_KEY } from "../../utils/constants";

//context imports
import LoggedInContext from "../../contexts/LoggedInContext";

function App() {
  //login states
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [activeModal, setActiveModal] = useState("");

  //article rendering states
  const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  const [visibleArticles, setVisibleArticles] = useState(3);

  const [isLoading, setIsLoading] = useState(false);

  //login/logout functions
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  //modal functions
  const toggleMobileMenu = () => {
    setIsMobileMenuOpened((prev) => !prev);
  };

  const handleLoginModal = () => {
    setActiveModal("login-modal");
  };

  const handleRegisterModal = () => {
    setActiveModal("register-modal");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  //api functions
  const handleSearch = (query) => {
    if (!query) return;
    setHasSearched(true);
    setIsLoading(true);
    searchArticles(query, API_KEY)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error("Failed to search articles: ", err);
      })
      .finally(() => setIsLoading(false));
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
                    query={query}
                    setQuery={setQuery}
                    onSearch={handleSearch}
                  ></Header>
                  {hasSearched && (
                    <Main
                      articles={articles}
                      visibleArticles={visibleArticles}
                      setVisibleArticles={setVisibleArticles}
                      onLoad={isLoading}
                    ></Main>
                  )}
                  <About />
                </>
              }
            />
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
          onRegister={handleRegisterModal}
        ></LoginModal>
        <RegisterModal
          isOpen={activeModal === "register-modal"}
          onClose={handleModalClose}
          onLogin={handleLoginModal}
        ></RegisterModal>
      </div>
    </LoggedInContext.Provider>
  );
}

export default App;
