import {
  faBriefcaseMedical,
  faCalendar,
  faMoneyBill,
  faTableCellsLarge
} from "@fortawesome/free-solid-svg-icons";

import IconLabel from "./IconLabel";

import '../assets/styles/ProductCard.css';


interface ProductCardProps {
  name: string;
  date: string;
  price: number | null;
  condition: string | null;
  category: string;
};

const ProductCard = ({name, date, price, condition, category}: ProductCardProps) => {
  /*
    Display cents

    TODO: disable if currency does not have fractional
   */
  if (price) price /= 100;

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
    </div>
  )
};

export default ProductCard;
