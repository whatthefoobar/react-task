import React, { useState } from 'react';
import './SearchForm.css';
import { BsSearch } from 'react-icons/bs';

const SearchForm = ({ term, setTerm }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(term);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Search Form</label>
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
  );
};

export default SearchForm;
<div className="search__container"></div>;
