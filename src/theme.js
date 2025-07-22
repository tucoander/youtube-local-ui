import { extendTheme } from '@chakra-ui/react'

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const colors = {
  gray: {
    900: '#0f0f0f', // fundo principal (quase preto)
    800: '#1f1f1f', // cards e caixas
    700: '#2a2a2a', // bordas sutis
  },
  white:{
    400: '#dddddd',
  },
  text: {
    primary: '#ffffff',
    secondary: '#aaaaaa'
  }
}

const theme = extendTheme({ config, colors })

export default theme
