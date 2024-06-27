import React from "react";
import Slider from "react-slick";

import "../../styles/testimonial.css";

import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";
import ava04 from "../../assets/all-images/ava-4.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I had an amazing experience at this dealership. The staff was friendly and helpful, and I found the perfect car for my needs. Highly recommend!"
        </p>
    
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />
    
          <div>
            <h6 className="mb-0 mt-3">Jane Smith</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "The team here made the car buying process so easy and stress-free. They were very knowledgeable and answered all my questions. Great service!"
        </p>
    
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />
    
          <div>
            <h6 className="mb-0 mt-3">Michael Johnson</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "I am extremely satisfied with my purchase. The dealership had a great selection of cars, and I found exactly what I was looking for. Excellent experience!"
        </p>
    
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />
    
          <div>
            <h6 className="mb-0 mt-3">Emily Davis</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Fantastic customer service and a wide range of vehicles to choose from. The staff went above and beyond to ensure I was happy with my purchase."
        </p>
    
        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" />
    
          <div>
            <h6 className="mb-0 mt-3">John Brown</h6>
            <p className="section__description">Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
