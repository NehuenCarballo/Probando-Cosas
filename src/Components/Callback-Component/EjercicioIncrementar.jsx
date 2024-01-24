import React from "react";

export const Incrementar = React.memo(({ incrementar }) => {
  console.log("Escribo");
  return <button onClick={() => incrementar(50)}>+1</button>;
});
