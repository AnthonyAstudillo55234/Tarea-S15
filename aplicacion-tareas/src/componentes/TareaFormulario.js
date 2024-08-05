import React, { useState } from 'react';
import '../estilos/tareaFormulario.css';

function TareaFormulario({ agregarTarea }) {
  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();
    if(input.trim()){
      agregarTarea(input.trim());
      setInput('');
    }
  };

  return (
    <form className='tarea-formulario' onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        value={input}
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>Agregar Tarea</button>
    </form>
  );
}

export default TareaFormulario;

