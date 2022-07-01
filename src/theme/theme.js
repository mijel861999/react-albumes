import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#F2F2F2', '#1A2601')(props),
      color: mode('#1A2601','#F2F2F2')(props)
    },
    h1: {
      fontWeight: 'bold'
    },
    h2: {
      color: 'white',
      fontWeight: 'bold',
    }
  })
}

const breakpoints = {
  sm: '30em',
  md: '48em'
}

const sizes = {
  sizes: {
    '2xs': '0.125rem'
  }
}

const borderRadius = {
  radii: {
    none: '0',
    sm: '0.125rem',
    base: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },
}

const colors = {
  brand: {
    900: '#1A2601',
    800: '#6E8C03',
    700: '#465902',
    600: '#98A668'
  }
}

const components = {

}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

const theme = extendTheme({ breakpoints, sizes, borderRadius, colors, config, styles })

export default theme
