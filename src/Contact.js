import styled from 'styled-components'

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
  return (
    <Wrapper id='Contact'>
      <form
        action='/#'
        className='w3-container w3-card-4 w3-light-grey w3-text-blue w3-margin'
      >
        <h2 className='w3-center'>Contact Us</h2>
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 150 }}>
            <i className='w3-xxlarge fa fa-user' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='first'
              type='text'
              placeholder='First Name'
            />
          </div>
        </div>
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 150 }}>
            <i className='w3-xxlarge fa fa-user' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='last'
              type='text'
              placeholder='Last Name'
            />
          </div>
        </div>
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 150 }}>
            <i className='w3-xxlarge fa fa-envelope-o' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='email'
              type='text'
              placeholder='Email'
            />
          </div>
        </div>
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 50 }}>
            <i className='w3-xxlarge fa fa-phone' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='phone'
              type='text'
              placeholder='Phone'
            />
          </div>
        </div>
        <div className='w3-row w3-section'>
          <div className='w3-col' style={{ width: 50 }}>
            <i className='w3-xxlarge fa fa-pencil' />
          </div>
          <div className='w3-rest'>
            <input
              className='w3-input w3-border'
              name='message'
              type='text'
              placeholder='Message'
            />
          </div>
        </div>
        <button className='w3-button w3-block w3-section w3-blue w3-ripple w3-padding'>
          Send
        </button>
      </form>
    </Wrapper>
  )
}

export default Contact
