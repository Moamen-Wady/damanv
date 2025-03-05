import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteChangeHandler({ setLoading, menuh }) {
  const location = useLocation();
  useLayoutEffect(() => {
    function menuHider() {
      if (window.screen.width <= 768) {
        menuh();
      }
    }
    menuHider();
  }, [location.pathname]);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
