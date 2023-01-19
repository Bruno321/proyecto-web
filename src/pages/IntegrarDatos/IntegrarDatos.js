import React, { useState } from "react";
import './IntegrarDatos.css'
import axios from "axios";
import Swal from "sweetalert2";

const IntegrarDatos = () => {

  const [file,setFile]  = useState(null)
  const [filtros,setFiltros] = useState([])
  const handleClick = () => {
    let oSend = new FormData();
    oSend.append("archivo",file)
    console.log(oSend)
    axios.post("http://localhost:3000/api/upload",oSend,{headers:{
      'Content-Type': 'multipart/form-data',
      "Access-Control-Allow-Origin": null ,
      "Accept":"*/*"
    }})
    .then(r=>{
      console.log(r.data)
      Swal.fire(
        `Se subio el ${r.data.porcentaje}% de ${r.data.FILE_NAME}`,
        `Se subieron ${r.data.datosSubidos} datos y fueron ${r.data.lineasTotales} lineas`,
        'success'
      )
    })
    .catch(e=>{
      console.log(e)
    })
  }

  const handleSubmit = () => {
    axios.post("http://localhost:3000/api/filtro",{filtros},{headers:{
      "Access-Control-Allow-Origin": null ,
      "Accept":"*/*"
    }})
    .then(r=>{
      console.log(r.data)
      Swal.fire(
        `Se borraron ${r.data.borrados} registros`,
        `De las opciones ${r.data.seleccionados}`,
        'success'
      )
    })
    .catch(e=>{
      console.log(e)
    })
  }

  console.log(filtros)
  return (
    <div className="integrar-container">
      <h1>Sube un archivo</h1>
      <input type={"file"} onChange={(e)=>setFile(e.target.files[0])}/>
      <button onClick={handleClick}>Cargar</button>
        <h1>Aplica filtros </h1>
      <div>
          <label>Mapa</label>
          <input type={"checkbox"} value={0} onClick={(e)=>setFiltros([...filtros, e.target.value])}/>
          <label>CVE_ENT</label>
          <input type={"checkbox"} value={1} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>NOM_ENT</label>
          <input type={"checkbox"} value={2} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>NOM_ABR</label>
          <input type={"checkbox"} value={3} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>CVE_MUN</label>
          <input type={"checkbox"} value={4} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>NOM_MUN</label>
          <input type={"checkbox"} value={5} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>CVE_LOC</label>
          <input type={"checkbox"} value={6} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>NOM_LOC</label>
          <input type={"checkbox"} value={7} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Ambito</label>
          <input type={"checkbox"} value={8} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Latitud</label>
          <input type={"checkbox"} value={9} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Longitud</label>
          <input type={"checkbox"} value={10} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Lat_Decimal</label>
          <input type={"checkbox"} value={11} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Lon_Decimal</label>
          <input type={"checkbox"} value={12} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Altitud</label>
          <input type={"checkbox"} value={13} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>CVE_Carta</label>
          <input type={"checkbox"} value={14} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Pob_Total</label>
          <input type={"checkbox"} value={15} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Pob_Masculina</label>
          <input type={"checkbox"} value={16} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Pob_Femenina</label>
          <input type={"checkbox"} value={17} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
          <label>Total_Viviendas</label>
          <input type={"checkbox"} value={18} onClick={(e)=>setFiltros([...filtros,e.target.value])}/>
      </div>
          <button className="checar" onClick={handleSubmit}>Checar</button>
    </div>
  );
};

export default IntegrarDatos;