/* Otra sugerencia de como ingresar y llamar la api de pokemon */

// $(function(){
//     var pokeApiUrl = "https://pokeapi.co/api/v2/pokedex/1/";
//     $.getJSON(pokeApiUrl).done(function(data){
//         console.log(data);
//         $.each(data.pokemon_entries, function(index,pokemon){
//             var numPokemon = pokemon.pokemon_entries;
//             console.log(numPokemon);
//         });
//     });
// });






/* Otra sugerencia de como llamar la api de pokemon con ajax requiere el link de jquery */

// $.ajax({
//     url: 'https://pokeapi.co/api/v2/pokedex/1/',
//     success: data =>{  // success nos indica que si es exitosa
//         console.log(data);
//         for (let i = 0; i < pokemon_entries.length; i++) {
//             let name = data.pokemon_entries[0].pokemon_species.name;
//             let url = data.pokemon_entries[0].pokemon_species.url;
//             drawPokemon(name, url)
            
//         } 
//     }
// });


/* Otra sugerencia de como llamar la api de pokemon con fetch 
es mas facil  */
fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response)=>{
 response.json().then(dataJson =>{
   datapokemon(dataJson);
 });
});


/* Otra sugerencia de como llamar la api de pokemon con fetch 
con dos eventos anidados se puede realizar simpre y cuando sean variables   */
fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response)=>{
 response.json().then(dataJson =>{
   datapokemon(dataJson);
 }).then(
     fetch(url).then((response)=>{
    response.json().then(dataUrl =>{
      funcionModal(dataUrl);
    })
   })  
);
});





/* ++++++ traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento +++++ */
const $form = $("#search-form");
const $searchField = $("#searcher");
const $responseContainer = $("container-fluid");
let searchedForText;


/* ++++++ agregamos el evento submit y las instrucciones a ejecutar +++++ */
$form.submit(function (e) {
    e.preventDefault();
    $responseContainer.html('');
    $searchedForText = $searchField.val();
    getPokemon();
});


/* ++++++  invocando la Funcion getPokemon() y es en esta función donde crearemos las peticiones +++++ */
function getPokemon() {
    // console.log("hola");
    $.ajax({
            // especifica si será una petición POST o GET
            type: 'GET',
            // Se coloca la URL
            url: 'https://pokeapi.co/api/v2/pokedex/1/',
            // el tipo de información que se espera de respuesta
            dataType: 'json',
            // con success es un metodo con funcion donde nos estrega una respuesta
            success: function (response) {
                // console.log(response);
            }
        }).done(handleResponse)
        .fail(handleError);
}


/* ++++++  La función handleError() muestra errores si no responde la API +++++ */
function handleError() {
    console.log('Se ha presentado un error');
}


/* ++++++  La función handleError() por si contamos con respuesta del API +++++ */
function handleResponse(data) {
    // console.log('the ajax request has finished!');
    // console.log(data);
    const $data = data.pokemon_entries;
    console.log(data);

    $.each(data, function(index, pokemon) {
        console.log(index);
        
    });
}
