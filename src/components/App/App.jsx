import { useEffect, useState } from "react";
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
import * as auth from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";

//context imports
import LoggedInContext from "../../contexts/LoggedInContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

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

  const [savedArticles, setSavedArticles] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

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

  //article functions
  const handleArticleSave = (item, query) => {
    setSavedArticles((prev) => [...prev, { ...item, keyword: query }]);
  };

  const handleArticleDelete = (item) => {
    setSavedArticles((prev) => prev.filter((a) => a.url !== item.url));
  };

  //api functions
  const handleSearch = (query) => {
    if (!query) {
      setErrorMessage("Please enter a keyword");
      return;
    }
    setHasSearched(true);
    setIsLoading(true);
    setErrorMessage("");
    searchArticles(query, API_KEY)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        );
        console.error("Failed to search articles: ", err);
      })
      .finally(() => setIsLoading(false));
  };

  //checking for token on page load
  useEffect(() => {
    const jwt = getToken();
    if (!jwt) {
      return;
    }
    auth.checkToken(jwt).then(({ username, email }) => {
      setIsLoggedIn(true);
      setCurrentUser({ username, email });
    });
  }, []);

  //registration function
  const handleRegistration = (newUser) => {
    return auth
      .signUp(newUser.email, newUser.password, newUser.username)
      .then((user) => {
        return auth.signIn(newUser.email, newUser.password);
      })
      .then((res) => {
        if (res.token) {
          setToken(res.token);
        }
        return auth.checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData.user);
        setIsLoggedIn(true);
        handleModalClose();
      })
      .catch(console.error);
  };

  //login function
  const handleLogin = (email, password) => {
    if (!email || !password) {
      return;
    }
    const makeRequest = () => {
      return auth.signIn(email, password).then((data) => {
        if (data.jwt) {
          setToken(data.jwt);
        }
      });
    };
    handleSubmit(makeRequest);
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
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
                      errorMessage={errorMessage}
                    ></Header>
                    {hasSearched && (
                      <Main
                        articles={articles}
                        visibleArticles={visibleArticles}
                        setVisibleArticles={setVisibleArticles}
                        onLoad={isLoading}
                        savedArticles={savedArticles}
                        onArticleSave={handleArticleSave}
                        onArticleDelete={handleArticleDelete}
                        query={query}
                        errorMessage={errorMessage}
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
                    savedArticles={savedArticles}
                    onArticleSave={handleArticleSave}
                    onArticleDelete={handleArticleDelete}
                    query={query}
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
            handleLogin={handleLogin}
          ></LoginModal>
          <RegisterModal
            isOpen={activeModal === "register-modal"}
            onClose={handleModalClose}
            onLogin={handleLoginModal}
            handleRegistration={handleRegistration}
          ></RegisterModal>
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
