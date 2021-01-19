import { ERROR, MESSAGE, UPDATE } from './actions'

const initial = { heroes: [], error: '' }
export const socketReducer = (state = initial, action) => {
  switch (action.type) {
    case MESSAGE:
      if (JSON.stringify(state.heroes) !== action.payload.message) {
        return { ...state, heroes: JSON.parse(action.payload.message) }
      }
      return state
    case ERROR:
      return { ...state, error: action.payload.message }

    //  Custom reducer action for preview only
    case UPDATE:
      console.log(action.payload)
      state.heroes.map(
        hero =>
          hero.id === action.payload.id && {
            ...state,
            heroes: (hero.name = action.payload.name),
          }
      )
      return state

    default:
      return state
  }
}
