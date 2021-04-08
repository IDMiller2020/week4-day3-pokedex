import { ProxyState } from "../AppState.js"
import { sandboxPokemonService } from "../Services/sandboxPokemonService.js"

// Private
function _draw() {
  let template = ""

  ProxyState.myPokemons.forEach(p => {
    template += `<li class="action hover-action" onclick="app.sandboxPokemonController.setCurrent('${p.name}')">${p.name}</li>`
  })
  document.getElementById('my-pokemons').innerHTML = template
}

// Public
export default class SandboxPokemonController {
  constructor() {
    ProxyState.on("myPokemons", _draw)
    this.getAllPokemons()
  }
  async getAllPokemons() {
    try {
      await sandboxPokemonService.getAll()
    } catch (error) {
      console.error(error)
    }
  }
  async add() {
    try {
      await sandboxPokemonService.add()
    } catch (error) {
      console.error(error)
    }
  }
  async remove() {
    try {
      await sandboxPokemonService.remove()
    } catch (error) {
      console.error(error)
    }
  }
  setCurrent(name) {
    console.log('SandboxPokemonController.js setCurrent called')
    sandboxPokemonService.setCurrent(name)
  }
}