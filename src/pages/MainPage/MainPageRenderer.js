import React from "react";
import AnalizarDatos from '../AnalizarDatos/AnalizarDatos'
import IntegrarDatos from '../IntegrarDatos/IntegrarDatos'

const MainPageRenderManager = ({ screen }) => {

  const handleRender = [
    <AnalizarDatos/>,
    <IntegrarDatos/>,
  ];

    return (
      <>
        {handleRender[screen]}
      </>
    )
}

export default MainPageRenderManager