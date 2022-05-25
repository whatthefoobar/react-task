import React from 'react';
import spinner from '../assets/spinner.gif';

const Loading = () => {
  return (
    <div align="center">
      <img
        color="rgb(0, 153, 255)"
        height={100}
        width={100}
        src={spinner}
        alt="Loading..."
      />
    </div>
  );
};

export default Loading;
