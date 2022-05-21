import React, { useState } from 'react';
import { FiGrid } from 'react-icons/fi';
import { BsList } from 'react-icons/bs';
import './ToggleCardView.css';

const ToggleCardView = () => {
  const [isGrid, setIsGrid] = useState('true');

  const toggleBtn = () => {
    setIsGrid(!isGrid);
  };

  return (
    <div className="toggle__card">
      {isGrid ? <FiGrid onClick={toggleBtn} /> : <BsList onClick={toggleBtn} />}
    </div>
  );
};

export default ToggleCardView;
