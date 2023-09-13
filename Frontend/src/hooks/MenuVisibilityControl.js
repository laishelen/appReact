import { useLocation } from "react-router-dom";

const MenuVisibilityControl = ({ showMenuRoutes, children }) => {
  const location = useLocation();
  const showMenu = showMenuRoutes.includes(location.pathname);

  return showMenu ? children : null;
};

export default MenuVisibilityControl;
