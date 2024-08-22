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
};

const ProductCard = ({product_id, name, date, price, condition, category, theme="default-theme"}: ProductCardProps) => {
  const navigate = useNavigate();

  const { products, setProducts } = useContext(ProductsContext);

  /*
    Display cents

    TODO: disable if currency does not have fractional
   */
  if (price) price /= 100;

  const handleDelete = (pid: number) => {
    fetch(`http://localhost:3006/api/v1/products/${pid}`, {
      method: "DELETE"
    })
    .then(val => setProducts(products.filter(product => product.id !== pid)))
    .catch(err => console.error(err));
  };

  const handleUpdate = (pid: number) => {
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

    return "#000";
  };

  return (
    <div id="productcard-container" className="default-theme">
      <span id="productcard-name" className={theme}>{name}</span>

      <div id="productcard-details-container">
        <IconLabel icon={faCalendar} data={date} color={getIconColor("faCalendar")} />
        {
          // TODO: remove fractional if currency doesn't use it
          price !== null &&
          <IconLabel icon={faMoneyBill} data={parseFloat(price?.toString()).toFixed(2)} color={getIconColor("faMoneyBill")} />
        }
        {
          condition &&
          <IconLabel icon={faBriefcaseMedical} data={condition} color={getIconColor("faBriefcaseMedical")} />
        }
        <IconLabel icon={faTableCellsLarge} data={category} color={getIconColor("faTableCellsLarge")} />
      </div>

      <div id="productcard-actions-container">
        <FontAwesomeIcon icon={faArrowsRotate} className="productcard-actions-icon spin-grow" color={getIconColor("faArrowsRotate")} onClick={() => handleUpdate(product_id)} />
        <FontAwesomeIcon icon={faTrash} className="productcard-actions-icon shake" color={getIconColor("faTrash")} onClick={() => handleDelete(product_id)} />
      </div>
    </div>
  )
};

export default ProductCard;
