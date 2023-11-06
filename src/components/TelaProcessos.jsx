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
import editIcon from "./img/edit-icon.png"
import trashIcon from "./img/trash-icon.png"
import invisibleIcon from "./img/invisible-icon.png"

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
                        <Navlink key={i} imagem={botao.icone} texto={botao.texto} id={botao.id}/>
                    )}
                </div>

                <div id="botao-sair">
                    <p>Sair <img src={saida} id='imagem-saida'></img></p>
                </div>

            </div>
            <div class="main-section">
                <div class="quebra-galho">
                    <div class="header">
                        <div class="filtro-tempo">
                            <table>
                                <tr>
                                    <td>Today</td>
                                    <td>Yesterday</td>
                                    <td>Last 7 days</td>
                                    <td>Last 30 days</td>
                                    <td>Last Month</td>
                                    <td>17-02-2023</td>
                                </tr>
                            </table>
                        </div>
                        <div class="filtro">
                            <table>
                                <tr>
                                    <td class="texto-filtro">Escritório</td>
                                    <td class="td-select">
                                        <select name="escritorio-select" id="select-escritório">
                                            <option value="" disabled selected>filtrar escritório</option>
                                            <option value="escritorioX">Escritório 1</option>
                                            <option value="escritorioX">Escritório 2</option>
                                        </select>
                                    </td>
                                    <td class="espaco"></td>

                                    <td class="texto-filtro">Assunto</td>
                                    <td class="td-select">
                                        <select name="assunto-select" id="select-escritório">
                                            <option value="" disabled selected>filtrar assunto</option>
                                            <option value="escritorioX">Assunto 1</option>
                                            <option value="escritorioX">Assunto 2</option>
                                        </select>
                                    </td>
                                    <td class="espaco"></td>

                                    <td class="texto-filtro">Número do Processo</td>
                                    <td class="td-select">
                                        <select name="id-select" id="select-id">
                                            <option value="" disabled selected>filtrar número</option>
                                            <option value="escritorioX">123456789</option>
                                            <option value="escritorioX">123456789</option>
                                        </select>
                                    </td>    
                                    <td class="espaco"></td>

                                    <td class="texto-filtro">Status</td>
                                    <td class="td-select">
                                        <select name="status-select" id="select-status">
                                            <option value="" disabled selected>filtrar status</option>
                                            <option value="escritorioX">Pendente</option>
                                            <option value="escritorioX">Concluído</option>
                                        </select>
                                    </td> 
                                    <td class="espaco"></td>

                                    <td class="texto-filtro" id="clean">Clean</td>
                                    <td class="texto-filtro" id="search">Search</td>
                                </tr>
                            </table>
                            </div>
                    </div>
                    <div id="botao-processo">Adicionar novo processo</div>
                </div>
                <h1 id="titulo">Processos</h1>
                <div class="content-table">
                    <table>
                        <tr id="titulos-tabela">
                            <td class="titulo-tabela" id="data">Data inserção</td>
                            <td class="titulo-tabela" id="escritorio">Escritório</td>
                            <td class="titulo-tabela" id="Assunto">Assunto</td>
                            <td class="titulo-tabela" id="numero-processo">Número processo</td>
                            <td class="titulo-tabela" id="status">Status</td>
                            <td /*Titulo Vazio para formatar icone*/>   </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 1</td>
                            <td class="conteudo-tabela">Assunto 1</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Concluído</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 2</td>
                            <td class="conteudo-tabela">Assunto 2</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Ação Pendente</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 3</td>
                            <td class="conteudo-tabela">Assunto 3</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Concluído</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 4</td>
                            <td class="conteudo-tabela">Assunto 4</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Ação Pendente</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 5</td>
                            <td class="conteudo-tabela">Assunto 5</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Em julgamento</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 6</td>
                            <td class="conteudo-tabela">Assunto 6</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Ação Pendente</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td class="conteudo-tabela">10/10/2021</td>
                            <td class="conteudo-tabela">Escritório 7</td>
                            <td class="conteudo-tabela">Assunto 7</td>
                            <td class="conteudo-tabela">123456789</td>
                            <td class="conteudo-tabela">Ação Pendente</td>
                            <td class="conteudo-tabela" id="icone">
                                <div class="icon-div">
                                    <img src={invisibleIcon} alt="" class="invisible-icon" />
                                    <img src={editIcon} alt=""  class="edit-icon"/>
                                    <img src={trashIcon} alt="" class="trash-icon"/>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        
        </div>
    )
}

export default TelaProcessos; 