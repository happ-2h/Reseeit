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

import '../assets/styles/AddProduct.css';

const AddProduct = () => {
  const navigate = useNavigate();

  const [name, setName]   = useState("");
  const [date, setDate]   = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [category, setCategory]   = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    try {
      fetch("http://localhost:3006/api/v1/products", {
        method: "POST",
        body: JSON.stringify({
          name,
          date_purchased: date,
          price_purchased: (+price*100),
          condition,
          category
        }),
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(val => navigate('/'))
      .catch(err => console.error(err));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="addproduct-container">
      <div id="addproduct-form-container">
        <span id="addproduct-heading">Add Product</span>
        <form action="">
          <div className="field">
            <label className='addproduct-label' htmlFor="name">Name</label>
            <div className="form-input">
              <input id="name" className='addproduct-input'
                value={name} onChange={e => setName(e.target.value)}
                type="text" placeholder='Name'
                required />
              <FontAwesomeIcon className='addproduct-icon' icon={faBox} color="#BDA995" />
            </div>
          </div>
          <div className="field">
            <label className='addproduct-label' htmlFor="date">Date</label>
            <div className="form-input">
              <input id="date" className='addproduct-input'
                value={date} onChange={e => setDate(e.target.value)}
                type="date" placeholder='Date Purchased'
                required />
              <FontAwesomeIcon className='addproduct-icon' icon={faCalendar} color='#9C90AD' />
            </div>
          </div>
          <div className="field">
            <label className='addproduct-label' htmlFor="price">Price</label>
            <div className="form-input">
              <input id="price" className='addproduct-input'
                value={price} onChange={e => setPrice(e.target.value)}
                type="number" min={0} step={0.01}
                placeholder='Price'/>
              <FontAwesomeIcon className='addproduct-icon' icon={faMoneyBill} color='#B2B29E' />
            </div>
          </div>
          <div className="field">
            <label className='addproduct-label' htmlFor="condition">Condition</label>
            <div className="form-input">
              <input id="condition" className='addproduct-input'
                value={condition} onChange={e => setCondition(e.target.value)}
                type="text" placeholder='Condition'/>
              <FontAwesomeIcon className='addproduct-icon' icon={faBriefcaseMedical} color='#B98C8C' />
            </div>
          </div>
          <div className="field">
            <label className='addproduct-label' htmlFor="category">Category</label>
            <div className="form-input">
              <input id="category" className='addproduct-input'
                value={category} onChange={e => setCategory(e.target.value)}
                type="text" placeholder='Category'
                required />
              <FontAwesomeIcon className='addproduct-icon' icon={faTableCellsLarge} color='#BDA995' />
            </div>
          </div>

          <div className="field">
            <button id="addproduct-btn-submit" onClick={handleSubmit}>submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default AddProduct;
