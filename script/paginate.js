let page =1
const size= 10

function paginateData(pokemonList){
  const start = (page - 1) * size;
  const end = start + size;
  const paginatedData = pokemonList.slice(start, end);
  displayPokemonData(paginatedData)
  createPaginationButtons(pokemonList.length);
}

function createPaginationButtons(totalItems) {
  const paginationContainer = document.getElementById('pagination');
  paginationContainer.innerHTML = '';
  
  const totalPages = Math.ceil(totalItems / size);
  
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement('button');
    btn.textContent = i;
    btn.addEventListener('click', () => {
      page = i;
      fetchPokemon();
    });
    
    paginationContainer.appendChild(btn);
  }
}
