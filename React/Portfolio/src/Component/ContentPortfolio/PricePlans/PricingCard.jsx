import React from "react";
import "./PricingCard.css";
import avaliabelLogo from "../../../assets/correct.svg"
import cancelLogo from "../../../assets/Cancel.svg"

const PricingCard = (props) => {
  const planBenefits = [
         {id : 1,isSilver: true, isGold: true, idsDimond : true, label : "UI Design"}, 
         {id : 2,isSilver: true, isGold: true, idsDimond : true, label : "Web Development"}, 
         {id : 3,isSilver: false, isGold: true, idsDimond : true, label : "Logo Design"}, 
         {id : 4,isSilver: false, isGold: true, idsDimond : true, label : "Seo Optimization"}, 
         {id : 5,isSilver: false, isGold: false, idsDimond : true, label : "WordPress Integration"}, 
         {id : 6,isSilver: false, isGold: false, idsDimond : true, label : "5 Websites"}, 
         {id : 7,isSilver: false, isGold: false, idsDimond : true, label : "Unlimited User"}, 
         {id : 8,isSilver: false, isGold: false, idsDimond : true, label : "20 GB bandwith"}, 
  ];

  return (
    <div className="pricing-card-container">
      {props.badge && (
        <h2 className="pricing-card-container-badge">Most Popular</h2>
      )}
      <h2
        style={{ marginTop: props.badge ? "25px" : "54px" }}
        className="pricing-card-container-title"
      >
        {props.title}
      </h2>
      <h3 className="pricing-card-container-price">
        ${props.price}.00 <span>/Hour</span>
      </h3>
      <p className="pricing-card-container-content">{props.content}</p>

      <div className="pricing-card-container-planbenefits">
        {props.title ==="Silver" && (
          planBenefits.map((items) => {
            return (
              <div className="pricing-card-container-planbenefits-service" key={items.id}>
                {items.isSilver ? <img src={avaliabelLogo} className="pricing-card-container-planbenefits-avaliable" /> : <img src={cancelLogo} className="pricing-card-container-planbenefits-cancel"/> }
                <label htmlFor="" className="pricing-card-container-planbenefits-label">{items.label}</label>
              </div>
            )
            
          })
        )}
        {props.title ==="Gold" && (
          planBenefits.map((items) => {
            return (
              <div className="pricing-card-container-planbenefits-service" key={items.id} >
                {items.isGold ? <img src={avaliabelLogo} className="pricing-card-container-planbenefits-avaliable" /> : <img src={cancelLogo} className="pricing-card-container-planbenefits-cancel"/> }
                <label htmlFor="" className="pricing-card-container-planbenefits-label">{items.label}</label>
              </div>
            )
            
          })
        )}
        {props.title ==="Dimond" && (
          planBenefits.map((items) => {
            return (
              <div className="pricing-card-container-planbenefits-service" key={items.id}>
                {items.idsDimond ? <img src={avaliabelLogo}  className="pricing-card-container-planbenefits-avaliable"/> : <img src={cancelLogo} className="pricing-card-container-planbenefits-cancel"/> }
                <label htmlFor="" className="pricing-card-container-planbenefits-label">{items.label}</label>
              </div>
            )
            
          })
        )}



      </div>
      <button
        className="pricing-card-container-btn"
        style={{ backgroundColor: props.badge ? "#FFB400" : "#FFFFFF" }}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default PricingCard;
