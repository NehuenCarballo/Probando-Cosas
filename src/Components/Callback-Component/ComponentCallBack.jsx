import { useCallback, useState } from "react";
import { Incrementar } from "./EjercicioIncrementar";

export const ComponentCallBack = () => {
  const [contador, setContador] = useState(0);

  const incrementarPadre = useCallback((valor) => {
    setContador((contador) => contador + valor);
  }, []);

  return (
    <>
      <h1>Contador: {contador} </h1>
      <Incrementar incrementar={incrementarPadre}></Incrementar>
    </>
  );
};
