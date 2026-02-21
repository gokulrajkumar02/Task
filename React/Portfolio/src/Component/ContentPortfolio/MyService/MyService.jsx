import React from "react";
import "./MyService.css";
import Coding from "../../../assets/coding.svg"
import GameDevelopement from "../../../assets/game-development.svg"
import Drawing from "../../../assets/illustration.svg"
import Microphone from "../../../assets/Microphone.svg"
import Camera from "../../../assets/Photographer.svg"
import MyServiceGrid from "./MyServiceGrid";

const MyService = () => {
  return (
    <div className="my-service-container">
      <div className="my-service-container-content">
        <h2 className="my-service-container-content-title">My Services</h2>
        <p className="my-service-container-content-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse in sit explicabo blanditiis voluptates a distinctio incidunt rerum asperiores soluta.</p>
      </div>
      <div className="my-service-container-grid">
            <MyServiceGrid displayIcon= {true} img={Coding} title={"Web Developement"} content={"blog, E-commerce"}/>
            <MyServiceGrid displayIcon= {true} img={Drawing} title={"UI/UX design"} content={"Mobile app, website design"}/>
            <MyServiceGrid displayIcon= {true} img={Microphone} title={"Sound Design"} content={"Voice Over, Beat Making"}/>
            <MyServiceGrid displayIcon= {true} img={GameDevelopement} title={"Game Design"} content={"Character Design, Props & Objects"}/>
            <MyServiceGrid displayIcon= {true} img={Camera} title={"Photography"} content={"portrait, product photography"}/>
            <MyServiceGrid displayIcon= {false}  title={"Advertising"} content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi."}/>
      </div>
    </div>
  );
};

export default MyService;
