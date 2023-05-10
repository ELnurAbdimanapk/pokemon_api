 async function fetchPokemon () {
  try {
    const response =await fetch ('https://pokeapi.co/api/v2/pokemon?limit=20');
    const data = await response.json();
    const pokemonList = data.results;
    displayPokemonData(pokemonList)
 console.log(pokemonList);

  }catch(error){
    console.log(error);
  }
 }

 fetchPokemon()