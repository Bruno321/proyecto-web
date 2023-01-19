import React, { useState } from "react";
import './MainPage.css'
import Header from "../../components/Header/Header";
import MainPageRenderManager from "./MainPageRenderer";

const MainPage = () => {

  const [optionSelected,setOptionSelected]  = useState(0)

  return (
    <div>
      <Header optionSelected={optionSelected} setOptionSelected={setOptionSelected}/>
      <MainPageRenderManager screen={optionSelected}/>
    </div>
  );
};

export default MainPage;