import React from 'react';
import { useAPI } from '../../Store';
import GridCard from '../GridCard/GridCard';
import ListCard from '../ListCard/ListCard';
import './Cards.css';

const Cards = ({ users }) => {
  const { isGrid } = useAPI();
  return (
    <ul className={isGrid ? 'card__gallery grid' : 'card__gallery list'}>
      {users &&
        users.map((user, index) =>
          isGrid ? (
            <GridCard
              key={index}
              name={`${user.name.first} ${user.name.last}`}
              img={user.picture.large}
              city={user.location.city}
            />
          ) : (
            <ListCard
              key={index}
              name={`${user.name.first} ${user.name.last}`}
              img={user.picture.large}
              city={user.location.city}
            />
          )
        )}
    </ul>
  );
};

export default Cards;
