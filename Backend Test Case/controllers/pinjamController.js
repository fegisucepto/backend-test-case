const { Pinjam, Member, Book } = require('../models');
const crypto = require('crypto');

class PinjamController {
  static async create(req, res, next) {
    try {
      const body = req.body;
      const { member_id, book_id, tgl_pinjam } = body;

      const resMemberId = await Pinjam.findOne({ where: { book_id: body.book_id }, attributes: ['id'] });
      if (resMemberId) return res.status(400).json({ message: 'Buku Sudah Di Pinjam' });

      const resPinjam = await Pinjam.findOne({ where: { member_id: body.member_id }, attributes: ['id'] });
      if (resPinjam) return res.status(400).json({ message: 'Sudah melampaui batas Maksimul pinjam' });

      const pinjamCreate = await Pinjam.create({
        uuid: crypto.randomUUID(),
        member_id: member_id,
        book_id: book_id,
        tgl_pinjam: tgl_pinjam,
      });
      res.status(201).json({
        statusCode: 201,
        data: pinjamCreate,
      });
    } catch (err) {
      next(err);
    }
  }

  static async list(req, res, next) {
    try {
      const options = {
        include: [
          {
            model: Book,
            attributes: ['code', 'title', 'author', 'stock'],
          },
          {
            model: Member,
            attributes: ['code', 'name'],
          },
        ],
        attributes: ['id', 'uuid', 'tgl_pinjam', 'tgl_kembali', 'created_at', 'updated_at'],
      };

      const data = await Pinjam.findAll(options);

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
        include: [
          {
            model: Book,
            attributes: ['code', 'title', 'author', 'stock'],
          },
          {
            model: Member,
            attributes: ['code', 'name'],
          },
        ],
        attributes: ['id', 'uuid', 'tgl_pinjam', 'tgl_kembali', 'created_at', 'updated_at'],
        where: { uuid },
      };

      const data = await Pinjam.findOne(options);
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

      const { tgl_kembali } = body;
      // const datacek = await Pinjam.findOne({ where: { tgl_pinjam}, attributes: ['id'] })
      // if (tgl_kembali - datacek ) {
      //   return res.status(400).json({ message: 'Anda dikenai penalti karna mengembalikan lebih dari 7 hari' })
      // }
      let data = { tgl_kembali };
      const editData = await Pinjam.update(data, {
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

      const deleted = await Pinjam.destroy({ where: { uuid } });
      res.status(201).json({
        message: 'Successfully Delete',
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PinjamController;
