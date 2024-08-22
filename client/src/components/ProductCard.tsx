import { useContext }      from "react";
import { useNavigate }     from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductsContext } from "../context/ProductsContext";
import {
  faArrowsRotate,
  faBriefcaseMedical,
  faCalendar,
  faMoneyBill,
  faTableCellsLarge,
  faTrash
} from "@fortawesome/free-solid-svg-icons";

import IconLabel from "./IconLabel";

import '../assets/styles/ProductCard.css';
import '../assets/styles/themes.css';

interface ProductCardProps {
  product_id: number;
  name:       string;
  date:       string;
  price:      number | null;
  condition:  string | null;
  category:   string;

  theme:      string;
  isPreview:  boolean;
};

const ProductCard = ({product_id, name, date, price, condition, category, isPreview=false, theme="default-theme"}: ProductCardProps) => {
  const navigate = useNavigate();

  const { products, setProducts, setTheme } = useContext(ProductsContext);

  /*
    Display cents

    TODO: disable if currency does not have fractional
   */
  if (price) price /= 100;

  const handleDelete = (pid: number) => {
    if (isPreview) return;

    fetch(`http://localhost:3006/api/v1/products/${pid}`, {
      method: "DELETE"
    })
    .then(val => setProducts(products.filter(product => product.id !== pid)))
    .catch(err => console.error(err));
  };

  const handleUpdate = (pid: number) => {
    if (isPreview) return;

    navigate(`/product/${pid}/update`);
  };

  const getIconColor = (icon:string) => {
    if (theme === "default-theme") {
      switch(icon) {
        case "faCalendar":         return "#9C90AD";
        case "faMoneyBill":        return "#B2B29E";
        case "faBriefcaseMedical": return "#B98C8C";
        case "faTableCellsLarge":  return "#BDA995";
        case "faArrowsRotate":     return "#9FAC8D";
        case "faTrash":            return "#B46161";
        default: return "#000";
      }
    }
    else if (theme === "catppuccin-mocha") {
      switch(icon) {
        case "faCalendar":         return "#CBA6F7";
        case "faMoneyBill":        return "#94E2D5";
        case "faBriefcaseMedical": return "#EBA0AC";
        case "faTableCellsLarge":  return "#FAB387";
        case "faArrowsRotate":     return "#A6E3A1";
        case "faTrash":            return "#F38BA8";
        default: return "#000";
      }
    }
    else if (theme === "ayu-dark") {
      switch(icon) {
        case "faCalendar":         return "#D2A6FF";
        case "faMoneyBill":        return "#95E6CB";
        case "faBriefcaseMedical": return "#F07178";
        case "faTableCellsLarge":  return "#E6B673";
        case "faArrowsRotate":     return "#7FD962";
        case "faTrash":            return "#D95757";
        default: return "#000";
      }
    }

    return "#000";
  };

  const themeSetHandling = () => {
    if (!isPreview) return;

    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <div id="productcard-container" className={theme} onClick={themeSetHandling}>
      <span id="productcard-name" className={theme}>{name}</span>

      <div id="productcard-details-container">
        <IconLabel icon={faCalendar} data={date} color={getIconColor("faCalendar")} theme={theme} />
        {
          // TODO: remove fractional if currency doesn't use it
          price !== null &&
          <IconLabel icon={faMoneyBill} data={parseFloat(price?.toString()).toFixed(2)} color={getIconColor("faMoneyBill")} theme={theme} />
        }
        {
          condition &&
          <IconLabel icon={faBriefcaseMedical} data={condition} color={getIconColor("faBriefcaseMedical")} theme={theme} />
        }
        <IconLabel icon={faTableCellsLarge} data={category} color={getIconColor("faTableCellsLarge")} theme={theme} />
      </div>

      <div id="productcard-actions-container">
        <FontAwesomeIcon icon={faArrowsRotate} className="productcard-actions-icon spin-grow" color={getIconColor("faArrowsRotate")} onClick={() => handleUpdate(product_id)} />
        <FontAwesomeIcon icon={faTrash} className="productcard-actions-icon shake" color={getIconColor("faTrash")} onClick={() => handleDelete(product_id)} />
      </div>
    </div>
  )
};

export default ProductCard;
