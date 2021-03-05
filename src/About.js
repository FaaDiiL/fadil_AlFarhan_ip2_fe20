import styled from 'styled-components'

import gitIcon from './img/About2BWView.png'

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  background-image: white;
  background-repeat: no-repeat;
  background-position: 35% 50%;
  background-color: rgba(255, 255, 255, 0.9);
  .text-content {
    min-height: 100vh;
    color: black;
    padding: 0 16px;
    font-weight: 400;
  }
`
function About() {
  return (
    <Wrapper id='About' className='w3-margin-bottom'>
      <h3 className='w3-padding-small'>
        <b>About</b>
      </h3>
      <img
        src={gitIcon}
        alt='Nature'
        style={{
          width: '100%',
          height: '200px',
          position: 'relative',
          objectFit: 'none',
          objectPosition: '5% 20%',
          borderBottom: 'solid lightgrey 1px',
        }}
      />
      <div className='w3-container'>
        <h3>
          <b>Fadil Al Farhan</b>
        </h3>
        <h5>
          My name is Fadil and I live in Sweden. I’ve been programming above a
          year now. The main technologies I use is: HTML, CSS and JavaScript. I
          have been coding in React the last 3 month, and I'm still learning new
          fetchers. The best thing of programming is the problem-solving part. I
          love to break down the problem and try to understand it while solve
          them. It will help you build more effective apps.
          <br />
        </h5>
      </div>
      <div className='w3-container'>
        <table className='w3-table-all w3-card-4'>
          <tbody>
            <tr style={{ borderBottom: '2px solid black' }}>
              <th>Language</th>
              <th>Level</th>
            </tr>
            <tr>
              <td>HTML</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>65%</td>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>85%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  )
}

export default About
