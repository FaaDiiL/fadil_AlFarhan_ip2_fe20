import styled from 'styled-components'
import { useState, useEffect } from 'react'
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

  span {
    font-weight: 400;
    font-family: 'Julius Sans One', sans-serif;
  }
`

function Projects() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/FaaDiiL/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <Wrapper id='Projects'>
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
      <div className=''>
        <h3>
          <b>Projects</b>
        </h3>
        <h5>
          You will se my github repositories below. Take a look if you got some
          time over.
          <br />
          {/* <p className='w3-opacity'>April 7, 2014</p> */}
        </h5>
        <table className='w3-table-all w3-card-4 w3-margin-bottom'>
          <tbody>
            <tr style={{ borderBottom: '2px solid black' }}>
              <th>Repository</th>
              <th>Description</th>
              <th>Updated at</th>
              <th>Link</th>
            </tr>
            {repos.map(({ id, name, description, updated_at, html_url }) => (
              <tr key={id}>
                <td>{name}.</td>
                <td>
                  {!description
                    ? 'No desc yet...'
                    : description && description.length > 11
                    ? description.slice(0, 31).concat('...')
                    : description}
                </td>
                <td>{updated_at}</td>
                <td>
                  <button onClick={() => (window.location = `${html_url}`)}>
                    Github
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>{' '}
    </Wrapper>
  )
}

export default Projects
