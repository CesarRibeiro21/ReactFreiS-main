import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/Cabecalho/cabecalho';
import CabecalhoExercicios from '../components/CabecacalhoEx/cabecEx';
export default function E01() {
    const [valorPedido, setValorPedido] = useState(0);
    const [valorCupom, setValorCupom] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    function calcularValorTotal() {
        let total = valorPedido - valorCupom;
        setValorTotal(total);
    }

    return (
        <div className='pagina-e01'>
            <Cabecalho/>
            <div className='exercicio'>
               <CabecalhoExercicios/>
                <div className='formulario'>
                    <div className='campos'>
                        <div className='campo'>
                            <label>Informe o valor do pedido</label>
                            <input placeholder='0' onChange={e => setValorPedido(e.target.value)} />
                        </div>
                        <div className='campo'>
                            <label>Informe o valor do cupom</label>
                            <input placeholder='0' onChange={e => setValorCupom(e.target.value)} />
                        </div>
                        <button href='#' className='executar' onClick={calcularValorTotal}>Executar</button>
                    </div>
                    <h3 className='resultado'>Resultado: O total é R$ {valorTotal.toFixed(2)}</h3>
                </div>

            </div>
        </div>
    )
}
