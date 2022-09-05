import { DELETE_CONTACT, ADD_CONTACT } from './types';

const initialStore = {
  contacts: {
    items: [
      {
        id: '1',
        name: 'Dan',
        number: '123412312351',
      },
      {
        id: '2',
        name: 'Prestige',
        number: '12312321312',
      },
    ],
    filter: '',
  },
};

const reducer = (store = initialStore, action) => {
  const {
    contacts: { items },
  } = store;

  switch (action.type) {
    case ADD_CONTACT:
      const duplicateContact = items.find(
        contact =>
          contact.name === action.payload.name ||
          contact.number === action.payload.number
      );

      if (
        duplicateContact?.name === action.payload.name ||
        duplicateContact?.number === action.payload.number
      ) {
        alert(
          `${action.payload.name}: ${action.payload.number} is already in contacts`
        );
        return store;
      }

      const updatedContacts = [action.payload, ...items];
      store.contacts.items = updatedContacts;
      return { ...store };

    case DELETE_CONTACT:
      const contactsAfterDelete = items.filter(el => el.id !== action.payload);
      store.contacts.items = contactsAfterDelete;

      return { ...store };

    default:
      return store;
  }
};

export default reducer;
