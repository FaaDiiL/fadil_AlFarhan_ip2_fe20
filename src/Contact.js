import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

import firebase from './firebase'

function writeUserData(name, email, message) {
  firebase
    .database()
    .ref('mails/')

    .push({
      name,
      email,
      message,
    })
}
writeUserData('testing', 'fadil.al@gmail.com', 'This is my message!')

const Wrapper = styled.main`
  position: relative;
  width: 100%;
  background-image: white;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: rgba(255, 255, 255, 0.9);

  span {
    color: #000000;
    font-weight: 400;
    font-family: 'Julius Sans One', sans-serif;
    border-bottom: 1px solid;
  }
`
function Contact() {
  const [myFormVal, setMyFormVal] = useState([
    {
      name: 'Fadil Al',
      email: 'YourEmail@mail.com',
      message: 'Your message here',
    },
  ])
  function writeUserData(formArr) {
    firebase.database().ref('mails').set(formArr)
  }
  useEffect(
    () =>
      //writeUserData(
      firebase
        .database()
        .ref('mails')
        .on('value', (snapshot) => {
          console.log('useEffect[]: ', snapshot.val())
          const usersObject = snapshot.val()
          const usersList = Object.keys(usersObject).map((key) => ({
            ...usersObject[key],
            uid: key,
          }))
          console.log('REAL ONE BELOW')
          console.log(usersList)
          console.log('REAL ONE ENDS')
          setMyFormVal(usersList)
        }),
    // ),
    []
  )

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    //setMyFormVal([...myFormVal, { name: name, email: email, message: message }])
    console.log(e.target.form)
  }
  return (
    <Wrapper id='Contact'>
      <form
        className='w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin'
        onSubmit={handleSubmit}
      >
        <h2 className='w3-center'>Contact Us</h2>
        {/** Full Name */}
        <div className='w3-row w3-section'>
          <div className='w3-col'>
            <i className='w3-xxlarge fa fa-user' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='name'
              type='text'
              placeholder='John Doe'
              onChange={(e) =>
                setName(e.target.value) + console.log(e.target.value)
              }
            />
          </div>
        </div>
        {/** Email */}
        <div className='w3-row w3-section'>
          <div className='w3-col'>
            <i className='w3-xxlarge fa fa-envelope-o' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='email'
              type='text'
              placeholder='JohnDoe@mail.com'
              onChange={(e) =>
                setEmail(e.target.value) + console.log(e.target.value)
              }
            />
          </div>
        </div>
        {/** Message */}
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 50 }}>
            <i className='w3-xxlarge fa fa-pencil' />
          </div>
          <div className='w3-rest'>
            <textarea
              className='w3-input w3-border'
              name='message'
              rows='5'
              cols='33'
              placeholder='Hi! I want to offer you a job. Are you interested?'
              onChange={(e) =>
                setMessage(e.target.value) + console.log(e.target.value)
              }
            ></textarea>
          </div>
        </div>
        <button className='w3-button w3-block w3-section w3-blue w3-ripple w3-padding'>
          Send
        </button>
      </form>
      <h3>{myFormVal[0].fullName}</h3>
      <h3>{myFormVal[0].email}</h3>
      <h3>{myFormVal[0].message}</h3>
    </Wrapper>
  )
}

export default Contact
