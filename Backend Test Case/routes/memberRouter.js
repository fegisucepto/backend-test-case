const express = require("express");
const router = express.Router();

const book = require("../controllers/bookContrellor");
const member = require("../controllers/memberController");
const pinjam = require("../controllers/pinjamController");


// Route for books
router
  .route("/book")
  .get(book.list)
  .post(book.create);
router
  .route("/book/:uuid")
  .get(book.detail)
  .put(book.update)
  .patch(book.update)
  .delete(book.delete);

// Route for member
router
  .route("/member")
  .get(member.list)
  .post(member.create);
router
  .route("/member/:uuid")
  .get(member.detail)
  .put(member.update)
  .patch(member.update)
  .delete(member.delete);

// Route for Pinjaman
router
  .route("/pinjam")
  .get(pinjam.list)
  .post(pinjam.create);
router
  .route("/pinjam/:uuid")
  .get(pinjam.detail)
  .put(pinjam.update)
  .patch(pinjam.update)
  .delete(pinjam.delete);


module.exports = router;
