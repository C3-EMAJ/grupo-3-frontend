import './TelaLogin.css';
import imagem from "./img/emaj-login.png"


function TelaLogin() {
    return(
        <div id='tela' className='Tela'>
           
            <img src={imagem} id='imagem-login'></img>
            
            <p class="email-texto">Email</p>
            <input class="input" type="text"></input>
            
            <p class="senha-texto">Password</p>
            <input class="input" id='password' type='password'></input>
            <div id='div-botao'>
                <button id="botao"> <span id="texto-botao">Entrar</span> </button>
            </div>
            <div id='esqueci-senha'>
                <a href="http://localhost:3000/"  target='_blank'> Esqueci minha senha </a>
            </div> 

        </div>
    )
}

export default TelaLogin;