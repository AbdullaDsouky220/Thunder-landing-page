import React from "react";
import "./services.scss";
import bg from "../../Assets/bgimgae.png";
import line from "../../Assets/image.png";
import { BsFacebook ,BsTwitter,BsYoutube,BsGithub} from 'react-icons/bs';

import Service from "./Service";

function Services() {
  const services=[
    {
    id:1,
    field:'Facebook Ads',
    icon:<BsFacebook />,
  },
    {
    id:2,
    field:'Youtube Ads',
    icon:<BsYoutube />,
  },
    {
    id:3,
    field:'Twitter Ads',
    icon:<BsTwitter />,
  },
]
  return (
    <section
      className="serviceConitainer"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="container">

      <div className="upper">
        <p>Provide Awesome Services</p>
        <p>
          Vivamus ac nulla ultrices laoreet neque mollis mi morbi elementum
          mauris sit amet arcu fringilla auctor In eleifend maximus nisi sed
          vulputate.
        </p>
        <img src={line} alt="line in undeline" />
      </div>
      <div className="services__container">
        {
          services.map((service)=>{
            return <Service key={service.id}service={service}/>
     
          })
        }
      </div>
      <div className="choose__section">
        <div className="left">
            <p className="light-p">
                WHY CHOOSE US
            </p>
            <h2>
            Boots Your Website Thamza!

            </h2>
            <p className="light-p">
            Morbi at erat et tortor tempor sodales non eu lacus Donec at gravida nunc vitae volutpat libero fusce sit amet mi quis ipsum tempus gravida in quis felis Aliquam fringilla tempus scelerisque Phasellus viverra tincidunt suscipit. Praesent non arcu vitae augue aliquam eget vitae Pellentesque sem mauris porta eget ultrices eros.
            </p>
            <button className="btn">
                Discover More
            </button>
        </div>
        <div className="right">
            <div className="col">
                <div className="num">
                    <span>
                        45 +
                    </span>
                    <p>EMPLOYEES</p>
                </div>
                <p>
                Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.
                </p>
            </div>
            <div className="col">
                <div className="num">
                    <span>
                        45 +
                    </span>
                    <p>EMPLOYEES</p>
                </div>
                <p>
                Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.
                </p>
            </div>
            <div className="col">
                <div className="num">
                    <span>
                        45 +
                    </span>
                    <p>EMPLOYEES</p>
                </div>
                <p>
                Aliquam egestas vehicula sapien cibus sit amet rutrum dolor molestie.
                </p>
            </div>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Services;
