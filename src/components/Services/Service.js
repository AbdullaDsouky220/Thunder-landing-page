import React from "react";
import "./services.scss";
import {AiOutlineArrowRight} from 'react-icons/ai'

function Service(service) {
  return (
    <div className="service">
    <div className="icon__container">
  {
service.service.icon
  }

    </div>
    <h4>
       {
      service.service.field
       }
    </h4>
    <p>
    Quisque rhoncus lectus ut lectus hendrerit at convallis lorem ornare pellentesque lobortis hendrerit mattis.            </p>
<p className="learn__more">
  Learn More
<AiOutlineArrowRight/>
</p>
</div>
  )
}

export default Service
