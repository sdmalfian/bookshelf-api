const books = require('../books');

const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  // search by name filter
  if (name) {
    const filteredBooks = books.filter((book) => (
      book.name.toLowerCase().includes(name.toLowerCase())
    ));
    if (!filteredBooks) {
      const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
      response.code(404);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: {
        books: filteredBooks.map((book) => (
          {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          }
        )),
      },
    });
    response.code(200);
    return response;
  }
  // reading filter
  if (reading) {
    const filteredBooks = books.filter((book) => (
      book.reading === Boolean(parseInt(reading, 10))
    ));
    if (!filteredBooks) {
      const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
      response.code(404);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: {
        books: filteredBooks.map((book) => (
          {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          }
        )),
      },
    });
    response.code(200);
    return response;
  }
  // finished filter
  if (finished) {
    const filteredBooks = books.filter((book) => (
      book.finished === Boolean(parseInt(finished, 10))
    ));
    if (!filteredBooks) {
      const response = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
      });
      response.code(404);
      return response;
    }
    const response = h.response({
      status: 'success',
      data: {
        books: filteredBooks.map((book) => (
          {
            id: book.id,
            name: book.name,
            publisher: book.publisher,
          }
        )),
      },
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: {
      books: books.map((book) => (
        {
          id: book.id,
          name: book.name,
          publisher: book.publisher,
        }
      )),
    },
  });
  response.code(200);
  return response;
};

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;
  const index = books.findIndex((book) => book.id === bookId);
  if (index === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan',
    });
    response.code(404);
    return response;
  }

  const response = h.response({
    status: 'success',
    data: { book: books[index] },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBooksHandler, getBookByIdHandler };
