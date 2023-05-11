function searchPokemon() {
  const searchInput = document.getElementById('search').value;
  let filteredPokemon = pokemonList.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const container = document.getElementById('container');
  container.innerHTML = "";
  const pokemonWrapper = document.createElement("div");
    pokemonWrapper.classList.add("pokemon");
 
  if (filteredPokemon.length === 0) {
    const message = document.createElement('h1');
    message.textContent = "Any Pokemon Found";
    pokemonWrapper.appendChild(message)
    container.appendChild(pokemonWrapper);
    
  } else {
    displayPokemonData(filteredPokemon);
  }
}

fetchPokemon();
