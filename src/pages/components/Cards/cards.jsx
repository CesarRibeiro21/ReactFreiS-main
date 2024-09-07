import { Link } from 'react-router-dom'
import './cards.scss'

export default function Cards(){
    return(
        <div className='cards'>
                    <Link to='/e01' className='link'>
                        <div className='card'>
                            <div className='retangulo laranja'/>
                            <h3 className='titulo'>Cupom de desconto</h3>
                            <h4 className='subtitulo'>Exercício 1</h4>
                        </div>
                    </Link>

                    <Link to='/e02' className='link'>
                        <div className='card'>
                            <div className='retangulo verde'/>
                            <h3 className='titulo'>Converter Kg/gramas</h3>
                            <h4 className='subtitulo'>Exercício 2</h4>
                        </div>
                    </Link>
                    
                    <Link to='/e04' className='link'>
                        <div className='card'>
                            <div className='retangulo azul'></div>
                            <h3 className='titulo'>Leitura de Livro</h3>
                            <h4 className='subtitulo'>Exercício 4</h4>
                        </div>
                    </Link>

                    <Link to='/e11' className='link'>
                        <div className='card'>
                            <div className='retangulo roxo'/>
                            <h3 className='titulo'>Tabuada</h3>
                            <h4 className='subtitulo'>Exercício 11</h4>
                        </div>
                    </Link>
                </div>
    )
}