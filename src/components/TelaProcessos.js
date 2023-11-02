import "./TelaProcessos.css";
import imagem from "./img/foto-perfil.png"
import home from "./img/home.png"
import usuario from "./img/usuario.png"
import assistido from "./img/assistido.png"
import agendamento from "./img/agendamento.png"
import pastas from "./img/pastas.png"
import config from "./img/config.png"
import saida from "./img/saida.png"
import Navlink from "./NavLink";

function TelaProcessos() {
    const logos = [{icone:home, texto:"Processos", id:"botaoProcessos"}, {icone:usuario, texto:" Adicionar Usuário", id:"botaoAdicionarUsuário"}, {icone:assistido, texto:"Assistidos", id:"botaoAssistidos"}, {icone:agendamento, texto:"Agendamentos", id:"botaoAgendamentos"}, {icone:pastas, texto:"Pastas", id:"botaoPastas"}, {icone:config, texto:"Configurações"}] 
    return(
        <div id="tela">

            <div class="sidebar">
                <p id="logo-emaj"> <span id="barra">|</span> EMAJ</p>
                <img src={imagem} id='imagem-perfil'></img>
                <p id="nome-aluno">Hans Rafael</p>
                <p id="tipo-de-usuario">Aluno</p>
                <div id="navlinks-div">
                    {logos && logos.map((botao, i) => 
                        <Navlink key={i} imagem={botao.icone} texto={botao.texto} />
                    )}
                </div>

                <div id="botao-sair">
                    <p>Sair <img src={saida} id='imagem-saida'></img></p>
                </div>

            </div>

        </div>
    )
}

export default TelaProcessos; 