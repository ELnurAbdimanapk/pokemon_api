function displayPokemonData(pokemonList) {
  console.log(pokemonList);

  // Get the container element
  const container = document.getElementById("container");
  container.innerHTML = "";

  // Iterate over each pokemon in the list
  pokemonList.forEach((pokemon) => {
    const pokemonName = document.createElement("h2");
    pokemonName.textContent = pokemon.name;
    const pokemonWrapper = document.createElement("div");
    pokemonWrapper.classList.add("pokemon");  
    const pokemonImage = document.createElement("img");

    // Fetch
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => {
        pokemonImage.src = data.sprites.front_default;
      })
      .catch((error) => console.error(error));

    // Favorite button
    const favoriteButton = document.createElement("button");
    const favoriteIcon = document.createElement("i");
    favoriteIcon.className = "fa-regular fa-heart fa-2xl";
    favoriteButton.appendChild(favoriteIcon);

    // On Click
    favoriteButton.onclick = function () {
      let favorites = localStorage.getItem("favorites");
      favorites = favorites ? JSON.parse(favorites) : [];
      if (!favorites.includes(pokemon.name)) {
        favorites.push(pokemon.name);
        favoriteButton.style.background = "red";
      } else {
        favorites = favorites.filter((fav) => fav !== pokemon.name);
        favoriteButton.style.background = "transparent";
      }
      localStorage.setItem("favorites", JSON.stringify(favorites));
    };

    // Wrapper
    pokemonWrapper.appendChild(pokemonImage);
    pokemonWrapper.appendChild(pokemonName);
    pokemonWrapper.appendChild(favoriteButton);
    container.appendChild(pokemonWrapper);
  });
}
