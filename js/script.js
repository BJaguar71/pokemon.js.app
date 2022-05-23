// an array of objects ere defined
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

// display pokemons in an ul order
document.write('<ul class="pokemon-list">');

for (let i = 0; i < pokemonList.length; i++){
  document.write(`${pokemonList[i].name} (height: ${pokemonList[i].height} m) `);
  // a condition was defined here to highlight the big pokemon, averrage and tiny pokemons
  if (pokemonList[i].height > 5.0){
    document.write(' - Wow, that\'s big!' + '<br>');
  } else if (pokemonList[i].height <= 5 && pokemonList[i].height <= 1){
    document.write(' - It is averrage.' + '<br>');
  } else {document.write(' - Tiny!' + '<br>');}
}
