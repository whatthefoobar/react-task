import React, { useState } from 'react';
import './SearchForm.css';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({ term, setTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };

  const handleClick = () => {
    console.log('Clicked');
  };
  return (
    <div className="searchForm__container">
      <div className="btns">
        <button className="arrow__btn" onClick={handleClick}>
          <AiOutlineArrowDown />
        </button>
        <button className="arrow__btn" onClick={handleClick}>
          <AiOutlineArrowUp />
        </button>
      </div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <button type="submit" className="form__button">
          <BsSearch />
        </button>
        <input
          type="text"
          value={term}
          placeholder="e.g. Anna"
          className="form__input"
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchForm;
<div className="search__container"></div>;
