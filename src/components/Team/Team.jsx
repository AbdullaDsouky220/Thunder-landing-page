import React from 'react'
import './team.scss'
import image1 from "../../Assets/image.png";
import "../Home/home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCoffee, faTv } from "@fortawesome/free-solid-svg-icons";
import teamImage from "../../Assets/teamImage.png";
function Team() {
  return (
    <div className='team__section'>
           <div className="container">
        <div className="left-div">
        
          <div className="grow">
            <h1>Team Collaboration in real time</h1>
            <p>
            Praesent ut tincidunt massa vel facilisis dui Integer mattis quis augue in rhoncus Integer mattis enim vel eros bibendum egestas id laoreet nisi Praesent malesuada eros at bibendum eleifend Nam nec urna hendrerit interdum risus Donec faucibus quis magna sit amet laoreet Maecenas finibus semper massa in finibus est venenatis quis.
            </p>
            <div className="buttons">
              <button className="btn">Explore More</button>
             
            </div>
          </div>
        </div>
        <div className="right">
          <img src={teamImage} alt="homepage" />
          <div className="animated1"></div>
          <div className="animated2"></div>
          <div className="animated3"></div>
        </div>
      </div>
    </div>
  )
}

export default Team
