import React from 'react'
import Login from '../../pages/Login'
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
    <Login></Login>
    <Outlet></Outlet>
    </>
  )
}

export default Main;