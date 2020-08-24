const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
module.exports = {
  findAll: async (req, res) => {
    try {
      const { query: params } = req;
      const apiBooks = await axios
        .get("https://www.googleapis.com/books/v1/volumes", {
          params,
        })
        .then((results) =>
          results.data.items.filter(
            (result) =>
              result.volumeInfo.title &&
              result.volumeInfo.infoLink &&
              result.volumeInfo.authors &&
              result.volumeInfo.description &&
              result.volumeInfo.imageLinks &&
              result.volumeInfo.imageLinks.thumbnail
          )
        );
      const dbBooks = await db.Book.find();
      const books = await apiBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );
      res.json(books);
    } catch (error) {
      res.status(404).json(err);
    }
  },
};
