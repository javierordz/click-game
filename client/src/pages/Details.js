import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Detail extends Component {
  state = {
    movie: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id
 componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ movie: res.data })
      )
      .catch(err => console.log(err));
      };
    

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.movie.title} by {this.state.movie.director}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Year: {this.state.movie.releaseYear}</h1>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Directors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;