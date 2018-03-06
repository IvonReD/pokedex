

/* ++++++ traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento +++++ */
// const $form = $("#search-form");
// const $searchField = $("#searcher");
// const $responseContainer = $("container-fluid");
// let searchedForText;


// /* ++++++ agregamos el evento submit y las instrucciones a ejecutar +++++ */
// $form.submit(function (e) {
//     e.preventDefault();
//     $responseContainer.html('');
//     $searchedForText = $searchField.val();
//     getPokemon();
// });




fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response)=>{
 response.json().then(dataJson =>{
   datapokemon(dataJson);
 });
});

function datapokemon(data) {
    for (let i = 0; i < data.pokemon_entries.length; i++) {
         let name = data.pokemon_entries[i].pokemon_species.name;
         let url = data.pokemon_entries[i].pokemon_species.url;
        drawPokemon(name, url)
        console.log(name);
        console.log(url);  
        $.ajax({
            url: url
        }).done(funcionModal);

}    
}

function drawPokemon (name, url){
    let pokemonHTML = `<div><a href = "${url}"> ${name}`
    $("#pokemon-container").append
}

function funcionModal (dataUrl){
    console.log(dataUrl);
    
}



// fetch(url).then((response)=>{
//     response.json().then(dataUrl =>{
//       funcionModal(dataUrl);
//     });
//    }); 




Use getPokemonByName to return data about specific pokemon.

  P.getPokemonByName("butterfree")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    })