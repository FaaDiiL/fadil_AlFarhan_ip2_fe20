import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
`

function index() {
  return (
    <StyledFooter>
      <small>Made by Fadil Al Farhan!</small>
    </StyledFooter>
  )
}

export default index
