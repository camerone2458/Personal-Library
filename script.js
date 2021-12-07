let myLibrary = [
  {
    'title': 'The Hobbit',
    'author': 'JRR Tolkien',
    'pages': '304',
    'read': true
  },
  {
    'title': 'Twilight',
    'author': 'Stephanie Meyer',
    'pages': '498',
    'read': false
  }
];
const container = document.querySelector('#bookContainer');
let cardButtons = document.querySelectorAll('#delete-button');
let checkRead = document.querySelectorAll('read-or-not');

function newBook(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

function addBookToLibrary() {
  let newTitle = prompt('What is the book title?');
  let newAuthor = prompt('Who is the author?');
  let newPages = prompt('How many pages?');
  let newRead = confirm('Choose OK if you have read this book already!');
  let nextBook = new newBook(newTitle, newAuthor, newPages, newRead);
  myLibrary.push(nextBook);
  createCards();
  checkRead = document.querySelectorAll('#read-or-not');
};

function createCards() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  myLibrary.forEach((book) => {
    let newCard = document.createElement('div');
    newCard.id = book.title.replace(/\s/g, '');
    newCard.className = 'bookCard flex-column';
    let deleteButton = document.createElement('button')
    deleteButton.id = 'delete-button';
    deleteButton.className = book.title.replace(/\s/g, '');
    deleteButton.textContent = 'Remove Book';
    newCard.appendChild(deleteButton);
    let title = document.createElement('p');
    title.textContent = 'Title : ' + book.title;
    let author = document.createElement('p');
    author.textContent = 'Author : ' + book.author;
    let pages = document.createElement('p');
    pages.textContent = 'Pages : ' + book.pages;
    let img = document.createElement('img');
    if (book.read === true) {
      img.src = 'images/checkMark.png';
      img.className = 'read';
    } else {
      img.src = 'images/cross.png';
      img.className = 'not-read';
    };
    img.id = 'read-or-not';
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(img);
    container.appendChild(newCard);
  });
  cardButtons = document.querySelectorAll('#delete-button');
  checkRead = document.querySelectorAll('#read-or-not');
};

createCards();

checkRead.forEach((img) => {
  img.addEventListener('click', function() {
    if (img.className == 'not-read') {
      img.src = 'images/checkMark.png';
      img.className = 'read';
    } else if (img.className == 'read') {
      img.src = 'images/cross.png';
      img.className = 'not-read';
    };
  });
  console.log(img.className);
});

cardButtons.forEach((button) => {
  button.addEventListener('click', function(e) {
    let cardID = '#' + button.className;
    let removeCard = document.querySelector(cardID);
    while(removeCard.firstChild) {
      removeCard.removeChild(removeCard.firstChild);
    }
    removeCard.remove();
  });
});
