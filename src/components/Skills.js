import { Container, Col, Row, } from "react-bootstrap";
import logo1 from "../assets/img/html5-logo.svg";
import logo2 from "../assets/img/css-4.svg";

import logo4 from "../assets/img/react-2.svg";

import logo6 from "../assets/img/logo-javascript.svg";
import logo7 from "../assets/img/nodejs-3.svg";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";


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
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            
<div>
                        <h4>Frontend</h4>
                        <div class="flex-container">
                        
   <div class="flex-items"> <img src={logo1} alt="Image" /> <h4>HTML5</h4></div>
   <div class="flex-items"> <img src={logo2} alt="Image" /> <h4>CSS</h4> </div>
   <div class="flex-items"><img src={logo4} alt="Image" /> <h4>React </h4></div>
   <div class="flex-items"><img src={logo7} alt="Image" /> <h4>Node.js </h4></div>
   <div class="flex-items js"><img src={logo6} alt="Image" /> <h4>JavaScript </h4></div>
</div>
</div>



                        </Carousel>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}

/*      <div className="item">
                                <img src={logo2} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={logo3} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={logo1} alt="Image" />
                                <h5>Next</h5>
                            </div>*/
                            

                            /*
                            <section className="skill" id="skills">
          
        <div className="container">
    
            <div className="row">
            
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <p>Front End</p>
                                <img src={logo1} alt="Image" /> <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                            <p>Front End</p>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                            <p>Front End</p>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                  
                    
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>

    </section> */