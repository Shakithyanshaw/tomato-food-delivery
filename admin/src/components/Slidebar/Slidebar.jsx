import React from 'react';
import './Slidebar.css';
import { assets } from '../../assets/assets';

const Slidebar = () => {
  return (
    <div className="slidebar">
      <div className="slidebar-options">
        <div className="slidebar-option">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </div>
        <div className="slidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>List Items</p>
        </div>
        <div className="slidebar-option">
          <img src={assets.order_icon} alt="" />
          <p>Order Items</p>
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
