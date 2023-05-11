function searchPokemon () {
    const searchInput = document.getElementById('search').value
    // const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
    if(searchInput.length) {
      const filteredPokemon = pokemonList.filter(pokemon =>  pokemon.name.toLowerCase().includes(searchInput.toLowerCase()))
      // console.log(filteredPokemon);
    displayPokemonData(filteredPokemon)

      }
    
  }
  
  fetchPokemon()
  
  