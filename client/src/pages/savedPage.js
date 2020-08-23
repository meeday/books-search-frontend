import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import Card from "../components/card";
import Book from "../components/book";
import Footer from "../components/footer";
import API from "../utils/api";
import { Col, Row, Container } from "../components/grid";
import { List } from "../components/list";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = async () => {
    try {
      const result = await API.getSavedBooks();
      this.setState({
        books: result.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleDelete = async (id) => {
    this.getSavedBooks() = await API.deleteBook(id);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>Google Books Search</strong>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Saved Books" icon="download">
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
                          onClick={() => this.handleDelete(book._id)}
                          className="btn btn-danger ml-2"
                        >
                          Delete
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">You Have No Saved Books</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Saved;