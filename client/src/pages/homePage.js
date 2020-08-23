import React, { Component } from "react";
import Jumbotron from "../components/jumbotron";
import Card from "../components/card";
import Search from "../components/search";
import Book from "../components/book";
import Footer from "../components/footer";
import API from "../utils/api";
import { Col, Row, Container } from "../components/grid";
import { List } from "../components/list";

class HomePage extends Component {
  state = {
    books: [],
    query: "",
    message: "search For A Book",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  getBooks = async () => {
    try {
      const result = await API.getBooks(this.state.query);
      this.setState({
        books: result.data,
      });
    } catch (error) {
      this.setState({
        books: [],
        message: "Book Not Found!",
      });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.getBooks();
  };

  handleSave = async (id) => {
    const book = this.state.books.find((book) => book.id === id);
    this.getBooks() = await API.saveBook({
      googleId: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo.subtitle,
      link: book.volumeInfo.infoLink,
      authors: book.volumeInfo.authors,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
    });
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
              <h2 className="text-center">
                Search and save your favourite books!
              </h2>
            </Jumbotron>
          </Col>
          <Col size="md-12">
            <Card title="Book Search" icon="far fa-book">
              <Search
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                query={this.state.query}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card title="Results">
              {this.state.books.length ? (
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
                          onClick={() => this.handleSave(book.id)}
                          className="btn btn-primary ml-2"
                        >
                          Save
                        </button>
                      )}
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default HomePage;
