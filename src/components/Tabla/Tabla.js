import React, { useState, useContext } from "react";
import './Tabla.css'

const Tabla = ({data,k,j}) => {

    let a = []
    let b = []
    for(let i = 0;i<k;i++){
        a.push(i)
    }
    for(let i = 0;i<k+j;i++){
        b.push(i)
    }
    for(let i=0;i<k;i++){
        data.pms.unshift(null)
    }
    for(let i=0;i<k+j;i++){
        data.pmd.unshift(null)
        data.pmda.unshift(null)
    }
    
  return (
    <div className="table-container">
        <div className="tabla-troll">
            <div className="tt">
                <div className="cont">Fecha</div>
                {
                    data.fecha.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Valor</div>
                
                {
                    data.valor.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Promedio simple</div>
                {
                    data.ps.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Promedio movil simple</div>
                {
                    a.map((e,i)=>(
                        <div className="el" key={i}>-</div>
                    ))
                }
                {
                    data.pms.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Promedio movil doble</div>
                {
                    b.map((e,i)=>(
                        <div className="el" key={i}>-</div>
                    ))
                }
            {
                    data.pmd.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Promedio movil doble ajustado</div>
                {
                    b.map((e,i)=>(
                        <div className="el" key={i}>-</div>
                    ))
                }
            {
                    data.pmda.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
            <div className="tt">
                <div className="cont">Ptmac</div>
                <div className="el" >-</div>
            {
                    data.tmac.map((e,i)=>(
                        <div className="el" key={i}>{e}</div>
                    ))
                }
            </div>
        </div>
        {/* <table id="data">
            <tbody>
                <tr className="header">
                    <th className="th">Promedio simple</th>
                    <th className="th">Promedio movil simple</th>
                    <th className="th">Promedio movil doble</th>
                    <th className="th">Promedio movil doble ajustado</th>
                    <th className="th">Ptmac</th>
                </tr>
                <tr >
                    <td className="td-font-weight td">1</td>
                    <td className="td-font-weight td">1</td>
                </tr>
                <tr >
                    <td className="td-font-weight td">2</td>
                    <td className="td-font-weight td">2</td>
                </tr>

            </tbody>
        </table> */}
    </div>
  );
};

export default Tabla;