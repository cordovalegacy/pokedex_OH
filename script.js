// array stored in a variable uses []
// object stored in a variable key:val {}

// for(var i = 0 ; i <=20; i+=2){
//     console.log(i)
// }

var pokeName = document.querySelector('#stats-list')
var pokemon;

function getVal(){
    pokemon = document.querySelector('input').value;
    console.log(pokemon);
    return pokemon;
}

async function iChooseU(){
    // alert(`You chose ${pokemon}!`)
    console.log("Bulbasaur")
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    // console.log(response)
    var pokedex = await response.json()
    console.log(pokemon)
    console.log(pokedex)

    // for(var i= 0; i < pokedex.length; i++){
    //     console.log(i);
    //     return i;
    // }
    pokeName.innerText = `Name: ${pokedex.name} \n Poke-id: ${pokedex.id}  \n Weight: ${pokedex.weight}\n Weight: ${pokedex.height} \n Abilities: ${pokedex.abilities[0].ability.name}`
    pokemon = "";
}