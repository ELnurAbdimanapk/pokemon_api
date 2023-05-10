function displayPokemonData(pokemonList) {
  const container = document.getElementById("container");
  container.innerHTML =""
  pokemonList.forEach((pokemon) => {
    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemon.name;

    const pokemonWrapper = document.createElement("div");
    pokemonWrapper.classList.add("pokemon");
    
    const pokemonImage = document.createElement("img");
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        pokemonImage.src = data.sprites.front_default;
      })
      .catch((error) => console.error(error));
      
 
      const favoriteButton = document.createElement('button')
      favoriteButton.innerText ="favorite"
      favoriteButton.onclick =  function () {
        alert("favorite")
      }



      
      pokemonWrapper.appendChild(pokemonImage)

      pokemonWrapper.appendChild(pokemonName)
      pokemonWrapper.appendChild(favoriteButton)

    container.appendChild(pokemonWrapper);
  });
}




