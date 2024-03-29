import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✔" : "💔"}
    </li>
  );
};

export default function Home() {
  //const [contador, setContador] = useState (500)
  const addTask = () => {
    setArreglo([...arreglo, { nombre: "nuevo", visto: true }]);
  };
  let listado = [
    { id: 1, nombre: "Instalaciones Necesarias", visto: true },
    { id: 2, nombre: "Hooks", visto: true },
    { id: 3, nombre: "Props", visto: true },
    { id: 4, nombre: "Componentes", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listado);

  /*const handleClick = () => {
     setContador (contador + 1)
    console.log(num)
  }*/

  const onAgregarTarea = (val) => {
    if (val < 1) return;
    const envio = {
      id: arreglo.length + 1,
      nombre: val,
      visto: false,
    };
    setArreglo([...arreglo, envio]);
  };

  return (
    <>
      {/* <ul>
        <il>
            <h1>Contador</h1>
               //<p>{contador} </p>
              //<button onClick={handleClick}> Soy un Boton </button> 
        </il>
    </ul> */}

      <h1>Mapeo</h1>

      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>

      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.id}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>

      {/* <button onClick={() => addTask()}>Agregar Tarea</button> */}
    </>
  );
}
