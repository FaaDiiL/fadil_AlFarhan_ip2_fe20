import { BrowserRouter as Router } from 'react-router-dom'

import Components from './Components/Drawer'
import GlobalStyle from './GlobalStyle'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Components />
    </Router>
  )
}

export default App
