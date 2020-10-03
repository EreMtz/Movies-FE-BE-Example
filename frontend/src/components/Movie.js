import React from 'react';

function Movie({ title, description, picture }) {
  return (
    <div className="card bg-dark text-white">
      <img src={picture} className="card-img" />
      <div className="card-img-overlay">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Movie;
