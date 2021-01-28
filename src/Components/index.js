import React from 'react'

import Header from './Header/'
import Main from './Main/'
import Footer from './Footer/'
import { BrowserRouter as Router } from 'react-router-dom'
function index() {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  )
}

export default index
