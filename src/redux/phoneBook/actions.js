import { actionTypes } from './actionTypes';

export const deleteContact = id => ({
  type: actionTypes.deleteContact,
  payload: id,
});

export const addContact = contact => ({
  type: actionTypes.addContact,
  payload: contact,
});

export const changeFilter = value => ({
  type: actionTypes.changeFilter,
  payload: value,
});
