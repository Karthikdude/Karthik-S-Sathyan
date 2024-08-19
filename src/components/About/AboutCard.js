import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Karthik S Sathyan </span>
            from <span className="purple">India.</span>
            <br />
            I am currently pursuing a BCA degree at Srinivas University, Mangalore.
            <br />
            I have a strong passion for ethical hacking and cybersecurity.
            <br />
            <br />
            Besides hacking, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Cybersecurity Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Bug Bounty Programs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading About Latest Tech Trends
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to secure the digital world one byte at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Karthik S Sathyan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
