import PokemonApiController from "./Controllers/PokemonApiController.js";
import SandboxPokemonController from "./Controllers/SandboxPokemonController.js"

class App {
  pokemonApiController = new PokemonApiController()
  sandboxPokemonController = new SandboxPokemonController()
}

window["app"] = new App()
