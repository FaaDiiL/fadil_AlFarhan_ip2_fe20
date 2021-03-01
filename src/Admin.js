import React, { useEffect, useState } from 'react'

// Read Database Values
import firebase from './firebase'

//const myMessages = []
function Admin({ messages }) {
  return (
    <>
      <h1>Message Area!</h1>
      <ul>
        <li>test</li>
        {messages.map((message, i) => (
          <li key={i}>
            <h3>{message.name}</h3>
            <p>{message.message}</p>
            <p>{message.email}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Admin
