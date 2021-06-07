import { Action } from 'redux'
import { Notify } from './types'
import { toast } from 'react-toastify'

// actions

const NOTIFY = 'notify'

interface NotifyAction extends Action<typeof NOTIFY> {
  payload: Notify
}

export const notify = (notify: Notify): NotifyAction => ({
  type: NOTIFY,
  payload: notify,
})

// initial state

const initialState: Notify = {
  type: 'error',
  message: '',
  duration: 0,
}

// reducer
const notifyReducer = (
  state: Notify = initialState,
  action: NotifyAction
): Notify => {
  switch (action.type) {
    case NOTIFY:
      toast.warn(action.payload.message, {
        autoClose: action.payload.duration,
        type: action.payload.type,
      })
      //mandar a msg
      return {
        ...state,
      }
    default:
      return state
  }
}

export default notifyReducer
