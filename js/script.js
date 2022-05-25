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
];
})()

// display pokemons in an ul order
document.write('<ul class="pokemon-list">');

// loop function declared: forEach()
pokemonList.forEach(function (pokemon){
document.write('<li>' + pokemon.name + ' (height: ' + pokemon.height + 'm)</li>');
// closing li tag
document.write('</li>');
})
//closing ul tag 
document.write('</ul>');
