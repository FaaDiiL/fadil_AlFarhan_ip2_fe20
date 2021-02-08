import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'

const StyledMain = styled.main`
  padding: 10px;
  min-height: 90vh;
`

function index() {
  return (
    <StyledMain>
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
    </StyledMain>
  )
}

export default index
