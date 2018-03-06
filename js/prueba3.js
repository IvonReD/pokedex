


/* ++++++ traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento +++++ */
// // const form = document.getElementById("search-form");
// const searchField = document.getElementById("search-keyword");
// // const responseContainer = document.getElementsByClassName("container-fluid");
// let searchedForText;



// /* ++++++ agregamos el evento submit y las instrucciones a ejecutar +++++ */
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     responseContainer.innerHTML = '';
//     searchedForText = searchField.value;
//     console.log(searchedForText);
//     getPokemonInfo();
// });


const getPokemonInfo =  searchedForText => {
    fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response) => {
        response.json().then(dataJson => {
            datapokemon(dataJson);
        });
    });
  
}


const datapokemon = data => {
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

// const drawPokemon= (name, url)=> {
//       let eachPokemon = `
//         <div class="card">
//           <div class="card-image">
//             <img src = "https://dummyimage.com/150x200/000000/fff"/>
//           </div>
//           <div class="card-content">
//       	     <h6 class="pokemon-name">${name}</h6>
//              <a id="link" href="${url}">+info</a>
//              <a id="modalPokemon" class="waves-effect waves-light btn modal-trigger" href="#modal1">modal</a>
//           </div>
//         </div>
//     	`;

//         containerFluid.appendChild(eachPokemon);
//     }




    function drawPokemon (name, url){
        let pokemonHTML = `<div><a href = "${url}"> ${name}`
        $("#pokemon-container").append
    }





function funcionModal (dataUrl){
    console.log(dataUrl);

}



