export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/scott/pokemon',
  timeout: 5000
})

export const pokemonApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
  timeout: 5000
})