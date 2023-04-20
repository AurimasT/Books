function editBook(index) {
    // Fill in the form with the book's current values
    const book = bookList[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('publisher').value = book.publisher;
    document.getElementById('publicationDate').value = book.publicationDate;
    document.getElementById('isbn').value = book.isbn;
    document.getElementById('imageUrl').value = book.imageUrl;
  
    // Replace the "Add Book" button with an "Update Book" button
    const addButton = document.getElementById('addButton');
    addButton.style.display = 'none';
    const updateButton = document.createElement('button');
    updateButton.id = 'updateButton';
    updateButton.innerText = 'Update Book';
    updateButton.addEventListener('click', () => {
      updateBook(index);
    });
    addButton.parentNode.insertBefore(updateButton, addButton.nextSibling);
  }
  
  function updateBook(index) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const publicationDate = document.getElementById('publicationDate').value;
    const isbn = document.getElementById('isbn').value;
    const imageUrl = document.getElementById('imageUrl').value;
  
    if (title === '' || author === '' || publisher === '' || publicationDate === '' || isbn === '') {
      alert('Please fill in all fields');
      return;
    }
  
    const book = {
      title,
      author,
      publisher,
      publicationDate,
      isbn,
      imageUrl
    };
  
    bookList[index] = book;
    saveBookList();
    displayBookList();
  
    // Reset the form and show the "Add Book" button again
    resetForm();
    const updateButton = document.getElementById('updateButton');
    updateButton.parentNode.removeChild(updateButton);
    const addButton = document.getElementById('addButton');
    addButton.style.display = 'block';
  }