import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: async (q) => {
    const result = await axios.get("/api/google", {
      params: { q: "title:" + q },
    });
    return result;
  },
  // Gets all saved books
  getSavedBooks: async () => {
    const result = await axios.get("/api/books");
    return result;
  },
  // Deletes the saved book with the given id
  deleteBook: async (id) => {
    const result = await axios.delete("/api/books/" + id);
    return result;
  },
  // Saves an book to the database
  saveBook: async (bookData) => {
    const result = await axios.post("/api/books", bookData);
    return result;
  },
};
