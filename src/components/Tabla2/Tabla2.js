import React, { useState, useContext } from "react";
import './Tabla2.css'

const Tabla2 = ({data}) => {
  if(data!=undefined){
    return (
      <div className="table-container" style={{marginLeft:"20vh"}}>
          <table id="data2">
                <tbody>
                    <tr className="header">
                        <th className="th">Error Medio</th>
                        <th className="th">Error Relativo</th>
                        <th className="th">Error Cuadratico</th>
                    </tr>
                    <tr >
                        <td className="td-font-weight td">{data[0]}</td>
                        <td className="td-font-weight td">{data[1]}</td>
                        <td className="td-font-weight td">{data[2]}</td>
                    </tr>
                </tbody>
            </table>
      </div>
    );
  }else{
    return(
      <div className="table-container" style={{marginLeft:"20vh"}}>
            <table id="data2">
                  <tbody>
                      <tr className="header">
                          <th className="th">Error Medio</th>
                          <th className="th">Error Relativo</th>
                          <th className="th">Error Cuadratico</th>
                      </tr>
                      <tr >
                          <td className="td-font-weight td"></td>
                          <td className="td-font-weight td"></td>
                          <td className="td-font-weight td"></td>
                      </tr>
                  </tbody>
              </table>
        </div>
    )
  }
};

export default Tabla2;