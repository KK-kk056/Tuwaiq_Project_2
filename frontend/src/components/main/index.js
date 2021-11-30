import React from "react";
import { Carousel } from "react-bootstrap";

const Main = () => {
  return (
    <div className="App">
      {
        <Carousel fade>
          <Carousel.Item>
            <img
              height="470px"
              className="d-block w-100"
              src="https://ta.sdaia.gov.sa/images/hero.png"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="470px"
              className="d-block w-100"
              src="https://adf.gov.sa/ar/MediaCenter/News/PublishingImages/TawakkalnaApp.jpg?Width=500"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height="470px"
              className="d-block w-100"
              src="https://mixattrend.com/wp-content/uploads/2021/08/%D8%AA%D8%B7%D8%A8%D9%8A%D9%8A%D9%82-%D8%AA%D9%88%D9%83%D9%84%D9%86%D8%A7.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      }
    </div>
  );
};

export default Main;
