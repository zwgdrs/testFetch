import deepAssign from 'deep-assign'

export const INIT_STATE = {}
export default function userCenter(state = INIT_STATE, action) {
  switch (action.type) {
    case 'FETCH_USERCENTER_INFO':
      return action.data
    default:
      return state
  }
}
