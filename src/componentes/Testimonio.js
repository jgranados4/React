import "../style/Testimonio.css";

function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagenes-testimonio"
        src={require(`../imagenes/${props.imagen}.jpg`)}
        alt="foto de emma"
      />
      <div className="contenedor-textotestimonio">
        <p className="nombretestimonio">
          {props.nombre} en {props.pais}
        </p>
        <p className="cargotestimonio">
          {props.cargo}en{props.empresa}
        </p>
        <p className="texto-testimonio">"{props.Testimonio}"</p>
      </div>
    </div>
  );
}

// const testimonio = ()=>{
// }
export default Testimonio;
