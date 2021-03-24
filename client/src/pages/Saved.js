import React, { Component } from "react";
import { Container, Row, Col } from "../components/Grid";
import SavedList from "../components/SavedList";
import API from "../utils/API";

class Saved extends Component {
  // Setting initial state of component
  state = {
    savedBooks: []
  };

  // Load all books which have been saved to database
  componentDidMount = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the database
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