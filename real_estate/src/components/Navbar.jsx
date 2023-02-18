import React from 'react';
import style from "../Styles/navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <h1>ProperyRental.com</h1>
        <div>
            <input type="text" />
            <button>Search</button>
        </div>
        <h2 className={style.dashboard_name}>User DashBoard</h2>
        <button>Login/Sign-Up</button>     
    </div>
  )
}

export default Navbar