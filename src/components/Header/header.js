import React from 'react';
import style from './header.module.scss';
<<<<<<< HEAD
import {Link} from "react-router-dom";

const Header = () => (
    <header className={style.header}>
      <Link to="/" className={style.logo}>Star<span>db</span></Link>
        <nav className={style.nav}>
            <Link to='/people/'>People</Link>
            <Link to='/planet/'>Planets</Link>
            <Link to='/starship/'>Starships</Link>
=======

 const Header = () => (
    <header className={style.header}>
      <div className={style.logo}>Star <span>db</span></div>  
        <nav className={style.nav}>
            <a href="">People</a>
            <a href="">Planets</a>
            <a href="">Starships</a>
>>>>>>> 06e64984381476c3bdf2b7c675c2255ff39a1130
        </nav>
    </header>
)

export default Header;