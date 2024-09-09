import { Link } from 'react-router-dom'
import './cabecEx.scss'

export default function CabecalhoExercicios(props){
    return(
    <div className='exercicio'>
         <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>{props.titulo ?? "Exercicio" }</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p> {props.descricao}</p>
                </div>
        </div>
)
}