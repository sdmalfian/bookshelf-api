/* eslint-disable import/extensions */
const { addBookHandler } = require('./handler/addBookHandler');
const { getAllBooksHandler, getBookByIdHandler } = require('./handler/getBookHandler');
const { editBookByIdHandler } = require('./handler/editBookHandler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  // {
  //   method: 'DELETE',
  //   path: '/notes/{id}',
  //   handler: deleteNoteByIdHandler,
  // },
];

module.exports = routes;
