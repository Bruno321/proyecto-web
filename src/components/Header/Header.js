import React, { useState, useContext } from "react";
import './Header.css'

const Header = ({optionSelected,setOptionSelected}) => {

  return (
    <header>
        <div onClick={()=>setOptionSelected(0)}>
            <p>Analizar datos</p>
            <div  className={optionSelected==0 ? "hovered":null}></div>
        </div>
        <div onClick={()=>setOptionSelected(1)}>
            <p>Integrar datos</p>
            <div  className={optionSelected==1 ? "hovered":null}></div>
        </div>
    </header>
  );
};

export default Header;