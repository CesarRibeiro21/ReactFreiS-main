import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import Cabecalho from '../components/Cabecalho/cabecalho'
import CabecalhoExercicios from '../components/CabecacalhoEx/cabecEx'

export default function E02(){
    return(
        <div className='e02'>
             <Cabecalho/>
        
        <div>
             <CabecalhoExercicios/>
        </div>
      </div>
    )
}