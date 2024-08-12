import React, { useState } from 'react';
import { useNavigate }     from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBox,
  faBriefcaseMedical,
  faCalendar,
  faMoneyBill,
  faTableCellsLarge
} from '@fortawesome/free-solid-svg-icons';

import '../assets/styles/Form.css';

interface FormProps {
  type: "add" | "update";
};

const Form = ({type}: FormProps) => {
  const navigate = useNavigate();

  // Form values
  const [name,      setName]      = useState("");
  const [date,      setDate]      = useState("");
  const [price,     setPrice]     = useState("");
  const [condition, setCondition] = useState("");
  const [category,  setCategory]  = useState("");

  // Errors for required fields
  const [requiredErrors, setRequiredErrors] = useState([false, false, false]);

  const handleSubmitAdd = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      fetch("http://localhost:3006/api/v1/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          date_purchased:  date,
          price_purchased: price.trim() !== "" ? price.split('.').join("")  : null,
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
            name.trim() === "",
            date.trim() === "",
            category.trim() === ""
          ]);
        }
        else navigate('/');
      })
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmitUpdate = () => {};

  return (
    <div id="form-container">
      <span id="form-heading">{type} Product</span>
      <form action="">
        <div className="field">
          <label className='form-label' htmlFor="name">Name</label>
          <div className="form-input-container">
            <input id="name" className='form-input'
              value={name} onChange={e => setName(e.target.value)}
              type="text" placeholder='Name'
              style={requiredErrors[0] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faBox} color="#BDA995" />
            {
              requiredErrors[0] &&
              <span className='required-notif'>required</span>
            }
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="date">Date</label>
          <div className="form-input-container">
            <input id="date" className='form-input'
              value={date} onChange={e => setDate(e.target.value)}
              type="date" placeholder='Date Purchased'
              style={requiredErrors[1] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faCalendar} color='#9C90AD' />
            {
              requiredErrors[1] &&
              <span className='required-notif'>required</span>
            }
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="price">Price</label>
          <div className="form-input-container">
            <input id="price" className='form-input'
              value={price} onChange={e => setPrice(e.target.value)}
              type="number" min={0} step={0.01}
              placeholder='Price'/>
            <FontAwesomeIcon className='form-icon' icon={faMoneyBill} color='#B2B29E' />
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="condition">Condition</label>
          <div className="form-input-container">
            <input id="condition" className='form-input'
              value={condition} onChange={e => setCondition(e.target.value)}
              type="text" placeholder='Condition'/>
            <FontAwesomeIcon className='form-icon' icon={faBriefcaseMedical} color='#B98C8C' />
          </div>
        </div>
        <div className="field">
          <label className='form-label' htmlFor="category">Category</label>
          <div className="form-input-container">
            <input id="category" className='form-input'
              value={category} onChange={e => setCategory(e.target.value)}
              type="text" placeholder='Category'
              style={requiredErrors[2] ? {border: "1px solid var(--R300)"} : {}}
              required />
            <FontAwesomeIcon className='form-icon' icon={faTableCellsLarge} color='#BDA995' />
            {
              requiredErrors[2] &&
              <span className='required-notif'>required</span>
            }
          </div>
        </div>

        <div className="field">
          <button id="form-btn-submit" onClick={type === "add" ? handleSubmitAdd : handleSubmitUpdate}>submit</button>
        </div>
      </form>
    </div>
  )
};

export default Form;
