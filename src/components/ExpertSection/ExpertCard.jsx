import { faFaceAngry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import React from 'react'
import "./expert.scss";
import { BsFacebook ,BsTwitter,BsYoutube,BsGithub} from 'react-icons/bs';

function ExpertCard(expert) {
  return (
    <div className='expert__Card'>
      <div className="left">
        <h4>
            {expert.expert.name}
        </h4>
        <button className='btn'>
            ##{expert.expert.name}
        </button>
        <p>
            {expert.expert.review}
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
      <div className="right">
        <img src={expert.expert.image} alt={expert.name}/>      </div>
    </div>
  )
}

export default ExpertCard
