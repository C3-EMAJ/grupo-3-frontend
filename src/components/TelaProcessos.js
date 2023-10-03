import "./TelaProcessos.css";
import imagem from "./img/foto-perfil.png"

function TelaProcessos() {
    return(
        <div id="tela">

            <div class="sidebar">
                <p id="logo-emaj"> <span id="barra">|</span> EMAJ</p>
                <img src={imagem} id='imagem-perfil'></img>
                <p id="nome-aluno">Hans Rafael</p>
                <p id="tipo-de-usuario">Aluno</p>
                <div id="navlinks-div">
                    <p id="navlink-processos">Processos</p>
                    <p class="navlink">Adicionar Usuário</p>
                    <p class="navlink">Assistidos</p>
                    <p class="navlink">Agendamentos</p>
                    <p class="navlink">Pastas</p>
                    <p class="navlink">Configurações</p>
                </div>
            </div>

        </div>
    )
}

export default TelaProcessos;