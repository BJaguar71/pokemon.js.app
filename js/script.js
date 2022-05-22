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
// the loop here will print the pokemon names + their heights
for (let i = 0; i < pokemonList.length; i++){
  document.write('<ul>' + '<li>'+ pokemonList[i].name + '</li>' + '<li>' + pokemonList[i].height + ' m' + '</li>' + '</ul>');
  // a condition was defined here to highlight the big pokemon, averrage and tiny pokemons
  if (pokemonList[i].height > 5.0){
    document.write('Wow, that\'s big!');
  } else if (pokemonList[i].height <= 5 && pokemonList[i].height <= 1){
    document.write('It is averrage.');
  } else {document.write('Tiny!')}
}