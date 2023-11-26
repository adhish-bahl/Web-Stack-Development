const fetchBooksButton = document.getElementById("fetchBooks");
const bookList = document.getElementById("bookList");

fetchBooksButton.addEventListener("click", function () {
  const res = new XMLHttpRequest();
  res.open(
    "GET",
    "https://www.googleapis.com/books/v1/volumes?q=fiction",
    true
  );

  res.onload = function () {
    if (res.status === 200) {
      const books = JSON.parse(res.responseText);
      displayBooks(books.items);
      fetchBooksButton.style.display = "none";
    } else {
      console.error("Failed to fetch data: " + res.status);
    }
  };

  res.send();
});

function displayBooks(books) {
  bookList.innerHTML = "";
  console.log(books[2].volumeInfo.imageLinks.smallThumbnail);

  books.forEach(function (book) {
    const card = document.createElement("card");
    card.setAttribute(
      "class",
      "card mt-5 p-1 d-flex justify-content-center align-items-center flex-row my-2"
    );
    card.setAttribute("style", "width: 85vw; border-radius: 10px;");

    const img = new Image();
    img.setAttribute("class", "mx-2");
    img.src = book.volumeInfo.imageLinks.smallThumbnail;
    card.appendChild(img);

    const body = document.createElement("div");
    body.setAttribute("class", "card-body");

    const title = document.createElement("h4");
    title.setAttribute("class", "card-title");
    title.textContent = book.volumeInfo.title;
    body.appendChild(title);

    const author = document.createElement("h5");
    author.setAttribute("class", "card-text px-5");
    author.textContent = `Author: ${book.volumeInfo.authors.toString()}`;
    body.appendChild(author);

    const desc = document.createElement("div");
    desc.setAttribute("class", "card-text");
    desc.setAttribute("style", "text-align: justify;");
    desc.textContent = book.volumeInfo.description;
    body.appendChild(desc);

    card.appendChild(body);

    bookList.appendChild(card);
  });
}
