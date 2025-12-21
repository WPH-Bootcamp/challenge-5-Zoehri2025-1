// Define the Book type
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// Array to store books
const books: Book[] = [];

// Function to add a new book
function addBook(title: string, author: string, publicationYear: number): void {
  const book: Book = {
    title,
    author,
    publicationYear,
  };
  books.push(book);
  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

// Function to list all books
function listBooks(): void {
  console.log('All Books:');
  books.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// Function to search for books by title
function searchBook(title?: string): void {
  if (!title) {
    console.log('Please provide a title to search.');
    return;
  }

  const matchingBooks = books.filter((book) => book.title.includes(title));

  if (matchingBooks.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  console.log(`Search Results for "${title}":`);
  matchingBooks.forEach((book) => {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  });
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
