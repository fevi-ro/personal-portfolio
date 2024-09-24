import {Container, Row, Col} from "react-bootstrap";
import logo from "../assets/img/logow.png"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'


export const Footer = () => {


    return (
        <footer className="footer">
        <Container>
        <Row className="align-item-center">
       <Col sm={6}>
        <img className="logo" src={logo}/>
       </Col>
       <Col sm={6} className="text-center text-sm-end">
        <div className="social-icon">
        <a href="https://www.linkedin.com/in/foevaroma/" target="_blank"><img src={navIcon1} alt=""  /></a>
        <a href="https://www.xing.com/profile/FoteiniEvanthia_Roma" target="_blank"><img src={navIcon2} alt=""  /></a>
        <a href="https://github.com/fevi-ro" target="_blank"><img src={navIcon3} alt=""  /></a>
        </div>
        <p>Copyright 2024. All rights Reserved</p>
       </Col>
        </Row>
        </Container>
        </footer>
    )
}


