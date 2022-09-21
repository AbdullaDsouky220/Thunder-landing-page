import React from 'react'
import line from '../../Assets/image.png'
import './contact.scss';
import contactImage from '../../Assets/contactImage.png'
function Contact() {
  return (
    <div className='client__section'>
    <div className="container">
    <div className="upper">
        <h1>Let's talk about everything!
</h1>
        <p className="light-p">
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
          vulputate.
        </p>
        <img src={line} alt="line in undeline" />
      </div>
      <div className="contact__container">
        <div className="left">
            <img src={contactImage} alt='contactImage'/>
            <div className="animated1"></div>
          <div className="animated2"></div>
          <div className="animated3"></div>
        </div>
        <div className="right">
           <div className="input__container">
           <label className='label__input' htmlFor ='first-name'>
First Name
            </label>
            <input type='text' name='first-name' id='first-name'/>
           </div>
           <div className="input__container">
           <label className='label__input' htmlFor ='last-name'>
Last Name
            </label>
            <input type='text' name='last-name' id='last-name'/>
           </div>
           <div className="input__container">
           <label className='label__input' htmlFor ='email-name'>
Email Address
            </label>
            <input type='e-mail'  name='email-name' id='email-name'/>
           </div>
           <div className="input__container">
           <label className='label__input' htmlFor ='textArea'>
Messagee Address
            </label>
           <textarea name="textArea" id="textArea" cols="60" rows="30"></textarea>
           </div>
           <button className="btn" type='
           submit'>
            Send Message
           </button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact
