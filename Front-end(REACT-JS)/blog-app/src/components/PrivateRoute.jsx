import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
// import { Navigate, Outlet } from 'react-router';   this is wrong 
import { isLoggedIn } from '../Auth';

const PrivateRoute=()=> {

    // return isLoggedIn()?<Outlet/>:<Navigate to={"/login"}/>
    // return(

    //    <>
    //    <h1>This is private route</h1>
    //    <Outlet/>
    //    </>
    // )
   //

   //perfectly working
    // let loggedId=false;

    // if(loggedId){

    //     return <Outlet/>
    // }else
    // return <Navigate to={"/login"}/>;


    // way 2:
// console.log(isLoggedIn);
    // if(isLoggedIn()){

    //     return(
    //         <>
    //         console.log(isLoggedIn);
    //         <Outlet/>
    //         </>)
    // }else
    // return(
    //     <>
    //     console.log(isLoggedIn);
    //     <Navigate to={"/login"}/>
    //     </>
    // );

//way 3
    return isLoggedIn()?<Outlet/>:<Navigate to={"/login"}/>
}

export default PrivateRoute;