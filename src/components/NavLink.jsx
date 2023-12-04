import "./NavLink.css"
import home from "./img/home.png"
import usuario from "./img/usuario.png"
import assistido from "./img/assistido.png"
import agendamento from "./img/agendamento.png"
import pastas from "./img/pastas.png"
import config from "./img/config.png"
import { Link } from "react-router-dom"


const logos = [{icone:home, texto:"Processos", id:"botaoProcessos", status:true}, {icone:usuario, texto:" Adicionar Usuário", id:"botaoAdicionarUsuario", status:false}, {icone:assistido, texto:"Assistidos", id:"botaoAssistidos", status:false}, {icone:agendamento, texto:"Agendamentos", id:"botaoAgendamentos", status:false}, {icone:pastas, texto:"Pastas", id:"botaoPastas", status:false}, {icone:config, texto:"Configurações", id:"botaoConfiguracoes", status:false}] 


function Navlink({ imagem, texto, id, className, onClick }) {
    return (
      <div className={`navlink ${className}`} id={id} onClick={onClick}>
        <img src={imagem} alt={texto} />
        <span><Link to={`/${id}`} className="texto-link">{texto}</Link></span>
      </div>
    );
}

export default Navlink