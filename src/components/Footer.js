import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { BsBehance } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row className="footer-row">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Abd El-Rahman El-Sawye</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SB</h3>
        </Col>
        <Col md="4" className="footer-body">
          <a
            target="_blank"
            style={{ color: "white", textDecoration: "none" }}
            rel="noopener noreferrer"
            href="tel:+201068775799"
          >
            +20 106 877 5799
          </a>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* <li className="social-icons">
              <a
                href="https://github.com/soumyajit4419"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.behance.net/abdoelsawye"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsBehance />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/abdelrahmen-elsawye-67733b289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
