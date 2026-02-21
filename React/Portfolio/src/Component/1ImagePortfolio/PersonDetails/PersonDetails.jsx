import React from "react";
import "./PersonDetails.css";
const PersonDetails = () => {
  return (
    <div>
      <div className="person-details-container">
        <dl className="person-details-container-box">
          <dt  htmlFor="" className="person-details-container-box-title">
            Age :
          </dt>
          <dd className="person-details-container-box-val">24</dd>
        </dl>
        <dl className="person-details-container-box">
          <dt htmlFor="" className="person-details-container-box-title">
            Residence:
          </dt>
          <dd className="person-details-container-box-val">BD</dd>
        </dl>
        <dl className="person-details-container-box">
          <dt htmlFor="" className="person-details-container-box-title">
            Freelance:
          </dt>
          <dd className="person-details-container-box-val">Available</dd>
        </dl>
        <dl className="person-details-container-box">
          <dt htmlFor="" className="person-details-container-box-title">
            Address:
          </dt>
          <dd className="person-details-container-box-val">Dhaka,Bangladesh</dd>
        </dl>
      </div>
      <hr className="person-details-container-hr" />
    </div>
  );
};

export default PersonDetails;
