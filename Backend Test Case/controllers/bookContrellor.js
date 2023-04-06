const { Book } = require('../models');
const crypto = require('crypto');

class BookController {
  static async create(req, res, next) {
    try {
      const body = req.body;
      const { code, title, author, stock } = body;
      const bookCreate = await Book.create({
        uuid: crypto.randomUUID(),
        code: code,
        title: title,
        author: author,
        stock: stock,
      });
      res.status(201).json({
        statusCode: 201,
        data: bookCreate,
      });
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const options = {
        attributes: ['uuid', 'code', 'title', 'author', 'stock'],
      };

      const data = await Book.findAll(options);

      return res.status(200).json(data);
    } catch (err) {
      return next(err);
    }
  }

  static async detail(req, res, next) {
    try {
      const { params } = req;
      const { uuid } = params;

      const options = {
        where: { uuid },
        attributes: ['uuid', 'code', 'title', 'author', 'stock'],
      };

      const data = await Book.findOne(options);
      if (!data) return res.status(404).json({ message: 'data tidak ditemukan' });

      return res.status(200).json(data);
    } catch (err) {
      return next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { params } = req;
      const { uuid } = params;
      const body = req.body;

      const { code, title, author, stock } = body;
      let data = { code, title, author, stock };
      const editData = await Book.update(data, {
        where: { uuid },
      });
      if (editData[0] === 0) {
        throw new Error('error not found');
      }
      res.status(201).json({
        message: 'This News Successfully Update',
        data: data,
      });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { params } = req;
      const { uuid } = params;

      const deleted = await Book.destroy({ where: { uuid } });
      res.status(201).json({
        message: 'Successfully Delete',
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BookController;
