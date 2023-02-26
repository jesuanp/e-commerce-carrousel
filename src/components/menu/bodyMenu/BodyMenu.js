import React from "react";
import s from './body.module.css';

export default function BodyMenu({section}) {

    if(section === 'Menu'){
        return (
            <div>
                <ul className={s.list}>
                    <li className={s.item}>Tenis</li>
                    <li className={s.item}>Deporte</li>
                    <li className={s.item}>Elegante</li>
                    <li className={s.item}>Botas</li>
                    <li className={s.item}>Sandalias</li>
                </ul>
            </div>
        )
    }

    if(section === 'Ajustes'){
        return (
            <div>
                <ul className={s.list}>
                    <li className={s.item}>Ajustes</li>
                </ul>
            </div>
        )
    }

    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}>Mi cuenta</li>
                <li className={s.item}>Mi lista de deseos</li>
                <li className={s.item}>Crear una cuenta</li>
                <li className={s.item}>Iniciar sesión</li>
            </ul>
        </div>
    )     
}