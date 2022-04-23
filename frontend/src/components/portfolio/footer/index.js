import './style.css'
import github from '../../../assets/github.svg'
import linkedin from '../../../assets/linkedin.svg'

export default function Footer() {
    return(
        <footer id='footer'>
            <div id='row'>
                <div>     
                </div>
                <p>&copy; 2022 - Todos os direitos reservados</p>
                <div id='social'>
                    <a href='https://www.github.com/marceloko' target='_blank' rel='noopener noreferrer'><img src={github} alt='github'/></a>
                    <a href='https://www.linkedin.com/in/marcelo-kohlhase/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='linkedin'/></a>
                </div>
            </div>
           
        </footer>
    )
}