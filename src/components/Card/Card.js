import React from 'react';
import { FiMail } from 'react-icons/fi';
import { BiPhoneCall } from 'react-icons/bi';
import './Card.css';

const Card = ({ name, img, city }) => {
  //if grid return grid card <GridCard> else retun list card <ListCard>

  return (
    //grid card
    // <li className="card--grid">
    //   <div className="card__background">
    //     <h1>{name}</h1>
    //   </div>

    //   <div className="card__info">
    //     <img src={img} className="card__image" alt="user" />
    //     <p className="card__city">{city}</p>
    //     <div className="card__social-icons">
    //       <FiMail />
    //       <BiPhoneCall />
    //     </div>
    //   </div>
    // </li>
    //list card
    <li className="card--grid">
      <div className="card__background">
        <h1>{name}</h1>
      </div>

      <div className="card__info">
        <img src={img} className="card__image" alt="user" />
        <p className="card__city">{city}</p>
        <div className="card__social-icons">
          <FiMail />
          <BiPhoneCall />
        </div>
      </div>
    </li>
  );
};

export default Card;
