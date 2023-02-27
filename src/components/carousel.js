import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testimonialData from "./testimonials";



import { Container, Content } from "react-bulma-components";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const Testimonial = ({ name, image, testimonial }) => (
  <div className="testimonial" style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center'}}>
    <div className="testimonial-content">
      <Container >
        <Content className="is-size-5-desktop is-size-6-tablet is-size-7-mobile">
          <p className="my-3">{name}</p> <hr />
          {testimonial}
        </Content>
      </Container>
    </div>
  </div>
);

const TestimonialCarousel = () => {
  const [selectedTestimonials, setSelectedTestimonials] = useState([]);

  useEffect(() => {
    // select 5 random testimonials on page load
    const randomTestimonials = shuffleArray(testimonialData).slice(0, 5);
    setSelectedTestimonials(randomTestimonials);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {selectedTestimonials.map((testimonial, index) => (
        <div key={index}>
          <Testimonial {...testimonial} />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
