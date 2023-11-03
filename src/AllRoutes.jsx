import React from 'react'
import { Routes , Route } from 'react-router-dom'

import Home from './components/Home'
import Imprints from './components/Imprints'


const AllRoutes = () => {
  return (
    <div>
      <Routes>            
        <Route path='/' Component={Home}> </Route>
        <Route path='/imprints' Component={Imprints} > </Route> 
        {/* <Route path='/' element={<Home />} > </Route> */}

      </Routes>
    </div>
  )
}

export default AllRoutes
