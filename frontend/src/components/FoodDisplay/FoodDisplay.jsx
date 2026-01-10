import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/storeContext';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top dishes nere you</h2>
        <div className="food-diisplay-list">
          {food_list.map((item, index) => {
            return;
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
