import styled from 'styled-components'

const StyledHome = styled.main`
  width: 100%;
  background: var(--ash-gray);
`
function index() {
  return (
    <StyledHome>
      <h2>Home</h2>
    </StyledHome>
  )
}

export default index
