import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function usePreviousPath() {
  const location = useLocation();
  const prevPath = useRef();
  const currentPath = useRef(location.pathname);

  useEffect(() => {
    prevPath.current = currentPath.current;
    currentPath.current = location.pathname;
    console.log(prevPath.current === '/project')
    console.log(prevPath.current)
  }, [location.pathname]);

  return prevPath.current;
}

export default usePreviousPath;