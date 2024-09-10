import { Container, Col, Row, } from "react-bootstrap";
import logo1 from "../assets/img/html5-logo.svg";
import logo2 from "../assets/img/css-4.svg";
import logo3 from "../assets/img/react-2.svg";
import logo4 from "../assets/img/logo-javascript.svg";
import logo5 from "../assets/img/nodejs-3.svg";
import logo6 from "../assets/img/wordpress-icon.svg";
import logo7 from "../assets/img/bootstrap-5-1.svg";
import logo8 from "../assets/img/tailwind-css-2.svg";
import logo9 from "../assets/img/figma-icon.svg";
import logo10 from "../assets/img/adobe-photoshop-2.svg";
import logo11 from "../assets/img/rest.svg";
import logo12 from "../assets/img/jest-2.svg";
import logo13 from "../assets/img/postman.svg";
import logo14 from "../assets/img/mongodb-icon-1.svg";
import logo15 from "../assets/img/git-icon.svg";

import React from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillsGroups = [
    {
      title: "Frontend",
      skills: [
        { src: logo1, title: "HTML5" },
        { src: logo3, title: "React" },
        { src: logo5, title: "Node.js" },
        { src: logo4, title: "JavaScript" },
        { src: logo6, title: "WordPress" }
      ]
    },
    {
      title: "Styling & Design",
      skills: [
        { src: logo2, title: "CSS" },
        { src: logo7, title: "Bootstrap" },
        { src: logo8, title: "Tailwind" },
        { src: logo9, title: "Figma" },
        { src: logo10, title: "Adobe Photoshop" }
      ]
    },
    {
      title: "Backend and Testing",
      skills: [
        { src: logo11, title: "REST" },
        { src: logo14, title: "MongoDB" },
        { src: logo15, title: "Git" },
        { src: logo12, title: "Jest" },
        { src: logo13, title: "Postman" }
      ]
    }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} autoPlay={false} autoPlaySpeed={2000}>
                {skillsGroups.map((group, index) => (
                  <div key={index} className="skills-group">
                    <h4>{group.title}</h4>
                    <div className="skills-container">
                      {group.skills.map((skill, idx) => (
                        <div key={idx} className="flex-items">
                          <img src={skill.src} alt={skill.title} />
                          <h6>{skill.title}</h6>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


/** 


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
          
        <div className="container">
    
            <div className="row">
            
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                       
                   
                            
<div className="skills-container">
                        <h4>Frontend</h4>
                        <div class="flex-container">
                        
   <div class="flex-items"> <img src={logo1} alt="Image" /> <h6>HTML5</h6></div>
   <div class="flex-items"><img src={logo3} alt="Image" /> <h6>React </h6></div>
   <div class="flex-items"><img src={logo5} alt="Image" /> <h6>Node.js </h6></div>
   <div class="flex-items js"><img src={logo4} alt="Image" /> <h6>JavaScript </h6></div>
   <div class="flex-items"> <img src={logo6} alt="Image" /> <h6>WordPress</h6></div>
</div>
</div>


<div className="skills-container">
                        <h4>Styling & Design</h4>
                        <div class="flex-container">
                        
   <div class="flex-items"> <img src={logo2} alt="Image" /> <h6>CSS</h6> </div>
   <div class="flex-items"><img src={logo7} alt="Image" /> <h6>Bootstrap </h6></div>
   <div class="flex-items"><img src={logo8} alt="Image" /> <h6>Tailwind </h6></div>
   <div class="flex-items js"><img src={logo9} alt="Image" /> <h6>Figma </h6></div>
   <div class="flex-items js"><img src={logo10} alt="Image" /> <h6>Adobe Photoshop </h6></div>
</div>
</div>
    

<div className="skills-container">
                        <h4>Backend and Testing </h4>
                        <div class="flex-container">
                        
   <div class="flex-items"> <img src={logo11} alt="Image" /> <h6>REST</h6></div>
   <div class="flex-items"> <img src={logo14} alt="Image" /> <h6>MongoDB</h6> </div>
   <div class="flex-items"><img src={logo15} alt="Image" /> <h6>Git </h6></div>
   <div class="flex-items"><img src={logo12} alt="Image" /> <h6>Jest </h6></div>
   <div class="flex-items js"><img src={logo13} alt="Image" /> <h6>Postman </h6></div>
</div>
</div>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}




*/