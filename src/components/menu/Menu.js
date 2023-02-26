import React, { useState } from "react";
import s from './menu.module.css';
import HeaderMenu from "./bodyMenu/HeaderMenu";
import BodyMenu from "./bodyMenu/BodyMenu";

export default function Menu({setShowMenu}) {

    const [section, setSection] = useState('Menu');

    return (
        <>
            <button onClick={() => setShowMenu(false)} className={s.btnClose}>X</button>
            <div className={s.menu}>
                <HeaderMenu setSection={setSection} section={section} />
                <BodyMenu section={section} />
            </div>

            <div className={s.fondoMenu}></div>
        </>
    )
}