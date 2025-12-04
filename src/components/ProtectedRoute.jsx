import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, requestLoginModal }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/news-explorer-frontend/", { replace: true });
      requestLoginModal();
    }
  }, [isLoggedIn]);

  return isLoggedIn ? children : null;
}

export default ProtectedRoute;
