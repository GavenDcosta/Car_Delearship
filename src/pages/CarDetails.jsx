import React, { useEffect } from "react";

import carData from "../assets/data/carData";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <h6 className="rent__price fw-bold fs-4">
                    ₹{singleCarItem.price}.00
                  </h6>

                  {/* <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "#f9a826" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span> */}
                </div>

                <p className="section__description">
                  {singleCarItem.description}
                </p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#f9a826" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-around"}}>
              <button className="mb-4 fw-bold" 
                      style={{ 
                          width: "200px", 
                          height: "100px", 
                          borderRadius: "30px", 
                          backgroundColor: "dodgerblue",
                          color:"white",
                          transition: "background-color 0.3s" 
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "cyan"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "dodgerblue"}>
                  Add to Booking
              </button>
              <button className="mb-4 fw-bold" 
                      style={{ 
                          width: "200px", 
                          height: "100px", 
                          borderRadius: "30px", 
                          backgroundColor: "dodgerblue",
                          color:"white",
                          transition: "background-color 0.3s" 
                      }}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = "cyan"}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = "dodgerblue"}>
                  Add to Saved List
              </button>

                {/* <BookingForm /> */}
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Contact for Queries</h5>
                <Col lg="3" md="4" sm="6">
            <div className="mb-4" style={{width:"200px"}}>
              <h5 className="footer__link-title mb-4" style={{color:"black",fontWeight:"500"}}>Head Office</h5>
              <p className="office__info" style={{color:"black",fontWeight:"500"}}>Mumbai, Maharashtra</p>
              <p className="office__info" style={{color:"black",fontWeight:"500"}}>Phone: +91-99205-33056</p>

            
                <a href="https://wa.me/919326046996" 
                   target="_blank" 
                   rel="noreferrer" 
                   style={{ 
                     backgroundColor: "cyan", 
                     color: "black", 
                     padding: "10px", 
                     borderRadius: "20px", 
                     textDecoration: "none", 
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"center",
                     gap:"10px"
                   }}
                   onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                   onMouseOut={(e) => e.currentTarget.style.color = 'black'}
                >
                  <i className="ri-phone-line"></i> WhatsApp
                </a>
            


              <p className="office__info">Office Time: 9am - 5pm</p>
            </div>
          </Col>
                {/* <PaymentMethod /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
