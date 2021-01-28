import React from 'react'
import styled from 'styled-components'

import Navigation from './Navigation'

const StyledHeader = styled.header`
  background-color: var(--morning-blue);
`

function index() {
  return (
    <StyledHeader>
      <Navigation />
    </StyledHeader>
  )
}

export default index
