import React from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useAPI } from '../../Store';
import './SortCards.css';

const SortCards = () => {
  const { users } = useAPI();
  console.log(users);
  const sortDescending = () => {
    console.log('Sort descending');
  };

  const sortAscending = () => {
    // console.log('Sort ascending');
    console.log(
      'Sort ascending',
      users.sort((a, b) => a.name.first - b.name.first)
    );
  };

  return (
    <div className="sort__btns">
      <button className="arrow__btn" onClick={sortDescending}>
        <AiOutlineArrowDown />
      </button>
      <button className="arrow__btn" onClick={sortAscending}>
        <AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default SortCards;
