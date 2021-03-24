import React from "react";
import { Col, Row } from "../Grid/index";

function SavedList(props) {
  return (
    <div className="card mt-5">
      <ul className="list-group search-results">
        {props.books.map(book => (
          <li className="list-group-item" key={book._id} >
            <Row>
              <Col size="md-2">
                <img src={book.image} alt="book" />
              </Col>
  
              <Col size="md-10">
                <h3>{book.title}</h3>
                <h5>{book.authors}</h5>
                <p>{book.description}</p>
              </Col>
  
              <Col size="md-12">
                <a href={book.link} target="_blank">
                  <button type="button" className="btn btn-outline-primary mt-3">View Book</button>
                </a>
                <button type="button" className="btn btn-outline-danger mt-3 ml-2">Delete Book</button>
              </Col>
            </Row>
          </li>
        ))}
      </ul>
    </div>
  );
}
  
  export default SavedList;