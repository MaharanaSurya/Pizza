import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/Home.css";
import BannerImage from "../Assets/pizza.jpeg";

function Home() {
  const menuPage = useNavigate();
  const menu=()=>{
    menuPage('/Menu');
  };
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
    <div className="headerContainer">
      <h1> Pedro's Pizzeria </h1>
      <p> PIZZA TO FIT ANY TASTE</p>
        <button onClick={menu}> ORDER NOW </button>
    </div>
  </div>
  )
}

export default Home;
