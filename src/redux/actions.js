import {
  DELETE_CONTACT,
  ADD_CONTACT,
  CONTACTS_TO_DELETE,
  DELETE_ALL_CONTACTS,
  FILTER_CONTACTS,
} from './types';

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

export const deleteCheckedContacts = payload => {
  return {
    type: DELETE_ALL_CONTACTS,
    payload,
  };
};

export const filterContacts = payload => {
  return {
    type: FILTER_CONTACTS,
    payload,
  };
};
