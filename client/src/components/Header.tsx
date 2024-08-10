import { faGear, faPlus }  from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo_lt from '../assets/imgs/logo-light.png';
import '../assets/styles/Header.css';

const Header = () => {
  return (
    <div id="header-container">
      <header>
        <div id="header-logo-container">
          <img src={logo_lt} alt="Reseeit logo" />
          <span id="header-title">Resseit</span>
        </div>

        <div id="header-actions-container">
          <button>
            <FontAwesomeIcon icon={faPlus} className="btn-icon" />
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
