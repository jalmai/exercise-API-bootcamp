const xhr = new XMLHttpRequest();
xhr.open("get", "https://majazocom.github.io/Data/pokemons.json", true);
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4) {
    let pokemons = JSON.parse(xhr.responseText);
    allNamesToConsole(pokemons);
    let list = namesToList(pokemons);
    document.querySelector(".pokemons").appendChild(list);
  } else {
    console.error("Error: ", xhr.status);
  }
});
xhr.send();

const dogRequest = new XMLHttpRequest();
dogRequest.open("get", "https://majazocom.github.io/Data/dogs.json", true);
dogRequest.addEventListener("readystatechange", () => {
  if (dogRequest.readyState === 4) {
    let dogs = JSON.parse(dogRequest.responseText);
    allNamesToConsole(dogs);
    let dogHTML = namesToList(dogs);
    console.log(dogHTML);
    document.querySelector(".dogs").appendChild(dogHTML);
  } else {
    console.error("Error: ", dogRequest.status);
  }
});
dogRequest.send();

const bookRequest = new XMLHttpRequest();
bookRequest.open("get", "https://majazocom.github.io/Data/books.json", true);
bookRequest.addEventListener("readystatechange", () => {
  if (bookRequest.readyState === 4) {
    let books = JSON.parse(bookRequest.responseText);
    console.log(books);
    let longBooks = [];
    books.forEach((book) => {
      if (book.pages > 500) {
        longBooks.push(book.title);
      }
    });
    let booksHtml = arrayToList(longBooks);
    document.querySelector(".books").appendChild(booksHtml);
  } else {
    console.error("Error: ", bookRequest.status);
  }
});
bookRequest.send();

function namesToList(listArray) {
  let htmlList = document.createElement("ul");
  listArray.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element.name;
    htmlList.appendChild(li);
  });
  return htmlList;
}
function arrayToList(listArray) {
  let htmlList = document.createElement("ul");
  listArray.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element;
    htmlList.appendChild(li);
  });
  return htmlList;
}
function allNamesToConsole(list) {
  list.forEach((item) => {
    console.log(item.name);
  });
}
