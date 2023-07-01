import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import img from "/images/doctor.jpg";
import "../index.css"

const Card = ({ name, username, id }) => {
  const { state, addToFavorites, removeFromFavorites } = useContext(ContextGlobal);
  const isFavorite = state.favorites.some((favorite) => favorite.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFromFavorites(id);
    } else {
      addToFavorites({ name, username, id });
    }
  };

  return (
    <div className="card">
      <img className='imagen' src={img} alt="" />
      <Link to={`/dentist/${id}`}><h3 style={{textAlign: "center"}}>{name}</h3></Link>
      <h5>{username}</h5>
      {isFavorite ? (
        <h2 className="sacarFavorito" onClick={handleToggleFavorite}> ★ </h2>
      ) : (
        <h2 className="agregarFavorito" onClick={handleToggleFavorite}>⭐</h2>
      )}
    </div>
  );
};

export default Card;