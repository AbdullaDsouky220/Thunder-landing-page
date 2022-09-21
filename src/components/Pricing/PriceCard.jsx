import React from "react";
import './priceCard.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function PriceCard(card) {
  return (
    <div className="card">
      <div className="card__header">
{
  card.card.icon
}
        <p>
        {card.card.name}
        </p>
      </div>
      <div className="features">
          {card.card.features.map((feature) => (
            <div key={feature}>
             {feature[1]? <FontAwesomeIcon className='icon' icon={faCheck} />: <FontAwesomeIcon className='icon2' icon={faXmark} />}
              <p> {feature[0]}</p>
            </div>
          ))}
      </div>
      <div className="card__text">
      Semper urna veal tempus pharetra elit habisse platea dictumst.
      </div>
      <div className="price__container">
        <del>
        ${card.card.realPrice}
        </del>
        <span>
            ${card.card.currentPrice}
        </span>
        <p>
            Per Month
        </p>
      </div>
        <button className="btn">
            Purchase Now
        </button>
        {
            card.card.featured&&<div className="featured__badge">Featured</div>
        }
    </div>
  );
}

export default PriceCard;
