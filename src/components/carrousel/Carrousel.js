import React from "react";
import s from './carrousel.module.css';

export default function Carrousel ({array}) {

    const [carrousel, setCarrousel] = React.useState(0);

    const handleClickBack = (action) => {
        if(action === 'back') setCarrousel(state => state <= 0 ? array.length-1 : state-1);
        if(action === 'next') setCarrousel(state => state >= array.length-1 ? 0 : state+1);
    }

    const handleClickSection = (value) => {
        setCarrousel(value);
    }

    return (
        <div className={s.containerCarrousel}>

            <div className={s.corrousel}>
                <div onClick={() => handleClickBack('back')} className={s.backAndNext}>{'<'}</div>

                <div style={{width: '100%', overflow: 'hidden', position: 'relative'}}>
                    <div style={{right: `${carrousel}00%`}} className={s.divImages}>
                        
                        {
                            array && array.map((e, i) => 
                                <div key={i} className={s.containerImg}>
                                    <img className={s.imgShoes} src={e} />
                                </div>    
                            )
                        }
                    </div>
                </div>
            
                <div onClick={() => handleClickBack('next')} className={s.backAndNext}>{'>'}</div>
            </div>

            <div className={s.section}>
                {
                    array && array.map((e, i) => 
                        <div key={i} className={s.circulo} onClick={() => handleClickSection(i)} style={{backgroundColor:  `${carrousel === i ? '#000' : 'grey'}`}}></div>
                    )
                }
            </div>
        </div>
    )
}
