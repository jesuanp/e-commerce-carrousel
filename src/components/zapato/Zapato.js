import React from "react";
import s from './zapato.module.css';
import img11 from '../../images/image11.jpg';


export default function Zapato() {

    const [count, setCount] = React.useState(1);

    return (
        <div className={s.container}>

            <div className={s.divNameShoes}>
                <h2>Nombre de los zapatos</h2>
            </div>

            <div className={s.infoShoes}>
                <img className={s.imgShoes} src={img11} alt='imagen de zapatos' />

                <div className={s.textInfo}>

                    <span style={{marginTop: '1rem'}}>Nombre de los zapatos</span>

                    <span style={{color: 'grey'}}>Sea el primero en dejar una reseña para este articulo</span>

                    <span style={{fontSize: '1.2rem', color: 'rgb(201, 131, 0)'}}>130.000 COP</span>

                    <div>

                        <span>Colores disponibles:</span>

                        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', marginBottom: '1rem'}}>

                            <div style={{backgroundColor: '#000'}} className={s.colores}></div>
                            <div style={{backgroundColor: 'orange'}} className={s.colores}></div>
                            <div style={{backgroundColor: '#F06292'}} className={s.colores}></div>

                        </div>

                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', marginRight: '1rem', marginBottom: '1rem'}}>

                        <span>Talla Zapatos:</span>

                        <select className={s.selectTalla}>
                            <option>35</option>
                            <option>36</option>
                            <option>37</option>
                            <option>38</option>
                        </select>

                    </div>

                    <div style={{marginRight: '1rem'}}>

                        <span>Cantidad</span>

                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className={s.selectCantidad}>

                                <span onClick={() => setCount(state => state === 1 ? state : state - 1)}>-</span>
                                <span>{count}</span>
                                <span onClick={() => setCount(state => state === 10 ? state : state + 1)}>+</span>

                            </div>

                            <div>
                                <button className={s.btnAdd}>AGREGAR AL CARRITO</button>
                            </div>
                        </div>


                    </div>

                    <span style={{marginTop: '1rem'}}>Disponibilidad: <span style={{color: 'green'}}>Disponible</span></span>

                    <div style={{marginTop: '1rem'}}>

                        <span>Detalles:</span>

                        <p style={{marginTop: '1rem'}}>Veniam eiusmod sunt tempor mollit nisi amet consectetur enim ullamco aliquip adipisicing. Enim dolore adipisicing et non eiusmod incididunt ad. Exercitation consequat nostrud officia tempor ut ipsum ea fugiat magna sit sit dolor sint. Amet culpa ad eu exercitation adipisicing.</p>

                    </div>

                </div>

            </div>

        </div>
    )
}
