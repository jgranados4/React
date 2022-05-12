import React from 'react';
import '../style/Testimonio.css';

 function Testimonio() {
    return (
      <div className="contenedor-testimonio">
        <img
          className="imagenes-testimonio"
          src={require("../imagenes/ima.jpg")}
          alt="foto de emma"
        />
        <div className="contenedor-textotestimonio">
          <p className="nombretestimonio">Emma bostion en sucia</p>
          <p className="cargotestimonio">Ingeniero de software</p>
          <p className="texto-testimonio">
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar
            de las industrias desde el año 1500, cuando un impresor (N. del T.
            persona que se dedica a la imprenta) desconocido usó una galería de
            textos y los mezcló de tal manera que logró hacer un libro de textos
            especimen. No sólo sobrevivió 500 años, sino que tambien ingresó
            como texto de relleno en documentos electrónicos, quedando
            esencialmente igual al original. Fue popularizado en los 60s con la
            creación de las hojas "Letraset", las cuales contenian pasajes de
            Lorem Ipsum, y más recientemente con software de autoedición, como
            por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem
            Ipsum.
          </p>
        </div>
      </div>
    );
}


// const testimonio = ()=>{
// }
export default Testimonio;