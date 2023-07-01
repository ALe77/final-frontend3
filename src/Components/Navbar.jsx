import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import "../index.css"
import  img from "../../public/images/DH.png"

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const theme = state.theme === 'dark' ? 'dark' : 'light';

  const changeTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={theme}>
    <div>
      <i ><img  className='logo' src={img} alt="logo" /></i>
      </div>
    <div style={{display: "flex", justifyContent : 'space-around' ,width:'50%'}}>
      
          <Link to="/" style={{fontWeight:'bold'}}>Home</Link>
          <Link to="/contact" style={{fontWeight:'bold'}}>Contact</Link>
          <Link to="/favs" style={{fontWeight:'bold'}}>Favorites</Link>
      <button onClick={changeTheme}>☼</button>
      </div>
    </nav>
  );
};

export default Navbar;