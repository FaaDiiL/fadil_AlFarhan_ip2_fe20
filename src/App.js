import { useEffect, useState } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import About from './About'
import Admin from './Admin'
import Contact from './Contact'
import firebase from './firebase'
import GlobalStyle from './GlobalStyle'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'

function App() {
  const [mails, setMails] = useState([])
  useEffect(
    () => {
      firebase
      .database()
      .ref('mails')
      .on('value', (snapshot) => {
        if(snapshot.exists()){
          const usersObject = snapshot.val()
          const usersList = Object.keys(usersObject).map((key) => ({
            ...usersObject[key],
            uid: key,
          })
          )
          setMails(usersList)

        }
      })
    },[])
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
      <Route path='/admin'>
        <Admin messages={mails} />
      </Route>
    </Router>
  )
}

export default App
