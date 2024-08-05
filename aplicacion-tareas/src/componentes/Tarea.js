import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import '../estilos/tareas.css';

function Tarea({ texto, completada, eliminarTarea }) {
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiOutlineCloseCircle 
          className='tarea-icono'
          onClick={eliminarTarea} />
      </div>
    </div>
  );
}

export default Tarea;
