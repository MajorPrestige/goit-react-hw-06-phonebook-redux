import { DELETE_CONTACT, ADD_CONTACT, CONTACTS_TO_DELETE } from './types';

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

export const toDelete = payload => {
  return {
    type: CONTACTS_TO_DELETE,
    payload,
  };
};
