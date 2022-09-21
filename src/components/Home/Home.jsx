import React from "react";
import image1 from "../../Assets/image.png";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faCoffee, faTv } from "@fortawesome/free-solid-svg-icons";
import home from "../../Assets/home.png";
function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="left-div">
          <div className="digital">
            <p>Digital Marketing</p>
            <img src={image1} alt="digital markingi" />
          </div>
          <div className="grow">
            <h1>Grow Your Business Google Ads & Instagram Ads</h1>
            <p>
              Vestibulum egestas magna ut aliquet sodales nunc fermentum ligula
              quis tidunt vitae massa.
            </p>
            <div className="buttons">
              <button className="btn">Contact US</button>
              <p>
                <FontAwesomeIcon icon={faTv} />
                Watch Intro Video
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={home} alt="homepage" />
          <div className="animated1"></div>
          <div className="animated2"></div>
          <div className="animated3"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
