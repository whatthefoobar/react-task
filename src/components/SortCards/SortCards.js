import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './SortCards.css';

const SortCards = () => {
  const handleClick = () => {
    console.log('Clicked');
  };

  return (
    <div className="sort__btns">
      <button className="arrow__btn" onClick={handleClick}>
        <AiOutlineArrowDown />
      </button>
      <button className="arrow__btn" onClick={handleClick}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default SortCards;
