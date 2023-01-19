import React, { useState, useContext } from "react";
import './Login.css'
import axios from "axios";
import { LoginContext } from "../../Context/LoginContext";
import Swal from "sweetalert2";

const Login = () => {
    const {iniciarSesion} = useContext(LoginContext)
    const [form,setForm] = useState({
        email:"",
        password:""
    })

    const handleClick = () => {
        axios.post('http://localhost:3000/api/auth',form,{headers:{
            "Access-Control-Allow-Origin": null ,
            "Accept":"*/*"
        }})
        .then((response)=>{
            iniciarSesion(response.data.token)
        })
        .catch(e=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Correo o contraseña incorrectos',
            })
            console.log(e)
        })
    }

  return (
    <div className="login-container">
       <div className="login-card">
            <div className="login-card-left">
                <h2>Analizador de datos</h2>
                <div>
                    <p>Observa series temporales,carga datos y recibe retroalimentación</p>
                </div>
            </div>
            <div className="login-card-right">
                <h2>Inicio de sesion</h2>
                <div>
                    <p>Correo electronico</p>
                    <input onChange={(e)=>setForm({...form,email:e.target.value})} value={form.email} placeholder="correo@correo"/>
                    <p>Contraseña</p>
                    <input onChange={(e)=>setForm({...form,password:e.target.value})} value={form.password} type={"password"} placeholder="Ingresa tu cotnraseña"/>
                </div>
                <button onClick={handleClick}>Iniciar sesion</button>
            </div>
       </div>
       <div className="left"></div>
       <div className="right"></div>
    </div>
  );
};

export default Login;