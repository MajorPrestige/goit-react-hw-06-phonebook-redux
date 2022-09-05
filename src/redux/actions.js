import { DELETE_CONTACT, ADD_CONTACT } from './types';

export const addContact = payload => {
  return {
    type: ADD_CONTACT,
    payload,
  };
};

export const deleteContact = payload => {
  return {
    type: DELETE_CONTACT,
    payload,
  };
};