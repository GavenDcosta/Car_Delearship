 import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Connect with Us on Instagram for Latest Updates
            </h2>
            
            <a href="https://www.instagram.com/realdealcars_/" target="_blank" rel="noreferrer" style={{ textDecoration:"none"}}>
               <button className="btn become__driver-btn mt-4" style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"5px",}}>
                 <i className="ri-instagram-line"></i> Follow Us on Instagram
               </button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
