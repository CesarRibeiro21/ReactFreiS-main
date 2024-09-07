import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/Cabecalho/cabecalho'
import CabecalhoExercicios from '../components/CabecacalhoEx/cabecEx'

export default function E04(){
    return(
        <div className='e04'>
            <Cabecalho/>
        
            <div className='exercicio'>
                <CabecalhoExercicios/>
            </div>
        </div>
)}