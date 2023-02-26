import s from './productos.module.css';
import Carrousel from "../carrousel/Carrousel";
import img9 from '../../images/image9.jpg';
import img10 from '../../images/image10.jpg';
import img12 from '../../images/image12.jpg';
import img13 from '../../images/image13.jpg';
import img14 from '../../images/image14.jpg';


export default function Productos() {



    return (
        <div className={s.container}>

            <div>
                <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>Zapatos deportivos</h2>
                <Carrousel array={[img12, img13, img14, img9, img10]} />
            </div>

        </div>
    )
}