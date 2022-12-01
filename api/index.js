const safeword = document.querySelector(".safe-word");
const newsafeword = document.querySelector(".new-safe-word");
const gender = document.querySelector(".gender");
const newgender = document.querySelector(".new-gender");
const input = document.querySelector("input");
const results = document.querySelector(".search-results");

let searchedPokemon = "";

input.addEventListener("keyup", () => {
    searchedPokemon = input.value;
    fetch("https://pokeapi.co/api/v2/pokemon/")
        .then((data) => {
            return data.json();
    })
    .then((object) => {
        const filteredPokemon = object.results.filter((pokemon) => {
            return pokemon.name.includes(searchedPokemon);
        });
        /* console.log(filteredPokemon); */

        filteredPokemon.forEach((pokemon) => {
            const pokemonName = pokemon.name;
            /* console.log(pokemonName); */

            results.innerHTML = pokemonName;
        }); 
    });
});


const getPokemonGender = () => {
    fetch("https://pokeapi.co/api/v2/gender/")
    .then((data) => {
        return data.json();
    })
    .then((sex) => {
        const pokemonGender = sex.results;
        /* console.log(pokemonGender); */

        const randomPokemonGender = pokemonGender[Math.floor(Math.random() * pokemonGender.length)];
        /* console.log(randomPokemonGender); */

        gender.innerHTML = randomPokemonGender.name;
    })
}
newgender.addEventListener("click", getPokemonGender);

const getPokemonMoves = () => {
    fetch("https://pokeapi.co/api/v2/move/")
    .then((data) => {
        return data.json();
    })
    .then((pokemon) => {
        const pokemonMoves = pokemon.results;
        /* console.log(pokemonMoves); */

        const randomPokemonMoves = pokemonMoves[Math.floor(Math.random() * pokemonMoves.length)];
        /* console.log(randomPokemonMoves); */

        safeword.innerHTML = randomPokemonMoves.name;
    })
}
newsafeword.addEventListener("click", getPokemonMoves);


/* music player  */
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const stop = document.querySelector(".stop");
const audio = document.querySelector("audio");

play.addEventListener("click", () => {
    audio.play();

    play.style.color = "red";
    play.style.border = "2px solid red";
    play.style.backgroundColor = "white";
    play.style.boxShadow = "0 0 10px red";
    
    play.style.transform = "scale(1.1)";
    setTimeout(() => {
        play.style.transform = "scale(1)";
    }
    , 100);
});

pause.addEventListener("click", () => {
    audio.pause();

    pause.style.color = "white";
    pause.style.border = "2px solid white";
    pause.style.backgroundColor = "red";
    pause.style.boxShadow = "0 0 10px white";
});

stop.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;

    stop.style.color = "red";
    stop.style.border = "2px solid red";
    stop.style.backgroundColor = "white";
    stop.style.boxShadow = "0 0 10px red";
});