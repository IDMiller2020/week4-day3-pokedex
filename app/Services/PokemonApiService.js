import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { pokemonApi } from "./AxiosService.js"

class PokemonApiService {
  async getPokemon(index) {
    let res = await pokemonApi.get(index)
    ProxyState.currentPokemon = new Pokemon(res.data)
  }
  async getAllPokemon(url = "pokemon") {
    let res = await pokemonApi.get(url)
    // NOTE next and previous need to happen before getting the list of pokemon so that the button action will work.
    ProxyState.next = res.data.next
    ProxyState.previous = res.data.previous
    ProxyState.apiPokemons = res.data
    // NOTE First console.log 'res' to see what we are getting back from the API, then make sure you are grabbing the correct data to store into ProxyState.apiPokemons.
  }
}

export const pokemonApiService = new PokemonApiService()