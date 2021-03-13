import React from "react";
import Hero from "../components/Hero";
import {Container, Row, Col} from "../components/Grid";
import SearchForm from "../components/SearchForm";
import backgroundImage from "../images/bgImage.jpg";

function About() {
    return (
      <div>
        <Hero backgroundImage={backgroundImage}>
          <h1>Books</h1>
          <h2>Find your readings here!</h2>
        </Hero>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Search Books</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <SearchForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
  export default About;