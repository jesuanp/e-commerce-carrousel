import React from "react";
import s from './body.module.css';

export default function HeaderMenu({setSection, section}) {

    const handleClick = (value) => {
        setSection(value);
    }

    return (
        <div className={s.containerHeader}>
            <div /*style={{backgroundColor: '#fff'}}*/ onClick={() => handleClick('Menu')} className={`${s.section} ${section === 'Menu' ? s.currentSection : null}`}>
                <span>Menú</span>
            </div>

            <div onClick={() => handleClick('Cuenta')} className={`${s.section} ${section === 'Cuenta' ? s.currentSection : null}`}>
                <span>Cuenta</span>
            </div>

            <div onClick={() => handleClick('Ajustes')} className={`${s.section} ${section === 'Ajustes' ? s.currentSection : null}`}>
                <span>Ajustes</span>
            </div>
        </div>
    )
}