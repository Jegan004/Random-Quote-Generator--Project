import React, { Component } from 'react';
import {Image, Container,Row,Col} from 'react-bootstrap';
import '../footer.css';

export default class Navigation extends Component{
    render(){
        return(
            <div>
            <footer className="footer">
                <Container>
                <Row className= "show-grid  ">
                    <Col xs={12} sm={12} className="icons ">
                    <div className="social-icons">
                    <a href="https://www.facebook.com/"><Image src="/assets/img/logo_facebook.png" className="social-icon"/></a>
                    <a href="https://twitter.com/"><Image src="/assets/img/logo_twiter.png" className="social-icon"/></a>
                    <a href="https://plus.google.com/"><Image src="/assets/img/logo_google+.png" className="social-icon"/></a>
                    <a href="https://www.linkedin.com/"><Image src="/assets/img/logo_linkedin.png" className="social-icon"/></a>

                    </div>
                    </Col>
                </Row>
                <Row className= "show-grid text-center">
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_place.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4 ><b> ADDRESS </b></h4>
                 <p> 4/6 , Oppula Subbiyer Lane,</p>
                 <p>South Masi Street, Madurai</p>              
                </div>
                </Col>
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_email.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4> <b>EMAIL</b></h4>
                 <p> trendyquotes@gmail.com</p>
                              
                </div>
                </Col>
                <Col xs={12} sm={4} className="icons"> 
                <Image src="/assets/img/logo_phone.png" className="social-icon"/>
                 <div className="info-footer">
                 <h4> <b>PHONE</b></h4>
                 <p> +91 6385379210</p>
                 <p>+91 8012579210</p>              
                </div>
                </Col>
                </Row>
                </Container>
                </footer>
            </div>
        )}
    }