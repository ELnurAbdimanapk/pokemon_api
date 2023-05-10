function searchPokemon () {
    const searchInput = document.getElementById('search').value
    const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
    displayPokemonData(filteredPokemon)
  }
  
  fetchPokemon()
  
  