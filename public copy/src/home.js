function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let count = 0
  for (let i = 0; i < books.length; i++) {
    if (books[i].borrows[0].returned === false)
      count += 1
  }
    return count
}

function getMostCommonGenres(books) { 
 const onlyGenres = books.reduce((acc, book)=> {
  const { genre } = book
   if(!acc[genre]) {
   acc[genre] =  { name: genre, count: 1}
   }
   else acc[genre].count++
return acc
 }, {})
 return Object.values(onlyGenres).sort((a, b)=> b.count - a.count).splice(0, 5)

}
  


function getMostPopularBooks(books) {
   return books.map((book) => {
   return {name: book.title, count: book.borrows.length}
     }).sort((bookOne, bookTwo) => (bookOne.count < bookTwo.count ? 1 : -1)).slice(0, 5)
   }
  





function getMostPopularAuthors(books, authors) {

  const mostPopular = [];
  for (let i = 0; i < authors.length; i++) {
    let author = { name: authors[i].name.first + " " + authors[i].name.last, count: 0 };
    for (let j = 0; j < books.length; j++) {
      if (books[j].authorId === authors[i].id) {
        author.count += books[j].borrows.length;
      } } mostPopular.push(author); } 

  mostPopular.sort((first, last) => last.count - first.count);
  return mostPopular.slice(0, 5);
}



module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
