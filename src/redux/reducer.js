import {
  DELETE_CONTACT,
  ADD_CONTACT,
  CONTACTS_TO_DELETE,
  DELETE_ALL_CONTACTS,
  FILTER_CONTACTS,
} from './types';

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
    contactsToDelete: [],
    filter: '',
  },
};

const reducer = (store = initialStore, action) => {
  const {
    contacts: { items, contactsToDelete },
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

    case CONTACTS_TO_DELETE:
      if (contactsToDelete.includes(action.payload)) {
        const filtredToDeleteContacts = contactsToDelete.filter(
          el => el !== action.payload
        );
        store.contacts.contactsToDelete = filtredToDeleteContacts;
        return { ...store };
      }

      const newContactsToDelete = [...contactsToDelete, action.payload];
      store.contacts.contactsToDelete = newContactsToDelete;
      return { ...store };

    case DELETE_ALL_CONTACTS:
      const contactsAfterDeleteChecked = items.filter(
        el => !contactsToDelete.includes(el.id)
      );
      store.contacts.items = contactsAfterDeleteChecked;
      store.contacts.contactsToDelete = [];
      return { ...store };

    case FILTER_CONTACTS:
      store.contacts.filter = action.payload;
      const filterNormalized = action.payload.toLowerCase();
      const filteredContacts = store.contacts.items.filter(el =>
        el.name.includes(filterNormalized)
      );
      store.contacts.items = filteredContacts;
      return { ...store };
    default:
      return store;
  }
};

export default reducer;
