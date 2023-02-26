import React from "react";
import s from './foot.module.css';
import imgLogo from '../../images/logo.jpg';
import metodosDePago from '../../images/Icono_Metodos_de_Pago_C.png';

export default function Foot() {

    return (
        <div className={s.container}>

            <section style={{marginBottom: '2rem'}}>
                <div>
                    <img className={s.imgLogo} src={imgLogo} alt='imagen del logo' />

                    <div>
                        <span>Dirección</span>
                    </div>

                    <div>
                        <span>Correo</span>
                    </div>

                    <div>
                        <span>Número</span>
                    </div>
                </div>
            </section>

            <section style={{marginBottom: '2rem'}}>
                <div>

                    <h3 style={{marginBottom: '1rem', color: '#000'}}>Categorías</h3>

                    <ul className={s.ulCategory}>
                        <li>Deporte</li>
                        <li>Elegante</li>
                        <li>Niños</li>
                        <li>Dama</li>
                    </ul>

                </div>
            </section>

            <section style={{marginBottom: '2rem'}}>
                <div>

                    <h3 style={{marginBottom: '1rem', color: '#000'}}>Información</h3>

                    <ul className={s.ulInfo}>
                        <li>Mi lista de deseos</li>
                        <li>Mi cuenta</li>
                        <li>Crear una cuenra</li>
                        <li>Iniciar sesión</li>
                        <li>Terminos y condiciones</li>
                    </ul>

                </div>
            </section>

            <section style={{marginBottom: '2rem'}}>
                <div>

                    <h3 style={{marginBottom: '1rem', color: '#000'}}>Nuestras redes</h3>

                    <ul className={s.ulInfo}>
                        <li>Facebook: @helloWorld</li>
                        <li>Instagram: @helloWorld</li>
                        <li>youtube: helloWorld</li>
                    </ul>

                </div>
            </section>

            <section style={{width: '100%', marginTop: '6rem'}}>
                <div className={s.containerMetodosPagos}>
                    <img className={s.imgPagos} src={metodosDePago} alt='Metodos de pago' />
                    <button className={s.btn}>Var cómo comprar</button>
                </div>
            </section>

        </div>
    )
}