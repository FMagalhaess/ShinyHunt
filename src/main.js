const phaseIncreaseButton = document.querySelector('#increase-phase');
const phaseDecreaseButton = document.querySelector('#decrease-phase');
const screenIncreaseButton = document.querySelector('#increase-screen');
const screenDecreaseButton = document.querySelector('#decrease-screen');
const encounterIncreaseButton = document.querySelector('#increase-encouter');
const encounterDecreaseButton = document.querySelector('#decrease-encouter');
const pokemonSearch = document.querySelector('#pkmn-search');
const phaseCounter = document.querySelector('#phases')
const screenCounter = document.querySelector('#screens');
const encountersCounter = document.querySelector('#encounters');
const resetButton = document.querySelector('#reset-button')
const pokeImage = document.querySelector('#pokemao')
const searchBar = document.querySelector('#search-bar')
const searchPkmn = document.querySelector('#pkmn-search')

let showedPokemon;
let encounter = 0;
let phase = 0;
let screensNumber = 1;
const increaseScreen = () => {
    screensNumber = screensNumber + 1
    screenCounter.innerHTML = `Telas: ${screensNumber}`
    console.log(screensNumber);
    localStorage.setItem('screensNumber', screensNumber)
};
const decreaseScreen = () => {
  screensNumber = screensNumber - 1;
  screenCounter.innerHTML = `Telas: ${screensNumber}`;
  console.log(screensNumber);
  localStorage.setItem("screensNumber", screensNumber);
};
const increasePhase = () => {
    phase = phase + 1
    phaseCounter.innerHTML = `Fase: ${phase}`
    console.log(phase);
    localStorage.setItem("phase", phase);
};
const decreasePhase = () => {
  phase = phase - 1;
  phaseCounter.innerHTML = `Fase: ${phase}`;
  console.log(phase);
  localStorage.setItem("phase", phase);
};
const increaseEncounter = () => {
    encounter = encounter + screensNumber
    encountersCounter.innerHTML = `Encontros: ${encounter}`;
    console.log(encounter);
    localStorage.setItem("encounter", encounter);

};
const decreaseEncounter = () => {
  encounter = encounter - screensNumber;
  encountersCounter.innerHTML = `Encontros: ${encounter}`;
  console.log(encounter);
  localStorage.setItem("encounter", encounter);
};
const resetEncounter = () => {
    encountersCounter.innerHTML = `Encontros: 0`;
    encounter = 0
    localStorage.setItem("encounter", encounter);
}
const searchPokemon = () => {
pokeImage.src = `https://pokemon.night.coffee/icons/shiny/${searchBar.value}.gif`;
showedPokemon = `https://pokemon.night.coffee/icons/shiny/${searchBar.value}.gif`;
localStorage.setItem("showedPokemon", showedPokemon);
}

if (localStorage.getItem("screensNumber") !== null) {
  screensNumber = parseInt(localStorage.getItem("screensNumber"));
  screenCounter.innerHTML = `Telas: ${screensNumber}`;

}
if (localStorage.getItem("phase") !== null) {
  phase = parseInt(localStorage.getItem("phase"));
  phaseCounter.innerHTML = `Fase: ${phase}`;
}
if (localStorage.getItem("encounter") !== null) {
  encounter =parseInt(localStorage.getItem("encounter"));
  encountersCounter.innerHTML = `Encontros: ${encounter}`;
}
if (localStorage.getItem("showedPokemon") !== null) {
  showedPokemon = localStorage.getItem("showedPokemon");
  pokeImage.src = showedPokemon
}

phaseIncreaseButton.addEventListener("click", increasePhase);
screenIncreaseButton.addEventListener("click", increaseScreen);
encounterIncreaseButton.addEventListener("click", increaseEncounter);
phaseDecreaseButton.addEventListener("click", decreasePhase);
screenDecreaseButton.addEventListener("click", decreaseScreen);
encounterDecreaseButton.addEventListener("click", decreaseEncounter);
resetButton.addEventListener("click", resetEncounter);
searchPkmn.addEventListener('click', searchPokemon)
