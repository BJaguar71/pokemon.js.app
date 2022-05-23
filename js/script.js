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

// for loop: prints pokemon name + size
for (let i = 0; i < pokemonList.length; i++){

// openin li tag
document.write(`<li class="pokemon-list__item"> ${pokemonList[i].name} (height <span>${pokemonList[i].height})`);
if (pokemonList[i].height > 5.0){
  document.write(' - Wow! it\'s big.');
} else if (pokemonList[i].height <= 5 && pokemonList[i].height <= 1) {
  document.write(' - It\'s average.');
} else {document.write(' - It\'s tiny.');}

// closing li tag
document.write('</li>');
}

//closing ul tag 
document.write('</ul>');
