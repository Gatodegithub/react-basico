import React, { useState, useEffect } from "react";

// CON useEFFECT PUEDO REPLICAR TODO EL CICLO DE VIDA.
export default function ScrollHooks() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Cada vez que se renderize el componente useEffect va a ejecutar.
    // console.log("Fase de actualizacion");

    const detectarScroll = () => setScrollY(window.pageYOffset);

    window.addEventListener("scroll", detectarScroll);

    return () => {
      window.removeEventListener("scroll", detectarScroll);
      // console.log("fase de desmontaje")
    };
  }, [scrollY]);

  useEffect(() => {
    // Sin poner una variable de estado como dependencia en el useEffect esta funcion se ejecutara solo una vez, aunque cambie una variable del estado. SOLO SE EJECUTA CUANDO ES RENDERIZADO EL COMPONENTE.
    // console.log("fase de montaje");
  }, []);

  useEffect(() => {
    return () => {
      // console.log("Fase de Desmontaje");
    };
  });

  return (
    <>
      <h2>Hooks - useEffect y el ciclo de vida</h2>
      <p>ScrollY del navegador {scrollY}px</p>
    </>
  );
}
