import React, {useRef} from "react";
// LAS REFERENCIAS SE USAN PARA MANIPULAR EL DOM, PERO NO DIRECTAMENTE, YA QUE ASI LO RECOMIENDA REACT.
export default function Referencias() {

  // lAS DEFINO COMO LET Por que si en algun momento esas referencias dejan de existir, esa variable cambiaría su valor a undefined
  let refMenu = useRef(),
    refMenuBtn = useRef();
  
  // console.log(refMenu, refMenuBtn);

  const handleToggleMenu = (e) => {
    if(refMenuBtn.current.textContent === "Menú"){
      refMenuBtn.current.textContent = "Cerrar";
      refMenu.current.style.display = "block";
    }else{
      refMenuBtn.current.textContent = "Menú";
      refMenu.current.style.display = "none";
    }
  };

  return (
    <>
      <h2>Referencias</h2>
      <button ref={refMenuBtn} id="menu-btn" onClick={handleToggleMenu}>
        Menú
      </button>
      <nav ref={refMenu} id="menu" style={{display:"none"}}>
        <a href="false">Sección 1</a>
        <br />
        <a href="false">Sección 2</a>
        <br />
        <a href="false">Sección 3</a>
        <br />
        <a href="false">Sección 4</a>
        <br />
        <a href="false">Sección 5</a>
      </nav>
    </>
  );
}
