import styled from 'styled-components'

import gitIcon from './img/About2BWView.png'

// const Header = (<svg width="{448}" height="{81}" viewBox="0 0 448 81" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M0.5 0H447.5V63.583C447.5 63.583 227.5 102.771 134.5 63.583C41.4999 24.394 0.5 63.583 0.5 63.583V0Z" fill="#1C93D7" />
// </svg>
// )

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
          year now. The main technology's i've been coding in is: HTML, CSS and
          JavaScript. I have been active in React the last 3 month, and I'm
          still learning new fetchers. The best thing of programming is the
          problem solving part. I love to break down the problem and try to
          understand it while solve it.
          <br />
          {/* <span className='w3-opacity'>April 7, 2014</span> */}
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

      {/* <div className='content'>
        <span className='section-title'>About</span>
        <section className='content'>
          <div className='text-content'>
            <p>
              My name is Fadil, and i am a self-educated Front-end developer.
            </p>
            <p>I begun study at KYH - Stockholm to sharp my skills.</p>
            <p>
              One of my main strength is problem solving. I have a sharp eye for
              finding bugs & problems.
            </p>
          </div>
        </section>
        <section className='skills-table'>
          <ul className='w3-ul w3-card-4'>
            <li className='w3-bar'>
              <img
                src='https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png'
                alt='HTML5'
                className='w3-bar-item w3-circle w3-hide-small'
                style={{ width: 85 }}
              />
              <div className='w3-bar-item'>
                <span className='w3-large'>HTML</span>
                <br />

                <div className='w3-light-grey w3-round-xlarge'>
                  <div
                    className='w3-container w3-blue w3-round-xlarge'
                    style={{ width: '25%' }}
                  >
                    25%
                  </div>
                </div>

                <span>Bar</span>
              </div>
            </li>
            <li className='w3-bar'>
              <img
                src='img_avatar2.png'
                className='w3-bar-item w3-circle w3-hide-small'
                alt='CSS3'
                style={{ width: 85 }}
              />
              <div className='w3-bar-item'>
                <span className='w3-large'>HTML</span>
                <br />
                <span>Bar</span>
              </div>
            </li>
            <li className='w3-bar'>
              <img
                src='img_avatar2.png'
                className='w3-bar-item w3-circle w3-hide-small'
                alt='JavaScript'
                style={{ width: 85 }}
              />
              <div className='w3-bar-item'>
                <span className='w3-large'>HTML</span>
                <br />
                <span>Bar</span>
              </div>
            </li>
          </ul>
        </section>
      </div> */}
    </Wrapper>
  )
}

export default About
