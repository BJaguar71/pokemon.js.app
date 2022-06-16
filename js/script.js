// a new variable defined for IIFE
let pokemonRepository = (function (){
  let pokemonList = [];
  // link to external database
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
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
    let pokemonList = document.querySelector('.list-group');
    // list element was added to the ul parent
    let listPokemon = document.createElement('li');
    listPokemon.classList.add('list-group-item')
    listPokemon.classList.add('p-3', 'mb-2', 'bg-light');
    // a button was added to each list parent
    let button = document.createElement('button');
    // button inner text were defined : pokemon's name
    button.innerText = pokemon.name;
    // a class added to the button
    button.classList.add('btn','btn-warning', 'btn-lg', 'btn-block');
    // setting data-toggle attr
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#exampleModal');
    // appending button 
    listPokemon.appendChild(button);
    //appending list element
    pokemonList.appendChild(listPokemon);

    //adding event listener to show the infos on click
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }
  // function to show modal
  function showModal (pokemon) {
    let modalBody = $('.modal-body');
    let modalHeader = $('.modal-header');
    let modalTitle = $('.modal-title');

    // clear the existing content on the modal
    modalBody.empty();
    modalTitle.empty();

    //creating ne elements for the modal
    let nameElement = $('<h1>' + pokemon.name + '</h1>');
    // image
    let imageElementFront = $('<img clas="modal-img" style="50%">');
    imageElementFront.attr('src', pokemon.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="50%">');
    imageElementBack.attr('src', pokemon.imageUrlBack);
    //height
    let contentElement = $('<p> Height: ' + pokemon.height + ' m</p>');

    //append elements
    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(contentElement);
    modalHeader.append(modalTitle);
    
  }
  
  // functoion to load list from the API
  function loadList(){
    return fetch(apiUrl).then(function (response){
      // returns the json data
      return response.json();
    }).then(function (json){
      // forEach loop to return each pokemons info
      json.results.forEach(function(item){
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        // add pokemons 
        add(pokemon);
      });
      // catch the errors
      }).catch(function(e){
        console.error(e);
    });
  }
  // this function loads the details of each pokemon
  function loadDetails (item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      item.imageUrlFront = details.sprites.front_shiny;
      item.imgeUrlBack = details.sprites.back_shiny;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e){
      console.error(e);
    });
  }
  //defined a function to show pokemons details
  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function (){
      showModal(item);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails
  };
})();

//load list
pokemonRepository.loadList().then(function(){
  // loop function declared: forEach()
  pokemonRepository.getAll().forEach(function (pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
