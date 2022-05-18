import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import './Card.css';

const Card = ({ name, img, city }) => {
  return (
    <li className="card">
      <div className="card__background">
        {/* <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
          <path />
        </svg> */}
        <img src={img} className="card__image" alt="user" />
      </div>

      <div className="card__info">
        <h1>{name}</h1>
        <p>{city}</p>

        <div className="card__social-icons">
          <FiMail />
          <BiPhoneCall />
        </div>
      </div>
    </li>
  );
};

export default Card;
