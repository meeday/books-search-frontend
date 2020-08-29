import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = async () => {
    try {
      const res = await API.getSavedBooks();

      this.setState({
        books: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleBookDelete = async (id) => {
   await API.deleteBook(id)
    this.getSavedBooks();
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-left text-white">
                <strong>Google Books Search</strong>
              </h1>
              <h2 className="text-left text-white">
                Saved Books
              </h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div title="Saved Books" icon="download">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book._id}
                      title={book.title}
                      subtitle={book.subtitle}
                      link={book.link}
                      authors={book.authors.join(", ")}
                      description={book.description}
                      image={book.image}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;
