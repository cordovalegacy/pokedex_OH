var pokeName = document.querySelector('#stats-list')

var pokemon;

function getVal(){
    pokemon = document.querySelector('input').value;
    console.log(pokemon);
    return pokemon;
}

async function iChooseU(){
    console.log("Bulbasaur")
    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    var pokedex = await response.json()
    console.log(pokemon)
    console.log(pokedex)
    const sprite = newImage(170, 170);
    sprite.src = `${pokedex.sprites['front_default']}`;
    console.log(sprite.src)
    document.body.appendChild(sprite)
    // const pokeSprite = document.getElementById('sprite-pic');
    // pokeSprite.append(sprite.src);
    pokeName.innerText = `Name: ${pokedex.name} \n Poke-id: ${pokedex.id}  \n Weight: ${pokedex.weight}\n Weight: ${pokedex.height} \n Type: ${pokedex.types[0].type.name}\n Abilities: ${pokedex.abilities[0].ability.name}`
    pokemon = "";
}