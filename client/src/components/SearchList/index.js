import React from "react";
import { Row, Col } from "../Grid/index";

function SearchList(props) {
  return (
    <ul className="list-group search-results">
      {props.books.map(book => (
        <li key={book} >
          <Row>
            <Col size="md-2">
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book" />
            </Col>

            <Col size="md-8">
              <h2>{book.volumeInfo.title}</h2>
              <h3>{book.volumeInfo.authors?.join(", ")}</h3>
              <p>{book.volumeInfo.description}</p>
            </Col>

            <a href={book.volumeInfo.previewLink} target="_blank">
              <button>View Book</button>
            </a>
          </Row>
        </li>
      ))}
    </ul>
  );
}

export default SearchList;