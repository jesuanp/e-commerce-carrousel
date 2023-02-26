import React from "react";
import s from './header.module.css';
import imageHeader from '../../images/logo.jpg';
import searchIcon from '../../images/search-icon.png';
import hamburgerIcon from '../../images/Hamburger-icon.png';

export default function NavBar({setShowMenu}){

    return (
        <header className={s.header}>
            <div className={s.container}>
                <div onClick={() => setShowMenu(true)} className={s.containerIcon}>
                    <img src={hamburgerIcon} className={s.icon} alt='imagen del header' />
                </div>

                <img className={s.imgLogo} src={imageHeader} alt='imagen del header' />

                <div className={s.containerIcon}>
                    <img src={searchIcon} className={s.icon} alt='imagen del header' />
                </div>
            </div>
        </header>
    )
}