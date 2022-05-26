import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useAPI } from '../../Store';
import './SortCards.css';

const SortCards = ({ sortAscending, sortDescending }) => {
  let { filter, setFilter } = useAPI();

  return (
    <div className="sort__btns">
      <button
        className="arrow__btn"
        onClick={(filter) => {
          setFilter('desc');
        }}
      >
        <AiOutlineArrowDown />
      </button>
      <button
        className="arrow__btn"
        onClick={(filter) => {
          setFilter('asc');
        }}
      >
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default SortCards;
