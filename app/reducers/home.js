import deepAssign from 'deep-assign'

export const INIT_STATE = {}
export default function home(state = INIT_STATE, action) {
  switch (action.type) {
    case 'FETCH_BASIC_INFO':
      console.log(action.data)
      return action.data
    default:
      return state
  }
}
