import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with design and the magic behind creating intuitive
              user experiences, and I’ve at least learned a thing or two… 🎨✨
              <br />
              <br />
              I’m fluent in the classics like
              <i>
                <b className="purple"> Figma, Adobe XD, and Photoshop. </b>
              </i>
              <br />
              <br />
              My fields of interest are
              <i>
                <b className="purple">
                  &nbsp; crafting beautiful, functional user interfaces and
                  designing seamless user journeys — from wireframes to{" "}
                </b>
                <b className="purple">polished final products.;</b>
              </i>
              <br />
              <br />
              <b className="purple">
                {" "}
                Whenever possible, I also apply my passion for developing
                products with{" "}
              </b>{" "}
              and
              <i>
                <b className="purple">
                  {" "}
                  Whenever possible, I also apply my passion for design systems,
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">
                  {" "}
                  accessibility, and modern trends to build products that are
                  both visually stunning and user-friendly.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdelrahmen-elsawye-67733b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/abdoelsawye"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsBehance />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
