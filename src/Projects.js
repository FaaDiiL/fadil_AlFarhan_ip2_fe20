import { useEffect, useState } from 'react'
import styled from 'styled-components'

import github from './img/github.svg'

const Wrapper = styled.main`
  min-height: '100vh';
  position: relative;
  top: 0;
  padding-top: 60px;
  width: 100%;
  background-image: white;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: rgba(255, 255, 255, 0.9);
  /* margin-bottom: 300px; */

  /** Test start */

  .main {
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 24px;
    font-weight: 400;
    text-align: center;
  }

  img {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }

  .btn {
    color: #ffffff;
    padding: 0.8rem;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
    font-weight: 400;
    display: block;
    width: 100%;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: transparent;
  }

  .btn:hover {
    background-color: rgba(255, 255, 255, 0.12);
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .cards_item {
    display: flex;
    padding: 1rem;
  }

  @media (min-width: 40rem) {
    .cards_item {
      width: 50%;
    }
  }

  @media (min-width: 56rem) {
    .cards_item {
      width: 33.3333%;
    }
  }

  .card {
    background: linear-gradient(
      to bottom left,
      rgba(2, 0, 36, 0.6671043417366946) 0%,
      rgba(0, 128, 128, 0.6587009803921569) 100%
    );
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.05, 1.05);
    }
  }

  .card_content {
    padding: 1rem;
  }

  .card_title {
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: capitalize;
    margin: 0px;
  }

  .card_text {
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;
    font-weight: 400;
  }
  .made_by {
    font-weight: 400;
    font-size: 13px;
    margin-top: 35px;
    text-align: center;
  }

  /** Test End */
`

function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/FaaDiiL/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <Wrapper id='Projects' className=''>
      <img
        src={`${github}`}
        alt='GithubLogotype'
        style={{
          width: '100%',
          height: '200px',
          position: 'relative',
          objectFit: 'contain',
          objectPosition: '50% 100%',
          backgroundBlendMode: 'screen',
          backgroundColor: 'lightblue',
          borderBottom: 'solid lightgrey 1px',
          padding: '10px 0',
        }}
      />
      <h3>
        <b>Projects</b>
      </h3>
      <h5>
        You will se my github repositories below. Take a look if you got some
        time over.
        <br />
      </h5>
      <div className='main'>
        <h1>My github Repos</h1>
        <ul className='cards'>
          {repos.map(({ id, name, description, updated_at, html_url }) => (
            <li key={id} className='cards_item'>
              <div className='card'>
                <div className='card_image'>
                  <img src='https://picsum.photos/500/300/?image=2' alt={'Some Info!'}/>
                </div>
                <div className='card_content'>
                  <h2 className='card_title'>{name}</h2>
                  <p className='card_text'>
                    {description}
                    <span className='Date'>
                      <br />
                      Last edited: {updated_at.substring(0, 10)}
                    </span>
                  </p>
                  <button
                    className='btn card_btn'
                    onClick={() => (window.location = `${html_url}`)}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  )
}

export default Projects
