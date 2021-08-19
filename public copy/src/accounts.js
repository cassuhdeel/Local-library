function findAccountById(accounts, id) {
  let found = accounts.find((account) => account.id === id)
  return found
}

function sortAccountsByLastName(accounts) {
  let result = accounts.sort((accA, accB) => (accA.name.last > accB.name.last ? 1 : -1))
  return result
}

function getTotalNumberOfBorrows(account, books) {
 const result = books.reduce((acc, book) => {
   let count = book.borrows.filter((book) => book.id === account.id).length
   acc += count;
   return acc;
 }, 0) 
 return result;
}

function getBooksPossessedByAccount(account, books, authors) { let books_taken = []; // create array for books taken by account.id

  // book info
  books.forEach(book=>{
    if (book.borrows.find(item=>item.id === account.id && !item.returned)) {
      books_taken.push(book);
    }
  })

  books_taken.forEach(book=>{
    let anAuthor = authors.find(person => person.id === book.authorId);
    book['author'] = anAuthor;
  })

  return books_taken;
}

    function getAuthor(book, authors) {
    const author = authors.find((author) => author.id === book.authorId)
    return author
      
  let result = borrowedBooks.map((book) => {
    return {...book, author: getAuthor(book, authors)}
    return result
  })}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
