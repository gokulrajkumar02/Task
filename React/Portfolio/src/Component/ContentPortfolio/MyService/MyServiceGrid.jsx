import React from "react";
import "./MyServiceGrid.css";
import GreaterIcon from "../../../assets/GreaterIcon.svg"
const MyServiceGrid = (props) => {
  return (
    <div className="my-service-grid-container">
      { props.displayIcon ? (
      <div className="my-service-grid-container">
        <img
          src={props.img}
          alt="codingImage"
          className="my-service-grid-container-image"
        />
        <h2 className="my-service-grid-container-title">{props.title}</h2>
        <p className="my-service-grid-container-content">{props.content}</p>
      </div> ): 
      (<div className="my-service-grid-container-Advertising"> 
          <h2 >{props.title}</h2>
          <p>{props.content}</p>
          <p>ORDER NOW <img src={GreaterIcon} alt="" /> </p>
      </div>)
      }
    </div>
  );
};

export default MyServiceGrid;
