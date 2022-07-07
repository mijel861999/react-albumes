import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';

import OptionsList from '../components/header/optionsList';
import Navbar from '../components/header/navbar'
import MainPage from '../pages/MainPage'
import ListasPage from '../pages/ListasPage';
import TopsPage from '../pages/TopsPage';
import AlbumItemPage from '../pages/AlbumItemPage';

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <OptionsList />
        <Routes>
          <Route
            index
            path='/*' 
            element={<MainPage />}  
          /> 
          <Route
            path='/tops'
            element={<TopsPage />}
          />
          <Route
            path='/listas'
            element={<ListasPage />}
          />
          <Route
            exact
            path='/listas/listActive'
            element={<AlbumItemPage />}
          />
        </Routes>
      </div>
    </Router>
  )
}

export default AppRouter

