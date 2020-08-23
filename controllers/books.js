const db = require("../models");

module.exports = {
  findAll: async (req, res) => {
    try {
      const AllBooks = await db.Book.find(req.query);
      res.json(AllBooks);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  findById: async (req, res) => {
    try {
      const dbBook = await db.Book.findById(req.params.id);
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  create: async (req, res) => {
    try {
      const dbBook = await db.Book.create(req.body);
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  update: async (req, res) => {
    try {
      const dbBook = await db.Book.findOneAndUpdate(
        { id: req.params.id },
        req.body
      );
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(error);
    }
  },

  remove: async (req, res) => {
    try {
      const dbBook = await db.Book.findById(req.params.id);
      dbBook.remove();
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(error);
    }
  },
};
