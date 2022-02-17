import React from 'react';

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1>Inizia il quiz</h1>
          <p>Buona fortuna!</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Inizia</button>
        </div>
      </div>
    </div>
  );
}

export default Start;
