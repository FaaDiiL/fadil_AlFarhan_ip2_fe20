import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
  background: DarkGreen;
`

function index() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  )
}

export default index
