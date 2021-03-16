import React, { Component } from "react";
import { Container } from "../components/Grid";
import SavedList from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <h1>Saved Book List</h1>
              <SavedList />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Saved;