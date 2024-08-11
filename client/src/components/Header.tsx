import { useLocation, useNavigate } from "react-router-dom";
import { faGear, faHouse, faPlus }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo_lt from '../assets/imgs/logo-light.png';
import '../assets/styles/Header.css';

const Header = () => {
  const navigate     = useNavigate();
  const { pathname } = useLocation();

  const handleAction = () => {
    switch(pathname) {
      case '/': navigate('/addproduct'); break;
      default:  navigate('/'); break;
    }
  };

  return (
    <div id="header-container">
      <header>
        <div id="header-logo-container">
          <img src={logo_lt} alt="Reseeit logo" />
          <span id="header-title" onClick={() => navigate('/')}>Resseit</span>
        </div>

        <div id="header-actions-container">
          <button onClick={handleAction}>
            <FontAwesomeIcon icon={
              pathname === '/' ? faPlus : faHouse
            } className="btn-icon" />
          </button>
          <button>
            <FontAwesomeIcon icon={faGear} className="btn-icon" />
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
