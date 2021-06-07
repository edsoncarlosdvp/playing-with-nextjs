import { actions, nameType, ChangeNameAction } from '.'

export const change_name = (name: nameType) : ChangeNameAction => ({
  type: actions.change_name,
  payload: name,
})