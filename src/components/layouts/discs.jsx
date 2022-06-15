import React from 'react'

const variants = {
	hidden: { opacity: 0, x: 0, y: 20 },
	enter: { opacity: 1, x: 0, y: 0 },
	exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  return (
    <motion.discs
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      <>
        { title && (
            <h1>{title}</h1>
        )}
      </>
      {children}
    </motion.discs>
  )
}

export default Layout
