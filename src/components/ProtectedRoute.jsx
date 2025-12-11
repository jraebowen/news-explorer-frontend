import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({
  isLoggedIn,
  children,
  requestLoginModal,
  isAuthenticated,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn === false && isAuthenticated === false) {
      navigate("/", { replace: true });
      requestLoginModal();
    }
  }, [isLoggedIn, navigate, requestLoginModal, isAuthenticated]);

  return isLoggedIn ? children : null;
}

export default ProtectedRoute;
