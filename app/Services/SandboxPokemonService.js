import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { sandboxApi } from "./AxiosService.js"

class SandboxPokemonService {
  async remove() {
    await sandboxApi.delete(ProxyState.currentPokemon.id)
    ProxyState.myPokemons = ProxyState.myPokemons.filter(p => p.id !== ProxyState.currentPokemon.id)
    ProxyState.currentPokemon = null
  }

  setCurrent(name) {
    let pokemon = ProxyState.myPokemons.find(p => p.name === name)
    ProxyState.currentPokemon = pokemon
  }

  async getAll() {
    let res = await sandboxApi.get('')
    ProxyState.myPokemons = res.data.map(p => new Pokemon(p))
  }
  async add() {
    let res = await sandboxApi.post('', ProxyState.currentPokemon)
    ProxyState.myPokemons = [...ProxyState.myPokemons, new Pokemon(res.data)]
  }
}

export const sandboxPokemonService = new SandboxPokemonService()