import React from 'react'
import { BsFacebook ,BsTwitter,BsYoutube,BsGithub} from 'react-icons/bs';
import '../ExpertSection/expert.scss'
import './footer.scss'
function Footer() {
  return (
    <div className='footer'>
      <div className="container">
      <div className="colums__container">
      <div className="col">
            <span>Thunder</span>
            <p>
            Aenean lacus enim Praesent congue praesent viverra interdum maximus lobortis.
            </p>
            <div className="icons">
        <div className="social__icons">
            <BsTwitter/>
        </div>
        <div className="social__icons">
        <BsFacebook/>
        </div>
        <div className="social__icons">
           <BsYoutube/>
        </div>
        <div className="social__icons">
          <BsGithub/>
        </div>
        </div>
      </div>
      <div className="col-2">
        <h3>
            Services
        </h3>
        <p>Web Design</p>
        <p>Lorem Test</p>
        <p>Credit</p>
        <p>Ui Design</p>
      </div>
      <div className="col-2">
        <h3>
        Company
        </h3>
        <p>Features</p>
        <p>Faq</p>
        <p>Contact us</p>
      </div>
      <div className="col-3">
        <h3>
        Subscribe
        </h3>
<div>
<input type='email' placeholder='Enter Email'/>
<button className="btn" type='
           submit'>
            Send Message
           </button></div>
      </div>
      </div>
    </div>
      <div className="footer__background">
        <hr></hr>
        <p>
        2022 © Abdullah. Develop by AbdullahDsouky
        </p>
      </div>
    </div>
  )
}

export default Footer
