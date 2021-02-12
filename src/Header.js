import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  li {
    font-size: 150%;
    color: Black;
    text-decoration: none;
  }
  li:hover,
  li:active,
  li:focus {
    color: #0073b2;
    text-decoration: none;
    cursor: pointer;
  }
  .active {
    color: teal;
  }
`

function Header() {
  const location = useLocation() // To get the url / hash
  let currentHash = location.hash

  useLocation()
  return (
    <header className='sticky'>
      <StyledNav>
        <li
          onClick={() => (window.location.href = '#Home')}
          className={`w3-padding-small ${
            currentHash === '#Home' || !currentHash ? 'active' : ''
          } `}
        >
          Home
        </li>
        <li
          onClick={() => (window.location.href = '#About')}
          className={`w3-padding-small ${
            currentHash === '#About' ? 'active' : ''
          } `}
        >
          About
        </li>
        <li
          onClick={() => (window.location.href = '#Projects')}
          className={`w3-padding-small ${
            currentHash === '#Projects' ? 'active' : ''
          } `}
        >
          Projects
        </li>
        <li
          onClick={() => (window.location.href = '#Contact')}
          className={`w3-padding-small ${
            currentHash === '#Contact' ? 'active' : ''
          } `}
        >
          Contact
        </li>
      </StyledNav>
    </header>
  )
}

export default Header
