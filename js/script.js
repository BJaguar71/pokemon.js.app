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
  // modal cretaed to show pokemons details
  let modalContainer = document.querySelector('#modal-container');

  // show modal function
  function showModal(name, height) {
    // remove existing text in modalContainer
    modalContainer.innerHTML = '';

    let modal = document.querySelector('.pokemon-button');
    // add modal close button, title, text 
    let closeButtonElement = document.createElement('button');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.classList.add('close-modal');
    closeButtonElement.addEventListener('click', hideModal);

    let pokemonName = document.createElement('h1');
    pokemonName.innerText = name;
    
    let pokemonHeight = document.createElement('p');
    pokemonHeight.innerText = height;

    //add <img>
    let pokemonImg = document.createElement('img');
    // set the source
    pokemonImg.src = '';
    // append created children
    modal.appendChild(closeButtonElement);
    modal.appendChild(pokemonName);
    modal.appendChild(pokemonHeight);
    modal.appendChild(pokemonImg);

    modalContainer.classList.add('is-visible');
  }

  // function to hide modal
  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  // add event listener to show the details on click
  document.querySelector('ul').addEventListener('click', () => {
    showModal('undefined', 'undefined');
    });

  //hide modal pressing esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });
  // hide modal by clicking outside of it
  modalContainer.addEventListener('click', (e) => {
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
    })
  }
  // this function loads the details of each pokemon
  function loadDetails (item){
    let url = item.detailsUrl;
    return fetch(url).then(function(response){
      return response.json();
    }).then(function(details){
      item.imageUrl = details.sprites.front_shiny;
      item.height = details.height;
      item.types = details.types;
    }).catch(function(e){
      console.error(e);
    });
  }
  //defined a function to show pokemons details
  function showDetails(item){
    pokemonRepository.loadDetails(item).then(function (){});
    console.log(item);
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
