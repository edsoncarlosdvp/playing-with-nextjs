import { nameType, ChangeNameAction, actions} from './'

// initial state
const initialState : nameType = 'User'

// reducer
const nameReducer = (
  state: nameType = initialState,
  action: ChangeNameAction
): nameType => {
  switch(action.type){
    case actions.change_name:
      return action.payload === '' ? state : action.payload
      default:
        return state
  }
}

export {nameReducer}