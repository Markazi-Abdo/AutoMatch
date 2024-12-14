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
        <h4>Filters</h4>
        <h5 onClick={handleResetAll} style={{ cursor: 'pointer' }} className='reset'>Reset All</h5>
      </div>
      <div className="components">
        <h5>Fourchettes de prix</h5>
        <Price />
        <CarbTrans />
        <Options />
      </div>
    </div>
  );
}
