import React from 'react';
import './TelaProcessos.css';
import imagem from "./img/usuario.png"
import home from "./img/home.png"
import usuario from "./img/usuario.png"
import assistido from "./img/assistido.png"
import agendamento from "./img/agendamento.png"
import pastas from "./img/pastas.png"
import config from "./img/config.png"
import Navlink from "./NavLink.jsx"


function TelaUsuario() {

    const logos = [{icone:home, texto:"Processos", id:"processos", status:false}, {icone:usuario, texto:" Adicionar Usuário", id:"usuarios", status:true}, {icone:assistido, texto:"Assistidos", id:"botaoAssistidos", status:false}, {icone:agendamento, texto:"Agendamentos", id:"botaoAgendamentos", status:false}, {icone:pastas, texto:"Pastas", id:"botaoPastas", status:false}, {icone:config, texto:"Configurações", id:"botaoConfiguracoes", status:false}] 

    return(
        <div id="tela">
            <div class="sidebar">
                <p id="logo-emaj"> <span id="barra">|</span> EMAJ</p>
                <img src={imagem} id='imagem-perfil'></img>
                <p id="nome-aluno">Hans Rafael</p>
                <p id="tipo-de-usuario">Aluno</p>
                <div id="navlinks-div">
                {logos && logos.map((botao, i) => 
                        <Navlink 
                        key={i} 
                        imagem={botao.icone} 
                        texto={botao.texto} 
                        id={botao.id} 
                        className={botao.status ? "botao-ativo" : "" } />
                    )}
                </div>

            </div>
            <div class="main-section">
               <div class="quebra-galho">
                    <div class="header">
                <h1 id="titulo">Adicionar Usuario</h1>
                    </div>
                </div>
            </div>
                <div id="botao-processo">Adicionar novo Usuario</div>
        </div>
    )
}

export default TelaUsuario; 