import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import SavedList from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
  state = {
    savedBooks: []
  };

  componentDidMount = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  deleteBooks = id => {
    API.deleteBook(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col size="md-12">
              <h1 className="mt-5">Saved Book List</h1>
              <SavedList 
                books={this.state.savedBooks}
                deleteBooks={this.deleteBooks}
              />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Saved;