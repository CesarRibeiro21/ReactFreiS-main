import { Link } from 'react-router-dom'
import './index.scss'
import Cabecalho from '../components/Cabecalho/cabecalho'
import Cards from '../components/Cards/cards'


export default function Inicio() {
    return (
        <div className='pagina-inicio'>
            <Cabecalho/>

            <div className='menu'>
                <div className='titulo'>
                    <h2>Escolha um treino...</h2>
                </div>
                    <Cards/>
            </div>
        </div>
    )
}