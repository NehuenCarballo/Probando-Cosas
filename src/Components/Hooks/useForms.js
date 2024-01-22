import { useState } from "react";

export const useForms = (initialForm = {}) => {
  const [Formulario, setFormulario] = useState(initialForm)


  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormulario({
      ...Formulario,
      [name]: value,
    });
  };

  return {
    Formulario,
    onInputChange
  }

}
