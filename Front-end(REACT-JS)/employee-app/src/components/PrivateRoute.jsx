import React from 'react'
// import { Outlet ,Navigate} from 'react-router-dom';
// import { Outlet,Navigate } from 'react-router-dom';
import {Navigate,Outlet} from 'react-router'; 
import { isLoggedIn } from '../Auth';

const PrivateRoute=()=> {

    // let loggedIn=false;
     // if(isLoggedIn()){
    //     return <Outlet/>
    // }else{
    //     return <Navigate to={"/login"}/>;
    // }

    return isLoggedIn()?<Outlet/>:<Navigate to={"/login"}/>

}

export default PrivateRoute;