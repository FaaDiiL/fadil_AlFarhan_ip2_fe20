import React from 'react'
import styled from 'styled-components'

const MessageBoard = styled.div`

body {
  background: #f1f1f1;
  margin: 2rem;
}
li{
  list-style-type: none;
}


@media (min-width: 640px) {
  .blog-card {
    flex-direction: row;
    width: 640px;
  }
  .blog-card .meta {
    flex-basis: 40%;
    height: auto;
  }
  .blog-card .description {
    flex-basis: 60%;
  }
  .blog-card .description:before {
    transform: skewX(-3deg);
    content: "";
    background: #fff;
    width: 30px;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    z-index: -1;
  }
  .blog-card.alt {
    flex-direction: row-reverse;
  }
  .blog-card.alt .description:before {
    left: inherit;
    right: -10px;
    transform: skew(3deg);
  }
  .blog-card.alt .details {
    padding-left: 25px;
  }
}
`
function Admin({ messages }) {
  return (
    <MessageBoard className={'content'}>
      <h1>Message Area!</h1>
      <ul >
      {
        messages.length>0?
        messages.slice(0).reverse().map((message, i) => (
          <li key={i}>
          <div className="blog-card">
            <div className="description">
              <h1>{message.name}</h1>
              <p>{message.message}</p>
              <p className="read-more">
                <a href={`mailto:${message.email}`}>{message.email}</a>
              </p>
            </div>
          </div>
          </li>
          )
        ):<li>Inbox empty...</li>
      }
      </ul>
    </MessageBoard>
  )
}

export default Admin
