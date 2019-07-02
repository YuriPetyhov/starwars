import React from 'react';
import style from './header.module.scss';

 const Header = () => (
    <header className={style.header}>
      <div className={style.logo}>Star <span>db</span></div>  
        <nav className={style.nav}>
            <a href="">People</a>
            <a href="">Planets</a>
            <a href="">Starships</a>
        </nav>
    </header>
)

export default Header;