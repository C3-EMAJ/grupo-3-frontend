import "./TelaProcessos.css";
import imagem from "./img/foto-perfil.png"
import home from "./img/home.png"
import usuario from "./img/usuario.png"
import assistido from "./img/assistido.png"
import agendamento from "./img/agendamento.png"
import pastas from "./img/pastas.png"
import config from "./img/config.png"
import saida from "./img/saida.png"

function TelaProcessos() {
    return(
        <div id="tela">

            <div class="sidebar">
                <p id="logo-emaj"> <span id="barra">|</span> EMAJ</p>
                <img src={imagem} id='imagem-perfil'></img>
                <p id="nome-aluno">Hans Rafael</p>
                <p id="tipo-de-usuario">Aluno</p>
                <div id="navlinks-div">
                    <p id="navlink-processos"> <img src={home} id='imagem-home'></img> Processos</p>
                    <p class="navlink"> <img src={usuario} id='imagem-usuario'></img> Adicionar Usuário</p>
                    <p class="navlink"> <img src={assistido} id='imagem-assistido'></img> Assistidos</p>
                    <p class="navlink"> <img src={agendamento} id='imagem-agendamento'></img> Agendamentos</p>
                    <p class="navlink"> <img src={pastas} id='imagem-pastas'></img> Pastas</p>
                    <p class="navlink"> <img src={config} id='imagem-config'></img> Configurações</p>
                </div>

                <div>
                    <p class="navlink">Sair <img src={saida} id='imagem-saida'></img></p>
                </div>

            </div>

        </div>
    )
}

export default TelaProcessos;