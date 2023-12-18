import { actionTypes } from './actionTypes';

const initialState = {
  contacts: [],
  filter: '',
};

export const phoneBook = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.deleteContact:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case actionTypes.addContact:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case actionTypes.changeFilter:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
