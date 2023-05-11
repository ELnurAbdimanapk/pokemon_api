function sortPokemon() {
  const sortPokemon = document.getElementById("sort");
  let sortedPokemonList = [];
  if (sortPokemon.value === "opt1") {
    sortedPokemonList = pokemonList.sort((a, b) => (a.name < b.name ? -1 : 1));
  }
  if (sortPokemon.value === "opt2") {
    sortedPokemonList = pokemonList.sort((a, b) => (a.name > b.name ? -1 : 1));
  }

  displayPokemonData(sortedPokemonList);
  console.log(sortedPokemonList);
}
