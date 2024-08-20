import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Key-Logger"
              description="A simple Python keylogger that captures and logs keystrokes to a file, using base64 encoding for data obfuscation. Ideal for learning purposes and understanding basic keylogging techniques"
              ghLink="https://github.com/Karthikdude/SCT_CS_04"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Password Strength Validator"
              description="A JavaScript tool that provides real-time feedback on password strength. It checks for criteria such as length, uppercase letters, lowercase letters, numbers, and special characters, helping users create stronger passwords.."
              ghLink="https://github.com/Karthikdude/SCT_CS_03"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Text Encrypter"
              description="A web application built with Flask that allows users to encrypt and decrypt text using the Caesar cipher algorithm. With a straightforward interface, you can easily apply encryption and decryption to any text by specifying a shift value."
              ghLink="https://github.com/Karthikdude/SCT_CS_01"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Two-Factor Authentication (2FA) Implementation"
              description="A Flask web application demonstrating a basic implementation of two-factor authentication (2FA) using TOTP and QR codes. Includes user registration, login with password, and verification using a 2FA token."
              ghLink="https://github.com/Karthikdude/FUTURE_CS_01"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Metadata Extractor"
              description="Metadata Extractor is a Flask app that lets users upload images and view detailed metadata, including file info, dimensions, and EXIF data like camera make and GPS coordinates.."
              ghLink="https://github.com/Karthikdude/MetaData-Extractor"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
