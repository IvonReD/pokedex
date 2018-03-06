$('.modal').modal();

const pokemonGallery = document.getElementById('pokemon-gallery');

/* ++++++ traemos los elementos que usaremos y creamos un let sin asignarle valor por el momento +++++ */
// const form = document.getElementById("search-form");
// const searchField = document.getElementById("search-keyword");
// const responseContainer = document.getElementsByClassName("container-fluid");
// let searchedForText;



// /* ++++++ agregamos el evento submit y las instrucciones a ejecutar +++++ */
// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     responseContainer.innerHTML = '';
//     searchedForText = searchField.value;
//     console.log(searchedForText);
//     getPokemonInfo();
// });


// const getPokemonInfo = () => {
//     fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response) => {
//         response.json().then(dataJson => {
//             datapokemon(dataJson);
//         });
//     });

// }



fetch("https://pokeapi.co/api/v2/pokedex/1/").then((response) => {
    response.json().then(dataJson => {
        datapokemon(dataJson);
    });
});


const datapokemon = (data) => {
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

const drawPokemon = (name, url) => {
    console.log(name, url);

    let allPokemon = `
        <div class="card" style="width: 20rem;">
          <imgsrc = "https://dummyimage.com/150x200"/>
            <div class="card-block">
              <h4 class="card-title">${name}</h4>
               <a href="${url}" class="btn btn-primary">Go somewhere</a>
           </div>
        </div>
        `;

    const containerPokemon = document.createElement("div");
    containerPokemon.classList.add("col");
    containerPokemon.classList.add("m3");
    containerPokemon.innerHTML = allPokemon;
    pokemonGallery.appendChild(containerPokemon);
    // const url = species.url; //url de cada pokemon

}


function funcionModal(dataUrl) {
    console.log(dataUrl);

}