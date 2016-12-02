import deepAssign from 'deep-assign'

export const INIT_STATE = {}
export default function bookCenter(state = INIT_STATE, action) {
  switch (action.type) {
    case 'FETCH_BOOKCENTER_INFO':
      return action.data
    default:
      return state
  }
}
