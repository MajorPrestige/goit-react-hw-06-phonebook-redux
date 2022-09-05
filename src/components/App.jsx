// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/actions';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactLists from './ContactsList/ContactList';
// import ContactsSearch from './ContactsSearch/ContactsSearch';

export const App = () => {
  // eslint-disable-next-line no-unused-vars
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');
  // const [toDelete, setToDelete] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleFormSubmit = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    dispatch(addContact(newContact));
  };

  // const onCheckboxChange = e => {
  //   const contactId = e.target.name;
  //   if (toDelete.includes(contactId)) {
  //     setToDelete(prevState => [...prevState].filter(el => el !== contactId));
  //   } else {
  //     setToDelete(prevState => [...prevState, e.target.name]);
  //   }
  // };

  // const deleteAllContact = () => {
  //   setToDelete([]);
  //   setContacts(prevState =>
  //     prevState.filter(contact => !toDelete.includes(contact.id))
  //   );
  // };

  // const filterContact = ({ target }) => {
  //   setFilter(target.value);
  // };

  // const filterNormalized = filter.toLowerCase();
  // const filterContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filterNormalized)
  // );
  return (
    <>
      <div>
        <h2>Phonebook</h2>
        <ContactsForm onSubmit={handleFormSubmit} />
        <h2>Contacts</h2>
        {/* <ContactsSearch value={filter} filter={filterContact} /> */}
        <ContactLists
        // contacts={filterContacts}
        // onDeleteClick={deleteContact}
        // onCheckboxChange={onCheckboxChange}
        // deleteAllContact={deleteAllContact}
        // contactsToDelete={toDelete}
        />
      </div>
    </>
  );
};
