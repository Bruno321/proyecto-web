import React,{useContext} from "react";
import { LoginContext } from "./Context/LoginContext";
import Login from "./Pages/Login/Login";
import {Router, Redirect} from '@reach/router'
// Pages
import MainPage from './Pages/MainPage/MainPage';

export const App = () => {
    const {isAuth} = useContext(LoginContext)

    return(
        <div>
            {/* <>Aquí pon tus pantallas para probar</> */}
            <Router>
                { isAuth != null? 
                // Hay sesion iniciada
                    <>
                        {/* <NotFound default/> */}
                        <MainPage path='/' />
                        <Redirect from='/login' to='/' noThrow />

                    </>
                : 
                // No hay sesion iniciada
                <>
                    <Login path='/login' />
                    <Redirect from='/' to='/login' noThrow />
                </>
                }
            </Router>
        </div>
    )
}