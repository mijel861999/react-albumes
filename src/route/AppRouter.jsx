import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';

import MainPage from '../pages/MainPage'
import Navbar from '../components/navbar'
import OptionsList from '../components/optionsList';
import ListasPage from '../pages/ListasPage';
import TopsPage from '../pages/TopsPage';
import DiscosPage from '../pages/DiscosPage';
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
            path='/discos'
            element={<DiscosPage />}
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