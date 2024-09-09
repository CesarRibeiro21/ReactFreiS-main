import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/Cabecalho/cabecalho'
import CabecalhoExercicios from '../components/CabecacalhoEx/cabecEx'

export default function E04(){
    return(
        <div className='e02'>
             <Cabecalho />
           <div className='titulo'> 
                 <CabecalhoExercicios titulo='Exercicio 02 | Converter Kg/Gramas'
                         descricao="Implementar um programa em Javascript para converter kilos em gramas."
                  />
           </div>
      </div>
    )
}