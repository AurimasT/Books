let bookList = [];

function addBook() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const category = document.getElementById('category').value;
  const publicationDate = document.getElementById('publicationDate').value;
  const price = document.getElementById('price').value;

  if (title === '' || author === '' || category === '' || publicationDate === '' || price === '') {
    alert('Please fill in all fields');
    return;
  }

  const book = {
    title,
    author,
    category,
    publicationDate,
    price
  };

  bookList.push(book);
  displayBookList();
}

function displayBookList() {
  const bookTable = document.getElementById('bookTable');

  // Clear table body
  bookTable.innerHTML = '';

  // Add each book to the table
  bookList.forEach(book => {
    const row = bookTable.insertRow();

    const titleCell = row.insertCell(0);
    titleCell.innerHTML = book.title;

    const authorCell = row.insertCell(1);
    authorCell.innerHTML = book.author;

    const categoryCell = row.insertCell(2);
    categoryCell.innerHTML = book.category;

    const publicationDateCell = row.insertCell(3);
    publicationDateCell.innerHTML = book.publicationDate;

    const priceCell = row.insertCell(4);
    priceCell.innerHTML = book.price;
  });
}
