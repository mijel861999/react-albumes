import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import OptionsList from '../components/header/optionsList'
import Navbar from '../components/header/navbar'
import MainPage from '../pages/MainPage'
import ListasPage from '../pages/ListasPage'
import TopsPage from '../pages/TopsPage'
import AlbumItemPage from '../pages/AlbumItemPage'
import NewsPage from '../pages/NewsPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 }
}

const AppRouter = () => {
  const { isLogged } = useSelector(state => state.auth)

  return (
    <Router>
      <motion.div
        initial="hidden" 
		    animate="enter" 
		    exit="exit" 
		    variants={ variants }
		    transition={{ duration: 0.4, type: 'easeInOut' }}
		    style={{ position: 'relative' }}
      >
        <Routes>  
          <Route
            index
            path='/login'
            element={
              <PublicRoute
                isLogged={isLogged}
              >
                <Navbar />
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path='/register'
            element={
              <PublicRoute
                isLogged={isLogged}
              >
                <Navbar />
                <RegisterPage />
              </PublicRoute> 
            }
          />
          <Route
            index
            path='/*' 
            element={
              <PrivateRoute
                isLogged={isLogged}
              >
                <Navbar />
                <OptionsList />
                <MainPage />
              </PrivateRoute>
              
            }  
          /> 
          <Route
            path='/tops'
            element={
              <PrivateRoute isLogged={isLogged}>
                <Navbar />
                <OptionsList />
                <TopsPage />
              </PrivateRoute>
            }
          />
          <Route
            path='/listas'
            element={
              <PrivateRoute isLogged={isLogged}>
                <Navbar />
                <OptionsList />
                <ListasPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/listas/listActive'
            element={
              <PrivateRoute isLogged={isLogged}>
                <Navbar />
                <OptionsList />
                <AlbumItemPage />
              </PrivateRoute>
            }
          />
          <Route
            exact
            path='/news'
            element={
              <PrivateRoute isLogged={isLogged}>
                <Navbar />
                <OptionsList />
                <NewsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </motion.div>
    </Router>
  )
}

export default AppRouter

