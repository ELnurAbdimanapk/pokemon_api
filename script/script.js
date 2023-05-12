let pokemonList = [];
// Loading
const container = document.getElementById("container");
container.innerHTML = "";
const pokemonWrapper = document.createElement("div");
pokemonWrapper.classList.add("pokemon");
const message = document.createElement("h1");
message.textContent = "Loading..... ";
pokemonWrapper.appendChild(message);
container.appendChild(pokemonWrapper);

async function fetchPokemon() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    pokemonList = data.results;
    displayPokemonData(pokemonList);
    console.log("loading");
  } catch (error) {
    console.log(error);
    const container = document.getElementById("container");
    container.innerText = "Failed to fetch Pokemon";
  }
}
