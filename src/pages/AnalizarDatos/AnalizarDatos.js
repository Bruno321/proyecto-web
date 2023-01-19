import React, { useState, useEffect } from "react";
import './AnalizarDatos.css'
import axios from "axios";
import Tabla from "../../components/Tabla/Tabla";
import Tabla2 from "../../components/Tabla2/Tabla2";
import { Chart } from "react-google-charts";

 

const AnalizarDatos = () => {
  const [form,setForm] = useState({
    k:0,
    j:0,
    m:0,
    a:0,
    value:0
  })
  const [chart,setChart] = useState(false)

  const [options2,setOptions2] = useState()
  const [data2,setData2] = useState()

  const [bestOption,setBestOption] = useState(0)
  const [bestOptionEs,setBestOptionEs] = useState(0)
  const text= [
    "Promedio simple",
    "Promedio movil simple",
    "Promedio movil doble",
    "Promedio movil doble ajustado",
    "Ptmac",
  ]
  const [options,setOptions] = useState([])
  const [data,setData] = useState({
      fecha:[],
      valor:[],
      ps:[],
      pms:[],
      pmd:[],
      pmda:[],
      tmac:[],
})
  const handleClick = (num) => {
    setForm({...form,value:num})
  }
  const handleSubmit = ()=> {
    axios.post('http://localhost:3000/api/analyze',form,{headers:{"Access-Control-Allow-Origin": null ,"Accept":"*/*"}})
    .then(r=>{
      let res = r.data
      
      setOptions([
        [[res.psData.errorMedio],[res.psData.errorRelativo],[res.psData.errorCuadratico]],
        [[res.pmsData.errorMedio],[res.pmsData.errorRelativo],[res.pmsData.errorCuadratico]],
        [[res.pmdData.errorMedio],[res.pmdData.errorRelativo],[res.pmdData.errorCuadratico]],
        [[res.pmdaData.errorMedio],[res.pmdaData.errorRelativo],[res.pmdaData.errorCuadratico]],
        [[res.ptmacData.errorMedio],[res.ptmacData.errorRelativo],[res.ptmacData.errorCuadratico]]
      ])
  
      setBestOptionEs(res.iV)
      setBestOption(res.iV)
      setData({
        fecha:res.dates,
        valor:res.prices,
        ps:res.psData.ps,
        pms:res.pmsData.pmd,
        pmd:res.pmdData.pmd,
        pmda:res.pmdaData.pmda,
        tmac:res.ptmacData.ptmac,
      });

      setOptions2({
        hAxis: {
          title: "Fecha",
        },
        vAxis: {
          title: "Precio",
        },
        series: {
          1: { curveType: "function" },
        },
      })
      let chartData = [["x", "Precio", "Promedio simple","promedio movil simple","Promedio movil doble","Promedio movil doble ajustado","Ptmac"]]
      let newPrices = res.prices
      newPrices.push(null)
      let newDates = res.dates
      newDates.push("Sep 30")
      let newPs = res.psData.ps
      let newPms = res.pmsData.pmd
     
      let newPmd = res.pmdData.pmd
      let newPmda = res.pmdaData.pmda
      let newPtmac = res.ptmacData.ptmac
      
      newPrices.forEach((e,i) => {
        let subArr = []
        subArr.push(newDates[i])
        subArr.push(e)
        subArr.push(newPs[i])
        subArr.push(newPms[i])
        subArr.push(newPmd[i])
        subArr.push(newPmda[i])
        subArr.push(newPtmac[i])
        chartData.push(subArr)
      });

      // [[valor de X, valorA, B,C]]
       setData2(chartData)
      console.log(chartData[1])
    })
    .catch(e=>{
      console.log(e)
    })
  }


  

  return (
    <div className="analizar-container">
      <div className="opciones-container">

        <div className="select-container">
          <div className="buttons-container">
            <button onClick={()=>handleClick(0)} className={form.value==0 ? "hovered-select":null}>Valor del Bitcoin</button>
            <button onClick={()=>handleClick(1)} className={form.value==1 ? "hovered-select":null}>Precio de las acciones de Amazon</button>
          </div>

          <div className="ingresar-valores">
            <h2>Ingresa los valores</h2>
            <div>
              <label>K:</label>
              <input placeholder="K" value={form.k} onChange={(e)=>setForm({...form,k:parseInt(e.target.value) })} />
              <label>J:</label>
              <input placeholder="J" value={form.j} onChange={(e)=>setForm({...form,j:parseInt(e.target.value) })} />
              <label>M:</label>
              <input placeholder="M" value={form.m} onChange={(e)=>setForm({...form,m:parseInt(e.target.value) })} />
              <label>A:</label>
              <input placeholder="A" value={form.a} onChange={(e)=>setForm({...form,a:parseInt(e.target.value) })} />
            </div>
            <button onClick={handleSubmit}>Cargar datos</button>
            <button onClick={()=>setChart(!chart)}>{chart===false ? "Ver grafica" : "Quitar grafica"}</button>
          </div>
        </div>

        <div className="opciones">
          <h2>La mejor opcion es: {text[bestOptionEs]}</h2>
          <div>
            <button onClick={()=>setBestOption(0)} className={bestOption==0 ? "hovered-select":null} >Promedio simple</button>
            <button onClick={()=>setBestOption(1)} className={bestOption==1 ? "hovered-select":null} >Promedio movil simple</button>
            <button onClick={()=>setBestOption(2)} className={bestOption==2 ? "hovered-select":null} >Promedio movil doble</button>
            <button onClick={()=>setBestOption(3)} className={bestOption==3 ? "hovered-select":null} >Promedio movil doble ajustado</button>
            <button onClick={()=>setBestOption(4)} className={bestOption==4 ? "hovered-select":null} >Ptmac</button>
          </div>
          <Tabla2 data={options[bestOption]}/>
        </div>
      </div>

      {chart===true ? 
      <div style={{marginTop:"10vh"}}>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data2}
          options={options2}
        />
      </div>  
      : 
      <Tabla data={data} k={form.k} j={form.j}/>
      }

    </div>
  );
};

export default AnalizarDatos;