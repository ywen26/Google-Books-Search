import React, { Component } from "react";
import API from "../utils/API";
import Hero from "../components/Hero";
import {Container, Row, Col} from "../components/Grid";
import SearchForm from "../components/SearchForm";
import backgroundImage from "../images/bgImage.jpg";
import SearchList from "../components/SearchList";

class Search extends Component {
  state = {
    search: "",
    books: [],
    error: ""
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.items);
        }
        this.setState({ books: res.data.items, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  handleSavedBook = bookData => {
    API.saveBook({
      id: bookData.id,
      title: bookData.title,
      authors: bookData.authors,
      description: bookData.description,
      link: bookData.link,
      image: bookData.image
    })
    .then(alert("Book saved successfully!"))
    .catch(err => console.log(err));
  };

  render() {
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
              <SearchForm 
                value={this.state.search}
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange} 
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-12">
              <SearchList 
                books={this.state.books} 
                handleSavedBook={this.handleSavedBook}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
  
export default Search;
