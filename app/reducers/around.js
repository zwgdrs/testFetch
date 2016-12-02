import deepAssign from 'deep-assign'

export const INIT_STATE = {}
export default function around(state = INIT_STATE, action) {
  switch (action.type) {
    case 'FETCH_AROUND_INFO':
      return action.data
    default:
      return state
  }
}
