window.onload = function () {
  const favoriteContainer = document.getElementById("container");

  let favorites = localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites) : [];

  favorites.forEach((favoritePokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${favoritePokemon}`)
      .then((response) => response.json())
      .then((pokemon) => {
        const pokemonWrapper = document.createElement("div");
        pokemonWrapper.classList.add("pokemon");
        const pokemonImage = document.createElement("img");
        pokemonImage.src = pokemon.sprites.front_default;
        pokemonWrapper.appendChild(pokemonImage);
        const pokemonName = document.createElement("h2");
        pokemonName.textContent = pokemon.name;
        pokemonWrapper.appendChild(pokemonName);
        favoriteContainer.appendChild(pokemonWrapper);
// Remove
        const remove = document.createElement('button')
        remove.textContent ="remove"
        remove.className ="remove"
        remove.onclick=function () {
          this.parentNode.remove()
          
        }
        pokemonWrapper.appendChild(remove)
        

        
      })
      .catch((error) => console.error(error));
  });

  
};

