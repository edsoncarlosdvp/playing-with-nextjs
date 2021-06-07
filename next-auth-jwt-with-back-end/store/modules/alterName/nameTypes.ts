import { Action } from 'redux';

export enum actions {
   change_name = 'name/addName',
  //addManyItems = 'productList/addManyItems',
}

export type nameType = string

export interface ChangeNameAction extends Action<typeof actions.change_name>{
  payload: nameType
}
