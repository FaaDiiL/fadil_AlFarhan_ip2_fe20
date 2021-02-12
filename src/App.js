import { BrowserRouter as Router } from 'react-router-dom'

import About from './About'
import Contact from './Contact'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Home />
      <Header />
      <About />
      <Projects />
      <Contact />

    </Router>
  )
}

export default App
