let bookList = [];

window.addEventListener("load", () => {
  const storedBooks = localStorage.getItem("bookList");
  if (storedBooks) {
    bookList = JSON.parse(storedBooks);
    displayBookList();
  }
});

function saveBookList() {
  localStorage.setItem("bookList", JSON.stringify(bookList));
}

function addBook() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const category = document.getElementById("category").value;
  const publicationDate = document.getElementById("publicationDate").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").value;

  if (
    title === "" ||
    imageUrl === "" ||
    author === "" ||
    category === "" ||
    publicationDate === "" ||
    price === ""
  ) {
    alert("Užpildykite visus laukelius!");
    return;
  }

  const book = {
    imageUrl,
    title,
    author,
    category,
    publicationDate,
    price,
  };

  bookList.push(book);
  saveBookList();
  displayBookList();
}

function displayBookList() {
  const bookTable = document.getElementById("bookTable");

  // Clear table body
  bookTable.innerHTML = "";

  // Add each book to the table
  bookList.forEach((book, index) => {
    const row = bookTable.insertRow();

    const imageCell = row.insertCell(0);
    if (book.imageUrl) {
      const img = document.createElement("img");
      img.src = book.imageUrl;
      img.alt = book.title;
      img.style.width = "200px";
      img.style.height = "300px";

      imageCell.appendChild(img);
    }

    const authorCell = row.insertCell(1);
    authorCell.innerHTML = book.author;

    const titleCell = row.insertCell(2);
    titleCell.innerHTML = book.title;

    const categoryCell = row.insertCell(3);
    categoryCell.innerHTML = book.category;

    const publicationDateCell = row.insertCell(4);
    publicationDateCell.innerHTML = book.publicationDate;

    const priceCell = row.insertCell(5);
    priceCell.innerHTML = book.price;

    const actionsCell = row.insertCell(6);
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", () => {
      editBook(index);
    });
    actionsCell.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteBook(index);
    });
    actionsCell.appendChild(deleteButton);
  });
}

function saveBookList() {
  localStorage.setItem("bookList", JSON.stringify(bookList));
}

function editBook(index) {
  // Fill in the form with the book's current values
  const book = bookList[index];
  document.getElementById("title").value = book.title;
  document.getElementById("author").value = book.author;
  document.getElementById("category").value = book.category;
  document.getElementById("publicationDate").value = book.publicationDate;
  document.getElementById("price").value = book.price;
  document.getElementById("imageUrl").value = book.imageUrl;

  // Add event listeners to each input element for the 'keypress' event
  const inputElements = document.querySelectorAll("input");
  inputElements.forEach((input) => {
    input.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        updateBook(index);
      }
    });
  });
}

function deleteBook(index) {
  bookList.splice(index, 1);
  saveBookList();
  displayBookList();
}

// Sort the book list by author name
bookList.sort((a, b) => {
  if (a.author < b.author) return -1;
  if (a.author > b.author) return 1;
  return 0;
});

//Sort by Author

const sortAuthorBtn = document.getElementById("sort-author-btn");
  function sortBooksByAuthor() {
  bookList.sort((a, b) => {
    const authorA = a.author.toLowerCase();
    const authorB = b.author.toLowerCase();

    if (authorA < authorB) {
      return -1;
    }
    if (authorA > authorB) {
      return 1;
    }
    return 0;
  });
  displayBookList();
}
sortAuthorBtn.addEventListener("click", sortBooksByAuthor);

// Sort by Category need to fix this

const sortComedyBtn = document.getElementById("sort-comedy-btn");
const sortRomanBtn = document.getElementById("sort-roman-btn");
const sortTragedyBtn = document.getElementById("sort-tragedy-btn");
const sortDramaBtn = document.getElementById("sort-drama-btn");
const sortHorrorBtn = document.getElementById("sort-horror-btn");
const sortBiographyBtn = document.getElementById("sort-biography-btn");

function sortBooksByCategory(category) {
  const sortedBooks = bookList.filter(book => book.category === category);
  displayBookList(sortedBooks);
}

sortComedyBtn.addEventListener("click", () => sortBooksByCategory("Comedy"));
sortRomanBtn.addEventListener("click", () => sortBooksByCategory("Roman"));
sortTragedyBtn.addEventListener("click", () => sortBooksByCategory("Tragedy"));
sortDramaBtn.addEventListener("click", () => sortBooksByCategory("Drama"));
sortHorrorBtn.addEventListener("click", () => sortBooksByCategory("Horror"));
sortBiographyBtn.addEventListener("click", () => sortBooksByCategory("Biography"));

// Sort by price

function sortBooksByPriceLowToHigh() {
  const sortedBooks = bookList.slice().sort((a, b) => a.price - b.price);
  displayBookList(sortedBooks);
}

// Define a function to sort the book list by price from highest to lowest
function sortBooksByPriceHighToLow() {
  const sortedBooks = bookList.slice().sort((a, b) => b.price - a.price);
  displayBookList(sortedBooks);
}

// Get the "Sort by Price" buttons from the navigation
const sortPriceLowToHighBtn = document.getElementById("sort-price-low-to-high-btn");
const sortPriceHighToLowBtn = document.getElementById("sort-price-high-to-low-btn");

// Add event listeners to the "Sort by Price" buttons
sortPriceLowToHighBtn.addEventListener("click", sortBooksByPriceLowToHigh);
sortPriceHighToLowBtn.addEventListener("click", sortBooksByPriceHighToLow);