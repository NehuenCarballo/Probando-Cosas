import { useForms } from "../Components/Hooks/useForms";

export const Formulario = () => {
  const initialForm = {
    usuario: '',
    email: '',
    contraseña: '',
  };
  const { Formulario, onInputChange } = useForms(initialForm);

  const { usuario, email, contraseña } = Formulario

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(Formulario);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="usuario" className="form-label">
          Usuario
        </label>
        <input
          type="usuario"
          className="form-control"
          name="usuario"
          placeholder="Ingrese su Usuario"
          value={usuario}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder="Ingrese su Contraseña"
          value={email}
          onChange={onInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contraseña" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          name="contraseña"
          placeholder="Ingrese su Contraseña"
          value={contraseña}
          onChange={onInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}


