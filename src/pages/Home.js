import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Form from "../components/Form";
import Book from "../components/Book";
import Footer from "../components/Footer";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List } from "../components/List";

class Home extends Component {
  state = {
    books: [],
    q: "",
    message: "Search For A Book To Begin!",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = async () => {
    try {
      const res = await API.getBooks(this.state.q);
      this.setState({
        books: res.data,
      });
    } catch (error) {
      this.setState({
        books: [],
        message: "Book Not Found",
      });
    }
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleBookSave = async (id) => {
    const book = this.state.books.find((book) => book.id === id);

    await API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    });
    this.getBooks();
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
              <h2 className="text-left text-white">Search For Your Favourite Books!</h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Form 
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <br/>
            <div title="Results">
              {this.state.books && this.state.books.length ? (
                <List>
                  {this.state.books.map((book) => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      subtitle={book.volumeInfo.subtitle}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      Button={() => (
                        <button
                          onClick={() => this.handleBookSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center text-white">{this.state.message}</h2>
              )}
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Home;
