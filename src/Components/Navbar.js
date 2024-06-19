import React, {useState} from 'react';
import Logo from "../Assets/pizzaLogo.png"
import { Link } from 'react-router-dom';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import "../Style/Navbar.css";


function Navbar() {
  const [showLinks, setShowLinks]=useState(false);
  const setLinks=()=>{
    setShowLinks(!showLinks)
  };
  return (
    <>
    <div className='navbar'>
        <div className='leftSide' id={showLinks ? "open" : "close"}>
          <Link to="/"><img src={Logo} alt='logo' /></Link> 
          <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className='rightSide'>
        <ul>
        <li className='leftNemu'><Link to="/">Home</Link></li>
        <li className='leftNemu'><Link to="/menu">Menu</Link></li>
        <li className='leftNemu'><Link to="/about">About</Link></li>
        <li className='leftNemu'><Link to="/contact">Contact</Link></li>
        <li><button onClick={setLinks}><ReorderRoundedIcon /></button></li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar;
