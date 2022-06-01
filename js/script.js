// a new variable defined for IIFE
let pokemonRepository = (function (){
  let pokemonList = [
    {
        name: 'Arbok',
        height: 3.5,
        types: ['Poison'],
        gender: ['50% M', '50% F'] 
    },
    {
      name: 'Kakuna',
      height: 0.6,
      types: ['Bug', 'Poison'],
      gender: ['50% M', '50% F']  
    },
    {
      name: 'Zubat',
      height: 0.8,
      types: ['Poison', 'Flying'],
      gender: ['50% M', '50% F'] 
    },
    {
        name: 'Onix',
        height: 8.8,
        types: ['Rock', 'Ground'],
        gender: ['50% M', '50% F']
    },
    {
        name: 'Kangaskhan',
        height: 2.2,
        types: ['Normal'],
        gender: ['0% M', '100% F']
    }
]
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

  //adding event listener to show the infos on click
  button.addEventListener('click', function(event){
    showDetails(pokemon);
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