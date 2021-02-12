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
      <div className='w3-content'>
        <Header />
        <About />
        <Projects />
        <Contact />
      </div>
    </Router>
  )
}

export default App
