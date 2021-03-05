import styled from 'styled-components'

import myImg from './img/aboutViewImg.jpg'
import { gitHub, linkedIn } from './img/icons'

const Wrapper = styled.main`
  background-image: url(${myImg});
  background-repeat: no-repeat;
  background-position: 54% 70%;
  color: white;

  .styledIcons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    height: 100vh;
  }
  .styledIcon {
    display: flex;
    height: 78px;
    width: 78px;
    flex-shrink: 1;
    flex-grow: 1;
    padding: 0 10px;
    margin-bottom: 200px;
    transition: all 0.2s ease;
    :hover {
      transform: scale(1.2, 1.2);
      path {
        fill: #0073b2;
      }
    }
  }
`

function Home() {
  return (
    <Wrapper id='Home' className='w3-grayscale-min'>
      <div className='content'>
        <span className='section-title'>Fadil Al Farhan</span>
        <div className='styledIcons'>
          <a href='https://github.com/FaaDiiL' target='_blank' rel='noreferrer'>
            <div className='styledIcon'>{gitHub}</div>
          </a>
          <a
            href='https://se.linkedin.com/public-profile/in/fadil-al-farhan-a01044b1'
            target='_blank'
            rel='noreferrer'
          >
            <div className='styledIcon'>{linkedIn}</div>
          </a>
        </div>
      </div>
    </Wrapper>
  )
}

export default Home
