// import { Component } from 'react';
import {
  // BrowserRouter,
  // Route,
  Link,
  // NavLink,
  //   Routes,
  Outlet,
} from "react-router-dom";

const LoginScreen = () => {
    return (
        <>
            <h1>LOGIN</h1>
        <Link to="photodetail">photodetail</Link >
           <Outlet /> 
        </>
            );
            
}

export default LoginScreen;