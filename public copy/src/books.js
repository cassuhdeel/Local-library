function findAuthorById(authors, id) {
  let result = authors.find((auth) => auth.id === id)
  return result
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
    let newArr = []
    
  let loanedBooks = books.filter((book) => book.borrows[0].returned === false)

  let availableBooks = books.filter((book) => book.borrows[0].returned === true)
  
  newArr.push(loanedBooks)
  newArr.push(availableBooks)
  return newArr
  
}

function getBorrowersForBook(book, accounts) {

  return book.borrows.map(borrow => {
    let account = accounts.find(acc => acc.id === borrow.id)
    return { ...borrow, ...account}
  }).slice(0, 10)
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
