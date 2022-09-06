import ContactsItem from 'components/ContactsItem/ContactsItem';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, toDelete, deleteCheckedContacts } from 'redux/actions';
import s from './ContactList.module.css';

const ContactLists = () => {
  const contacts = useSelector(store => store.contacts.items);
  const contactsToDelete = useSelector(
    store => store.contacts.contactsToDelete
  );

  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = e => {
    const contactId = e.target.name;
    dispatch(toDelete(contactId));
  };

  const handleDeleteAllClick = () => {
    dispatch(deleteCheckedContacts(contactsToDelete));
  };

  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          handleCheckboxChange={handleCheckboxChange}
          handleDeleteClick={handleDeleteClick}
        />
      ))}
      {contacts.length !== 0 && (
        <button
          className={s.btn}
          onClick={handleDeleteAllClick}
          type="button"
          disabled={contactsToDelete.length === 0 ? true : false}
        >
          Delete checked
        </button>
      )}
    </ul>
  );
};

export default ContactLists;
