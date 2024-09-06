import { Link } from 'react-router-dom'
import './cabecEx.scss'

export default function CabecalhoExercicios(){
    return(
    <div className='exercicio'>
         <div className='titulo'>
                    <div className='texto'>
                        <Link to='/'><img src='/voltar.png' alt='voltar' /></Link>
                        <h2>Exercício 01 - Cupom de desconto</h2>
                    </div>
                    <div className='faixa'/>
                </div>
                <div className='descricao'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam dolorem minima delectus vero at harum quod qui culpa neque, modi laboriosam eos earum, mollitia architecto? Enim totam commodi debitis nam?</p>
                </div>
        </div>
)
}