import "./NavLink.css"


function Navlink({imagem, texto, id}){
    return(
        <div>
            <p class="navlink" id={id}> <img src={imagem} id='imagem-config'></img> {texto}</p>
        </div>
    )
}

export default Navlink