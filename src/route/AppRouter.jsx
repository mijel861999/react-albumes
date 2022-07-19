import React from 'react'
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { motion } from 'framer-motion'

import OptionsList from '../components/header/optionsList'
import Navbar from '../components/header/navbar'
import MainPage from '../pages/MainPage'
import ListasPage from '../pages/ListasPage'
import TopsPage from '../pages/TopsPage'
import AlbumItemPage from '../pages/AlbumItemPage'
import NewsPage from '../pages/NewsPage'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 }
}

const AppRouter = () => {
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
          <Route
            exact
            path='/news'
            element={<NewsPage />}
          />
        </Routes>
      </motion.div>
    </Router>
  )
}

export default AppRouter

