import React from 'react';
import Card from '../Card/Card';

const Cards = ({ users }) => {
  return (
    <ul className="card__gallery">
      {users &&
        users.map((user, index) => (
          <Card
            key={index}
            name={`${user.name.first} ${user.name.last}`}
            img={user.picture.large}
            city={user.location.city}
          />
        ))}
    </ul>
  );
};

export default Cards;
