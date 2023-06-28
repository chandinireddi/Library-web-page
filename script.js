// Book data
const books = [
  { title: "Harry Potter", author: "J.K.Rowling", subject: "death", publishDate: "1997", image: "http://i2.wp.com/geekdad.com/wp-content/uploads/2013/02/HP1-Kibuishi.jpg" },
  { title: "Wings of Fire", author: "T.Sutherland", subject: "Tales of seven dragon tribes", publishDate: "2012", image: "https://pbs.twimg.com/media/D4pDwTCUIAAZLDQ.jpg:large" },
  { title: "The Magicians", author: "Lev Grossman", subject: "Good vs Evil", publishDate: "2009", image: "https://cdn.kobo.com/book-images/9e53e0de-3e75-45ea-88d4-d52d489caafb/1200/1200/False/the-magicians-2.jpg" },
  { title: "To Kill a Mockingbird", author: "Harper Lee", subject: "Fiction, Coming-of-Age, Social Issues", publishDate: "1960", image: "https://media.movieassets.com/static/images/items/movies/posters/410db45093c02465213de10c1fe67290.jpg" },
   { title: "1984", author: "George Orwell", subject: "Fiction, Dystopian, Political", publishDate: "1949", image: "https://i.ebayimg.com/images/g/orAAAOSwyKZdvUpC/s-l1600.jpg" },
  { title: "Python Crash Course", author: "Eric Matthes", subject: "Python Programming, Beginner's Guide", publishDate: "2015", image: "https://1.bp.blogspot.com/-oA1twqJ5fkQ/X5__RnvruYI/AAAAAAAAJSo/PHeLsS8cg2AwwbCSE-PiFRWkmcTsNcV4QCLcBGAsYHQ/s1319/EVBA.info1604320982736.jpeg" },
  { title: "JavaScript: The Good Parts", author: "Douglas Crockford", subject: "JavaScript Programming, Best Practices", publishDate: "2008", image: "https://covers.oreillystatic.com/images/9780596517748/lrg.jpg" },
  { title: "The Pragmatic Programmer: Your Journey to Mastery", author: "Andrew Hunt and David Thomas", subject: "Software Development, Programming Practices", publishDate: "1999", image: "https://image.slidesharecdn.com/0135957052-thepragmaticprogrammerbydavidthomas-190920211554/95/2019-the-pragmatic-programmer-pdf-your-journey-to-mastery-20th-anniversary-edition-2nd-edition-by-david-thomas-addisonwesley-professional-1-638.jpg?cb=1569014320" },
];

const cart = [];

// Display books
const bookListContainer = document.getElementById("book-list");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountContainer = document.getElementById("cart-count");

function displayBooks(books) {
  bookListContainer.innerHTML = "";
  books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const bookImage = document.createElement("img");
    bookImage.src = book.image;
    bookImage.alt = book.title;

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const subject = document.createElement("p");
    subject.textContent = `Subject: ${book.subject}`;

    const publishDate = document.createElement("p");
    publishDate.textContent = `Publish Date: ${book.publishDate}`;

    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "Add to Cart";
    addToCartBtn.addEventListener("click", () => {
      addToCart(index);
    });

    bookCard.appendChild(bookImage);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(subject);
    bookCard.appendChild(publishDate);
    bookCard.appendChild(addToCartBtn);

    bookListContainer.appendChild(bookCard);
  });
}

function addToCart(index) {
  const book = books[index];
  cart.push(book);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  cartItemsContainer.innerHTML = "";
  cart.forEach((book, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const title = document.createElement("h4");
    title.textContent = book.title;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeFromCart(index);
    });

    cartItem.appendChild(title);
    cartItem.appendChild(removeBtn);
    cartItemsContainer.appendChild(cartItem);
  });

  cartCountContainer.textContent = cart.length;
}

displayBooks(books);
