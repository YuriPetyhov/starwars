import React from 'react';
import style from './header.module.scss';
import {Link} from "react-router-dom";

const Header = () => (
    <header className={style.header}>
      <Link to="/" className={style.logo}>Star<span>db</span></Link>
        <nav className={style.nav}>
            <Link to='/people/'>People</Link>
            <Link to='/planet/'>Planets</Link>
            <Link to='/starship/'>Starships</Link>
        </nav>
    </header>
)

export default Header;