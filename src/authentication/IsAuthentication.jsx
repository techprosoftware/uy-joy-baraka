/* eslint-disable react/display-name */
import React from "react";
import { Navigate} from "react-router";
const token = localStorage.getItem('token')
const isAuth = token ? true : false;
export const IsAuthentication = (Component) => {
  return function () {
    if (!isAuth) {
      
    return <Navigate  to='/login' replace={true}/>
    }
    return <Component />;
  };
};
