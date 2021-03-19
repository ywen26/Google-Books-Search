import React from "react";
import { Row, Col } from "../Grid/index";

function SearchList(props) {
  return (
    <div className="card mt-5">
      <ul className="list-group search-results">
        {props.books.map(book => (
          <li className="list-group-item" key={book.id}>
            <Row>
              <Col size="md-2">
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt="book" />
              </Col>

              <Col size="md-10">
                <h3>{book.volumeInfo.title}</h3>
                <h5>{book.volumeInfo.authors?.join(", ")}</h5>
                <p>{book.volumeInfo.description}</p>
              </Col>

              <Col size="md-12">
                <a href={book.volumeInfo.previewLink} target="_blank">
                  <button type="button" className="btn btn-outline-primary mt-3">View Book</button>
                </a>
                <button type="button" onClick={props.handleSavedBook} className="btn btn-outline-success mt-3 ml-2">Save Book</button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchList;