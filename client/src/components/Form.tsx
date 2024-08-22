import React, { useContext, useEffect, useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faBriefcaseMedical,
  faCalendar,
  faMoneyBill,
  faTableCellsLarge
} from '@fortawesome/free-solid-svg-icons';
import { ProductsContext } from '../context/ProductsContext';

import { Product } from '../types';

import '../assets/styles/Form.css';
import '../assets/styles/themes.css';

interface FormProps {
  type:    "add" | "update";
  details: Product | null;
};

const Form = ({type, details=null}: FormProps) => {
  const navigate  = useNavigate();
  const { theme } = useContext(ProductsContext);

  // Form values
  const [name,      setName]      = useState("");
  const [date,      setDate]      = useState("");
  const [price,     setPrice]     = useState("");
  const [condition, setCondition] = useState("");
  const [category,  setCategory]  = useState("");

  // Errors for required fields
  const [requiredErrors, setRequiredErrors] = useState([false, false, false]);

  useEffect(() => {
    if (!details) return;

    setName(details.name);
    setDate(details.date_purchased.split('T')[0]);
    setPrice(details.price_purchased / 100);
    setCondition(details.condition);
    setCategory(details.category);
  }, [details])

  const handleSubmitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      fetch("http://localhost:3006/api/v1/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          date_purchased:  date,
          price_purchased: price.trim() !== "" ? price.split('.').join("") : null,
          condition:       condition.trim() !== "" ? condition : null,
          category
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(val => {
        if (val.status === 400) {
          setRequiredErrors([
            name?.trim()     === "",
            date?.trim()     === "",
            category?.trim() === ""
          ]);
        }
        else navigate('/');
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitUpdate = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      fetch(`http://localhost:3006/api/v1/products/${details?.id}`, {
        method: "PUT",
        body: JSON.stringify({
          name,
          date_purchased:  date,
          price_purchased: price.toString().trim() !== "" ? price.toString().split('.').join("") : null,
          condition:       condition?.trim() !== "" ? condition : null,
          category
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(val => {
        if (val.status === 500) {
          setRequiredErrors([
            name?.trim()     === "",
            date?.trim()     === "",
            category?.trim() === ""
          ]);
        }
        else navigate('/');
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const getIconColor = (icon:string) => {
    if (theme === "default-theme") {
      switch(icon) {
        case "faBox":              return "#BDA995";
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
        case "faBox":              return "#F2CDCD";
        case "faCalendar":         return "#CBA6F7";
        case "faMoneyBill":        return "#94E2D5";
        case "faBriefcaseMedical": return "#EBA0AC";
        case "faTableCellsLarge":  return "#FAB387";
        case "faArrowsRotate":     return "#A6E3A1";
        case "faTrash":            return "#F38BA8";
        default: return "#000";
      }
    }

    return "#000";
  };

  return (
    <div id="form-container" className={theme}>
      <span id="form-heading" className={theme}>{type} Product</span>
      <form action="">
        <div className="field">
          <label className='form-label' htmlFor="name">Name</label>
          <div className="form-input-container">
            <input id="name" className={`form-input ${theme}`}
              value={name} onChange={e => setName(e.target.value)}
              type="text" placeholder='Name'
              style={requiredErrors[0] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faBox} color={getIconColor("faBox")} />
            {
              requiredErrors[0] &&
              <span className={`required-notif ${theme}`}>required</span>
            }
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="date">Date</label>
          <div className="form-input-container">
            <input id="date" className={`form-input ${theme}`}
              value={date} onChange={e => setDate(e.target.value)}
              type="date" placeholder='Date Purchased'
              style={requiredErrors[1] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faCalendar} color={getIconColor("faCalendar")} />
            {
              requiredErrors[1] &&
              <span className={`required-notif ${theme}`}>required</span>
            }
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="price">Price</label>
          <div className="form-input-container">
            <input id="price" className={`form-input ${theme}`}
              value={price} onChange={e => setPrice(e.target.value)}
              type="number" min={0} step={0.01}
              placeholder='Price'/>
            <FontAwesomeIcon className='form-icon' icon={faMoneyBill} color={getIconColor("faMoneyBill")} />
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="condition">Condition</label>
          <div className="form-input-container">
            <input id="condition" className={`form-input ${theme}`}
              value={condition} onChange={e => setCondition(e.target.value)}
              type="text" placeholder='Condition'/>
            <FontAwesomeIcon className='form-icon' icon={faBriefcaseMedical} color={getIconColor("faBriefcaseMedical")} />
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="category">Category</label>
          <div className="form-input-container">
            <input id="category" className={`form-input ${theme}`}
              value={category} onChange={e => setCategory(e.target.value)}
              type="text" placeholder='Category'
              style={requiredErrors[2] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faTableCellsLarge} color={getIconColor("faTableCellsLarge")} />
            {
              requiredErrors[2] &&
              <span className={`required-notif ${theme}`}>required</span>
            }
          </div>
        </div>

        <div className="field">
          <button id="form-btn-submit" className={theme} onClick={type === "add" ? handleSubmitAdd : handleSubmitUpdate}>submit</button>
        </div>
      </form>
    </div>
  )
};

export default Form;
