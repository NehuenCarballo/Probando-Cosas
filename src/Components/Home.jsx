import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea"
 
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
    setArreglo([...arreglo, { nombre: 'nuevo', visto: true }]);
    
  };
  let listado = [
    { nombre: "Instalaciones Necesarias", visto: true },
    { nombre: "Hooks", visto: true },
    { nombre: "Props", visto: true },
    { nombre: "Componentes", visto: false },
  ];
  const [arreglo, setArreglo] = useState(listado);

  /*const handleClick = () => {
     setContador (contador + 1)
    console.log(num)
  }*/

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

      <AgregarTarea agregarTarea={setArreglo}></AgregarTarea>

      <ol>
        {arreglo.map((item) => (
          <Item
            key={item.nombre}
            nombre={item.nombre}
            visto={item.visto}
          ></Item>
        ))}
      </ol>


      {/* <button onClick={() => addTask()}>Agregar Tarea</button> */}
    </>
  );
}
