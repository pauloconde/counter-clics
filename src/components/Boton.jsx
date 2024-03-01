import React from "react";
import '../styles/Boton.css'

export default function Boton({ texto, tipoClic, manejarClic }) {
  return (
    <button className={tipoClic ? "boton-clic" : "boton-reiniciar"}
    onClick={manejarClic}>
      {texto}
    </button>
  );
}
