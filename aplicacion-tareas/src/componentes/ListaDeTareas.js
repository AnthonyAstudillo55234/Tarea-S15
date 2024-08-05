import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../estilos/listaDeTareas.css';

function ListaDeTareas() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = texto => {
    const nuevaTarea = {
      id: Math.random().toString(36).substr(2, 9),
      texto: texto,
      completada: false
    };
    setTareas([nuevaTarea, ...tareas]);
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario agregarTarea={agregarTarea} />
      <div className='lista-tareas'>
        {
          tareas.map((tarea) =>
            <Tarea 
              key={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={() => eliminarTarea(tarea.id)} />
          )
        }
      </div>
    </>
  );
}

export default ListaDeTareas;
