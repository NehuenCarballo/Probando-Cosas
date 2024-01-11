import { useState } from "react";

export const AgregarTarea = ({agregarTarea}) => {
  const [inputValue, setinputValue] = useState('');
  const onInputChange = (event) => {
    setinputValue(event.target.value);
  };
  
  const onSubmit = (event) => {
    const envio = {
      nombre : inputValue,
      visto : false,
    }
    event.preventDefault();
    agregarTarea(tareas => [...tareas,envio] )
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Ingresa Nueva Tarea"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
