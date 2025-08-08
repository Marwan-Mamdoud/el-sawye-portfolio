import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "start" }}>
            Hi Everyone, I am{" "}
            <span className="purple">Abd El-Rahman El-Sawye</span>
            &nbsp;from&nbsp;
            <span className="purple">Cairo, Egypt.</span>
            <br />
            I am currently employed as a UI UX Designer at Noubodiez.
            <br />
            <br />
          </p>
          <ul></ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abd El-Rahman El-Sawye</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
