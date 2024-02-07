const xhr = new XMLHttpRequest();
xhr.open("get", "https://majazocom.github.io/Data/pokemons.json", true);
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4) {
    let pokemons = JSON.parse(xhr.responseText);
    let list = pokeList(pokemons);
    console.log(list);
    document.querySelector(".pokemons").appendChild(list);
  } else {
    console.error("Error: ", xhr.status);
  }
});
xhr.send();

function pokeList(pokemons) {
  let htmlList = document.createElement("ul");
  pokemons.forEach((element) => {
    let li = document.createElement("li");
    li.innerText = element.name;
    htmlList.appendChild(li);
  });
  return htmlList;
}
function singlePkmn(pokemon) {
  console.log(pokemon);
}
