// a new variable defined for IIFE
let pokemonRepository = (function (){
  let pokemonList = [];
  // link to external database
  let apiUrl = 'https//pokeapi.co/api/v2/pokemon';
  // function to add new pokemons
  function add(pokemon){
    return pokemonList.push(pokemon);
    }
// returns pokemonlist array
  function getAll(){
    return pokemonList;
    }
// new finction was declared to add list item
  function addListItem(pokemon){
      // pokemon-list class was selected
    let pokemonList = document.querySelector('.pokemon-list');
    // list element was added to the ul parent
    let listPokemon = document.createElement('li');
    // a button was added to each list parent
    let button = document.createElement('button');
    // button inner text were defined : pokemon's name
    button.innerText = pokemon.name;
    // a class added to the button
    button.classList.add('pokemon-button');
    
    // appending button 
    listPokemon.appendChild(button);
    //appending list element
    pokemonList.appendChild(listPokemon);

    });
  }
  //defined a function to show pokemons details
  function showDetails(pokemon){
    console.log(pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();

// added new Pokemon
pokemonRepository.add({
  name: 'Blaziken',
  height: 1.9,
  types: ['fire', 'fighting']
});

// loop function declared: forEach()
pokemonRepository.getAll().forEach(function (pokemon){
  pokemonRepository.addListItem(pokemon);
});