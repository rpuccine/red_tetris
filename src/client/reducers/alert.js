import { ALERT_POP } from '../actions/alert'
import { SOCKET_PING } from '../actions/server'

const reducer = (state = {} , action) => {
  switch(action.type){
    case ALERT_POP:
      return { message: action.message }
    default:
      return state
  }
}

export default reducer
