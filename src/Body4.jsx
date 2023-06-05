import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Img from "./Img.jpg"
import Button from 'react-bootstrap/Button';


const Body4 = () => {
  return (
    <div>
      <div className="lat1">
        What tnpLab students are saying
      </div>
      <div className="lat2">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img} alt="Img"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img} alt="Img"

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Img} alt="Img"

            />

          </Carousel.Item>

        </Carousel>

      </div>
      <div className="lat3">
        <div className="lat31">
          Join the tnpLab Program and you will be next
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; <Button variant="primary">&nbsp;&nbsp;&nbsp;Join Free &nbsp;&nbsp;&nbsp;&nbsp; &#8250;</Button>

        </div>
      </div>
      <br /><br /><br /><br />
    </div>


  )
}

export default Body4