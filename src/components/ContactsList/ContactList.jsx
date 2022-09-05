import ContactsItem from 'components/ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, toDelete } from 'redux/actions';
import s from './ContactList.module.css';

const ContactLists = () => {
  const contacts = useSelector(store => store.contacts.items);
  // const contactsToDelete = useSelector(store => store.contactsToDelete);

  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const handleCheckboxChange = e => {
    const contactId = e.target.name;
    dispatch(toDelete(contactId));
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
          // onClick={deleteAllContact}
          type="button"
          // disabled={contactsToDelete.length === 0 ? true : false}
        >
          Delete checked
        </button>
      )}
    </ul>
  );
};

export default ContactLists;

ContactLists.defaultProps = {
  contacts: [],
};

ContactLists.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
