import React, { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';

const ToggleCardView = () => {
  const [isGrid, setIsGrid] = useState('true');

  const toggleBtn = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div>
      {isGrid ? <FiGrid onClick={toggleBtn} /> : <BsList onClick={toggleBtn} />}
    </div>
  );
};

export default ToggleCardView;
