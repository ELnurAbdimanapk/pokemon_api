function displayPokemonData(pokemonList) {
  const container = document.getElementById("container");
  container.innerHTML =""
  pokemonList.forEach((pokemon) => {
    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemon.name;
   


    const pokemonWrapper = document.createElement("div");
    pokemonWrapper.classList.add("pokemon");
    let pokemonId = 1
    
    const pokemonImage = document.createElement("img");
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
         pokemonId = data.held_items.id;
        pokemonImage.src = data.sprites.front_default;
      })
      .catch((error) => console.error(error));
      
    
      const favoriteButton = document.createElement('button');
    favoriteButton.innerText = "favorites";
    favoriteButton.onclick = function () {
      let favorites = localStorage.getItem("favorites");
      favorites = favorites ? JSON.parse(favorites) : [];
      if (!favorites.includes(pokemon.name)) {
        favorites.push(pokemon.name);
      } else {
        favorites = favorites.filter(fav => fav !== pokemon.name);
      }
      localStorage.setItem("favorites", JSON.stringify(favorites))
      
  
    }
      pokemonWrapper.appendChild(pokemonImage)

      pokemonWrapper.appendChild(pokemonName)
      pokemonWrapper.appendChild(favoriteButton)

    container.appendChild(pokemonWrapper);
  });
}



