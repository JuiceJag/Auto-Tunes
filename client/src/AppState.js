import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  
  /** @type {import('./models/Car.js').Car[]} */
  cars: [],
  
  activeCar:[],
  
  /** @type {import('./models/Comment.js').Comment[]} */
  comments:[],

  carsForPage: 0,
})
