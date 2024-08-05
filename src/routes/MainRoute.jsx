import React from 'react'
import { Route, Routes } from 'react-router-dom'


import PrivateRoute from './PrivateRoute'
import Body from '../components/Body/Body'
import Login from '../components/Login'
import Registration from '../components/Registration'
import Home from '../pages/Home'


const MainRoute = () => {
  return (
    <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
          } />
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Registration/>}></Route>
    </Routes>
  )
}

export default MainRoute
