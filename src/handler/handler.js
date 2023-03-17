const { addBookHandler } = require('./addBookHandler');
const { getAllBooksHandler, getBookByIdHandler } = require('./getBookHandler');
const { editBookByIdHandler } = require('./editBookHandler');
const { deleteBookByIdHandler } = require('./deleteBookHandler');

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
};
