import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

function Visual() {
  return (
    <>
      <div className="Visual">
        <div className="v1">
          <div className="v1b">
            <div className="v1content">
              <Carousel>
                <Carousel.Item interval={1000}>
                  <img
                    src="https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                  <img
                    src="https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    src="https://wallpapercave.com/wp/wp4110194.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    src="https://cdn.marvel.com/content/1x/captainmarvel_lob_crd_06.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    src="https://i.pinimg.com/736x/18/37/a3/1837a320337c2ed243b21c9b6cfa70cd.jpg"
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>

          <div className="v2">
            <div className="v2b">
              <div className="v2content">
                <Col xs={6} md={4}>
                  <Image src="https://static.javatpoint.com/best/images/best-hd-movies1.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="https://wallpapercave.com/wp/wp6658980.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587.jpg?v=1579504979" roundedCircle />
                </Col>
               
              </div>
              <div className="v2content">
                <Col xs={6} md={4}>
                  <Image src="https://rukminim1.flixcart.com/image/850/1000/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg?q=20" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="https://m.media-amazon.com/images/I/91swP74tD4L._AC_UF894,1000_QL80_.jpg" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNHBCnuIqD54zXuvQsXbK62h5LechGZhyjA&usqp=CAU" roundedCircle />
                </Col>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visual;
