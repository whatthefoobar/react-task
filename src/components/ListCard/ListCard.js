import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import './ListCard.css';

const ListCard = ({ name, img, city }) => {
  return (
    <li className="card--list">
      <div className="card__background">
        <img src={img} className="card__image" alt="user" />
      </div>

      <div className="card__info">
        <div className="card__details">
          <h2>{name}</h2>
          <p className="card__city">{city}</p>
        </div>

        <div className="card__social-icons">
          <FiMail />
          <BiPhoneCall />
        </div>
      </div>
    </li>
  );
};

export default ListCard;
