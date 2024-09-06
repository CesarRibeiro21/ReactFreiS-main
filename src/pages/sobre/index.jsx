import { Link } from 'react-router-dom'
import './index.scss'

export default function Sobre() {
    return (
        <div className='pagina-sobre'>
            <div className='cabecalho'>
                <div className='titulo'>
                    <img src='/logo.png' alt='logo'/>
                    <h1>
                        React FreiS
                    </h1>
                </div>
                <div className='links'>
                    <Link to='/' className='link'>Inicio</Link>
                    <Link to='/sobre' className='link'>Sobre</Link>
                </div>
            </div>
            <div className='conteudo'>
                <h2>Sobre</h2>
                <div className='descricao'>
                    <p> Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades. <br /><br />Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br />Estamos ansiosos para ver seu progresso e sucesso!
                    </p>
                    <img src='/logo.png' alt='logo'/>
                </div>
            </div>
        </div>
    )
}