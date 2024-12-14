import React from 'react';
import { useDispatch } from 'react-redux';
import CarbTrans from "./CarbTrans/CarbTransComponent";
import Options from "./Options/Options";
import Price from "./Price/Price";
import './SideBar.css';

export default function SideBar() {
  const dispatch = useDispatch();

  const handleResetAll = () => {
    dispatch({
      type: 'RESET', 
    });
  };

  return (
    <div className="sidebar-container">
      <div className="titles">
        <h3>Filters</h3>
        <h4 onClick={handleResetAll} style={{ cursor: 'pointer' }}>Reset All</h4>
      </div>
      <div className="components">
        <h4>Fourchettes de prix</h4>
        <Price />
        <CarbTrans />
        <Options />
      </div>
    </div>
  );
}
