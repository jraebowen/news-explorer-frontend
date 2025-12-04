import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

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
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal.jsx";
import ProtectedRoute from "../ProtectedRoute";

//utils imports
import { searchArticles } from "../../utils/newsApi";
import { API_KEY } from "../../utils/constants";
import * as auth from "../../utils/auth";
import {
  getUserInfo,
  getArticles,
  saveArticle,
  deleteArticle,
} from "../../utils/api.js";
import { setToken, getToken, removeToken } from "../../utils/token";

//context imports
import LoggedInContext from "../../contexts/LoggedInContext.js";
import CurrentUserContext from "../../contexts/CurrentUserContext.js";

function App() {
  //login states
  const [currentUser, setCurrentUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [activeModal, setActiveModal] = useState("");

  const [existingEmail, setExistingEmail] = useState(false);

  //article rendering states
  const [articles, setArticles] = useState([]);

  const [query, setQuery] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  const [visibleArticles, setVisibleArticles] = useState(3);

  const [isLoading, setIsLoading] = useState(false);

  const [savedArticles, setSavedArticles] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const [hoveredCard, setHoveredCard] = useState({});

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

  const handleConfirmationModal = () => {
    setActiveModal("confirmation-modal");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  //article functions
  const handleArticleSave = (article, query) => {
    saveArticle(article, query)
      .then((savedArticle) => {
        setSavedArticles((prev) => [...prev, savedArticle]);
      })
      .catch((err) => {
        console.error("Failed to save article: ", err);
      });
  };

  const handleArticleDelete = (article) => {
    deleteArticle(article._id)
      .then(() => {
        setSavedArticles((prev) =>
          prev.filter((item) => item._id !== article._id)
        );
        setHoveredCard((prev) => {
          const newHovered = { ...prev };
          delete newHovered[article._id];
          return newHovered;
        });
      })
      .catch((err) => {
        console.error("Failed to delete article: ", err);
      });
  };

  const handleArticleHover = (articleUrl, isHovering) => {
    setHoveredCard((prev) => ({ ...prev, [articleUrl]: isHovering }));
  };

  //get saved-news articles
  useEffect(() => {
    if (!isLoggedIn) return;
    getArticles()
      .then((savedArticles) => {
        setSavedArticles(savedArticles);
      })
      .catch((error) => {
        console.error("Failed to load saved articles:", error);
      });
  }, [isLoggedIn]);

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
    getUserInfo()
      .then((user) => {
        setIsLoggedIn(true);
        setCurrentUser(user);
      })
      .catch((err) => {
        console.error("Failed to find user: ", err);
      });
  }, []);

  //registration function
  const handleRegistration = (newUser) => {
    return auth
      .signUp(newUser.email, newUser.password, newUser.name)
      .then(() => {
        handleModalClose();
        handleConfirmationModal();
      })
      .catch((err) => {
        if (err.type === "email-exists") {
          setExistingEmail(true);
        } else {
          console.error(err);
        }
      });
  };

  //login function
  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    return auth
      .signIn(email, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          return getUserInfo();
        }
      })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        handleModalClose();
      })
      .catch(console.error);
  };

  //logout function
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    navigate("/");
    setIsLoggedIn(false);
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
                        hoveredCard={hoveredCard}
                        handleArticleHover={handleArticleHover}
                      ></Main>
                    )}
                    <About />
                  </>
                }
              />
              <Route
                path="/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <SavedNews
                      onLogout={handleLogout}
                      toggleMobileMenu={toggleMobileMenu}
                      isMobileMenuOpened={isMobileMenuOpened}
                      savedArticles={savedArticles}
                      onArticleSave={handleArticleSave}
                      onArticleDelete={handleArticleDelete}
                      query={query}
                      hoveredCard={hoveredCard}
                      handleArticleHover={handleArticleHover}
                    ></SavedNews>
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/saved-news" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
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
            setExistingEmail={setExistingEmail}
            existingEmail={existingEmail}
          ></RegisterModal>
          <ConfirmationModal
            isOpen={activeModal === "confirmation-modal"}
            onClose={handleModalClose}
            onLogin={handleLoginModal}
          ></ConfirmationModal>
        </div>
      </LoggedInContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
