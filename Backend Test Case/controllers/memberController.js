const { Member, sequelize, BookMember } = require('../models');
const crypto = require('crypto');

class MemberController {
  static async list(req, res, next) {
    try {
      const options = {
        attributes: ['uuid', 'code', 'name'],
      };

      const data = await Member.findAll(options);

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
        attributes: ['uuid', 'code', 'name'],
      };

      const data = await Member.findOne(options);
      if (!data) return res.status(404).json({ message: 'data tidak ditemukan' });

      return res.status(200).json(data);
    } catch (err) {
      return next(err);
    }
  }

  static async create(req, res, next) {
    try {
      const body = req.body;
      const { code, name } = body;
      const memberCreate = await Member.create({
        uuid: crypto.randomUUID(),
        code: code,
        name: name,
      });
      res.status(201).json({
        statusCode: 201,
        data: memberCreate,
      });
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { params } = req;
      const { uuid } = params;
      const body = req.body;

      const { code, name } = body;
      let data = { code, name };
      const editData = await Member.update(data, {
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

      const deleted = await Member.destroy({ where: { uuid } });
      res.status(201).json({
        message: 'Successfully Delete',
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = MemberController;
