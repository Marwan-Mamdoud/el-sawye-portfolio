import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import { FaCss3 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang, TbHtml } from "react-icons/tb";
import { IoLogoFigma } from "react-icons/io5";
import { SiNotion } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";

function Techstack() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "50px",
        paddingTop: "50px",
      }}
    >
      <Col xs={4} md={2} className="tech-icons">
        <TbHtml />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <bt />
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobe />
      </Col>
    </Row>
  );
}

export default Techstack;
