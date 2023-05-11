 let pokemonList = []
 async function fetchPokemon () {
  try {
    const response =await fetch ('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
     pokemonList = data.results;
    displayPokemonData(pokemonList)

  }catch(error){
    console.log(error);
    const container = document.getElementById('container')
    container.innerText= "Failed to fetch Pokemon"
  }
 }

 




