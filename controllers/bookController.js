const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: async (req, res) => {
    try {
      const dbBook = await db.Book.find(req.query);
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(err);
    }
  },
  findById: async (req, res) => {
    try {
      const dbBook = await db.Book.findById(req.params.id);
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(err);
    }
  },
  create: async (req, res) => {
    try {
      const dbBook = await db.Book.create(req.body);
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(err);
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
      res.status(404).json(err);
    }
  },
  remove: async (req, res) => {
    try {
      const dbBook = await db.Book.findById(req.params.id);
      dbBook.remove();
      res.json(dbBook);
    } catch (error) {
      res.status(404).json(err);
    }
  },
};
