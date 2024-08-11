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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductsContext } from "../context/ProductsContext";
import { useContext } from "react";


interface ProductCardProps {
  product_id: number;
  name: string;
  date: string;
  price: number | null;
  condition: string | null;
  category: string;
};

const ProductCard = ({product_id, name, date, price, condition, category}: ProductCardProps) => {
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

  return (
    <div id="productcard-container">
      <span>{name}</span>

      <div id="productcard-details-container">
        <IconLabel icon={faCalendar} data={date} color="#9C90AD"/>
        {
          // TODO: remove fractional if currency doesn't use it
          price &&
          <IconLabel icon={faMoneyBill} data={parseFloat(price?.toString()).toFixed(2)} color="#B2B29E" />
        }
        {
          condition &&
          <IconLabel icon={faBriefcaseMedical} data={condition} color="#B98C8C" />
        }
        <IconLabel icon={faTableCellsLarge} data={category} color="#BDA995" />
      </div>

      <div id="productcard-actions-container">
        <FontAwesomeIcon icon={faArrowsRotate} className="productcard-actions-icon spin-grow" color="var(--G300)" />
        <FontAwesomeIcon icon={faTrash} className="productcard-actions-icon shake" color="var(--R300)" onClick={() => handleDelete(product_id)} />
      </div>
    </div>
  )
};

export default ProductCard;
