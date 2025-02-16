// Loading.js
import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import "../App.css"
const Loading = () => {
  return (
    <div className="loading-overlay">
      <TailSpin color="rgb(255, 70, 101)" height={80} width={80} />
    </div>
  );
};

export default Loading;
