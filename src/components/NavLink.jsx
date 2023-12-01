import "./NavLink.css"

function Navlink({ imagem, texto, id, className }) {
    return (
      <div className={`navlink ${className}`} id={id}>
        <img src={imagem} alt={texto} />
        <span>{texto}</span>
      </div>
    );
}

export default Navlink