const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      const { query: params } = req;
      const result = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params,
        }
      );
      result.data.items.filter(
        (result) =>
          result.volumeInfo.title &&
          result.volumeInfo.infoLink &&
          result.volumeInfo.authors &&
          result.volumeInfo.description &&
          result.volumeInfo.imageLinks &&
          result.volumeInfo.imageLinks.thumbnail
      );
      const googleBooks = await db.Book.find();
      googleBooks.filter((apiBook) =>
        dbBooks.every((dbBook) => dbBook.googleId.toString() !== apiBook.id)
      );
      res.json(googleBooks);
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
