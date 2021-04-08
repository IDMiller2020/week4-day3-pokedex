import { ProxyState } from "../AppState.js"
import { pokemonApi } from "../Services/AxiosService.js"
import { pokemonApiService } from "../Services/PokemonApiService.js"

// Private
function _draw() {
  let template = ''
  ProxyState.apiPokemons.results.forEach(p => {
    template += `<li class="action hover-action" onclick="app.pokemonApiController.getPokemon ('pokemon/${p.name}')">${p.name}</li>`
  })
  
  document.getElementById('api-pokemon').innerHTML = `
  <button ${ProxyState.previous ? '' : 'disabled="true"'} class="btn btn-success" onclick="app.pokemonApiController.getAllApi('${ProxyState.previous}')">Previous</button>
    <ul>${template}</ul>
  <button ${ProxyState.next ? '' : 'disabled="true"'} class="btn btn-info" onclick="app.pokemonApiController.getAllApi('${ProxyState.next}')">Next</button>
  `
}

function _drawCurrent() {
  document.getElementById('current-pokemon').innerHTML = ProxyState.currentPokemon ? ProxyState.currentPokemon.Template : "<p> no active pokemon</p>"
}

// Public
export default class PokemonApiController {
  constructor() {
    ProxyState.on("apiPokemons", _draw)
    ProxyState.on("currentPokemon", _drawCurrent)

    this.getAllApi()
  }

  async getAllApi(url) {
    try {
      await pokemonApiService.getAllPokemon(url)
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemon(name) {
    try {
      await pokemonApiService.getPokemon(name)
    } catch (error) {
      console.error(error)
    }
  }
}