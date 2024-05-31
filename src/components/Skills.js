import { Container, Col, Row, } from "react-bootstrap";
import logo1 from "../assets/img/html5-logo.svg";
import logo2 from "../assets/img/html5-logo.svg";
import logo3 from "../assets/img/html5-logo.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

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
          <img className="background-image-left" src={colorSharp} alt="Image" />
        <div className="container">
    
            <div className="row">
            
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Front End</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={logo1} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
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
                            </div>
                           
                        </Carousel>
                    </div>

                </div>
            </div>
        </div>

    </section>
  )
}