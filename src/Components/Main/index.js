import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import { Switch, Route } from 'react-router-dom'

function index() {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/projects'>
        <Projects />
      </Route>
    </Switch>
  )
}

export default index
