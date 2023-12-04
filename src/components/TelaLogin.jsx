import imagem from "./img/emaj-login.png"
import { Link } from 'react-router-dom';
import './TelaLogin.css'

function TelaLogin() {
    return(
        <div id='tela' className='Tela'>
           
            <img src={imagem} id='imagem-login'></img>
            
            <p class="email-texto">Email</p>
            <input class="input" type="text"></input>
            
            <p class="senha-texto">Password</p>
            <input class="input" id='password' type='password'></input>
            <div id='div-botao'>
                <button id="botao"> <Link className='texto-link' to={"/processos"}> Entrar </Link> </button>
            </div>
            <div id='esqueci-senha'>
                <a href="#"> Esqueci minha senha </a>
            </div> 

        </div>
    )
}

export default TelaLogin;