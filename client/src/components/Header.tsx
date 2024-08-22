import { useContext }               from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  faHouse,
  faPlus,
  faSwatchbook
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ProductsContext } from "../context/ProductsContext";

import logo_lt from '../assets/imgs/logo-light.png';
import '../assets/styles/Header.css';
import '../assets/styles/themes.css';

const Header = () => {
  const navigate     = useNavigate();
  const { pathname } = useLocation();
  const { theme } = useContext(ProductsContext);

  const handleActionAddProduct = () => {
    switch(pathname) {
      case '/': navigate('/addproduct'); break;
      default:  navigate('/'); break;
    }
  };

  const handleActionThemeChooser = () => {
    navigate('/themeChooser');
  };

  return (
    <div id="header-container" className={theme}>
      <header>
        <div id="header-logo-container">
          <img src={logo_lt} alt="Reseeit logo" />
          <span id="header-title" onClick={() => navigate('/')}>Resseit</span>
        </div>

        <div id="header-actions-container" className={theme}>
          <button onClick={handleActionAddProduct}>
            <FontAwesomeIcon icon={
              pathname === '/' ? faPlus : faHouse
            } className={`btn-icon ${theme}`} />
          </button>
          <button onClick={handleActionThemeChooser}>
            <FontAwesomeIcon icon={faSwatchbook} className={`btn-icon ${theme}`} />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
