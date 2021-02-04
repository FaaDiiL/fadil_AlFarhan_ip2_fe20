import { Button } from '@material-ui/core'
import { purple } from '@material-ui/core/colors'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const theme = createMuiTheme({
  palette: {
    secondary: {
     main:'#000',
    },
  }
})

ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
