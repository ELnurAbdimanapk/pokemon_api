function displayPokemonData(pokemonList) {
    const container = document.getElementById('container');
    pokemonList.forEach(pokemon => {
      const pokemonName = document.createElement('h2');
      pokemonName.textContent = pokemon.name;
      // const pokemonImage = document.createElement('img')
      // pokemonImage.setAttribute ('src',pokemon.url)
      const pokemonImage = document.createElement('img');
      fetch(pokemon.url)
        .then(response => response.json())
        .then(data => {
          pokemonImage.src = data.sprites.front_default;
        })
        .catch(error => console.error(error));
  
      container.appendChild(pokemonName);
      container.appendChild(pokemonImage);
    });
  }
     