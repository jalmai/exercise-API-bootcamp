pokemonLister();
dogLister();
bookLister();
conferenceLister();

function pokemonLister() {
  const pkmnRequest = new XMLHttpRequest();
  pkmnRequest.open(
    "get",
    "https://majazocom.github.io/Data/pokemons.json",
    true
  );
  pkmnRequest.addEventListener("readystatechange", () => {
    if (pkmnRequest.readyState === 4) {
      let pokemons = JSON.parse(pkmnRequest.responseText);
      allNamesToConsole(pokemons);
      let list = namesToList(pokemons);
      document.querySelector(".pokemons").appendChild(list);
    } else {
      console.error("Error: ", pkmnRequest.status);
    }
  });
  pkmnRequest.send();
}
function dogLister() {
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
}
function bookLister() {
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
}
function conferenceLister() {
  const confRequest = new XMLHttpRequest();
  confRequest.open(
    "get",
    "https://majazocom.github.io/Data/attendees.json",
    true
  );
  confRequest.addEventListener("readystatechange", () => {
    if (confRequest.readyState === 4) {
      let attendees = JSON.parse(confRequest.responseText);
      let attendingAttendees = [];
      let allergicAttendees = [];
      attendees.forEach((attendee) => {
        if (attendee.attending) {
          attendingAttendees.push(attendee.name);
          if (attendee.allergies.length) {
            allergicAttendees.push(attendee.name);
          }
        }
      });
      let attendingAttendeesHtml = arrayToList(attendingAttendees);
      let allergicAttendeesHtml = arrayToList(allergicAttendees);
    } else {
      console.error("Error: ", confRequest.status);
    }
  });
  confRequest.send();
}
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
