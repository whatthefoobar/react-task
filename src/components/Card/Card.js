import React from 'react';
import './Card.css';
import { useAPI } from '../../Store';
import GridCard from '../GridCard/GridCard';
import ListCard from '../ListCard/ListCard';

const Card = ({ name, img, city }) => {
  //if grid return grid card <GridCard> else retun list card <ListCard>

  let { isGrid, setIsGrid } = useAPI();
  console.log(isGrid);

  return (
    <>
      {/* {isGrid ? <h2>Grid</h2> : <h2>List</h2>} */}
      {isGrid ? (
        <GridCard name={name} img={img} city={city} />
      ) : (
        <ListCard name={name} img={img} city={city} />
      )}
    </>
  );
};

export default Card;
