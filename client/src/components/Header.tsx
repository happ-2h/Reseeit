import { useLocation, useNavigate } from "react-router-dom";
import { faHouse, faPlus, faSwatchbook }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo_lt from '../assets/imgs/logo-light.png';
import '../assets/styles/Header.css';
import '../assets/styles/themes.css';

const Header = () => {
  const navigate     = useNavigate();
  const { pathname } = useLocation();

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
    <div id="header-container" className="default-theme">
      <header>
        <div id="header-logo-container">
          <img src={logo_lt} alt="Reseeit logo" />
          <span id="header-title" onClick={() => navigate('/')}>Resseit</span>
        </div>

        <div id="header-actions-container" className="default-theme">
          <button onClick={handleActionAddProduct}>
            <FontAwesomeIcon icon={
              pathname === '/' ? faPlus : faHouse
            } className="btn-icon default-theme" />
          </button>
          <button onClick={handleActionThemeChooser}>
            <FontAwesomeIcon icon={faSwatchbook} className="btn-icon default-theme" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
