import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/Cabecalho/cabecalho'
import CabecalhoExercicios from '../components/CabecacalhoEx/cabecEx'

export default function E04(){
    return(
        <div className='e04'>
             <Cabecalho/>
        
        <div>
             <CabecalhoExercicios titulo="Exercicio 04 | Leitura do Livro"
               descricao="Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página"
             />
        </div>
          
      </div>
    )
}