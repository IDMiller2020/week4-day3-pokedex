export default class Pokemon {
  constructor({id, name, img, weight, height, types, sprites}) {
      this.id = id
      this.name = name
      this.image = img || sprites.other.dream_world.front_default
      this.weight = weight
      this.height = height
      this.types = types
  }

  get Template() {

      return /*html*/`
      <div class="card p-2 value">
          <img src="${this.image}" alt="Pokemon Image">
          <h1>${this.name}</h1>
          <hr>
          <h4>Height: ${this.height} | Weight: ${this.weight}</h4>
      </div>
      ${this.Button}
      `
  }

  get Button() {
    if (this.id) {
      return '<button class="btn btn-outline-info" onclick="app.sandboxPokemonController.add()">Add</button>'
    }
    return '<button class="btn btn-outline-danger" onclick="app.sandboxPokemonController.remove()">Remove</button>'
  }
}

// bcw-sandbox
// Pokemon: {
//   name: {
//     type: "String",
//     required: true
//   },
//   img: {
//     type: "String",
//     required: true
//   },
//   weight: {
//     type: "String"
//   },
//   height: {
//     type: "String"
//   },
//   types: [
//     { }
//   ],
//   user: {
//     type: "String",
//     required: true
//   }
// },

// pokemon api
// {
//   abilities: [],
//   base_experience: 64,
//   forms: [],
//   game_indices: [],
//   height: 7,
//   held_items: [ ],
//   id: 1,
//   is_default: true,
//   location_area_encounters: "https://pokeapi.co/api/v2/pokemon/1/encounters",
//   moves: [],
//   name: "bulbasaur",
//   order: 1,
//   past_types: [ ],
//   species: {},
//   sprites: {},
//   stats: [],
//   types: [],
//   weight: 69
// }