import ContactsForm from './ContactsForm/ContactsForm';
import ContactLists from './ContactsList/ContactList';
import ContactsSearch from './ContactsSearch/ContactsSearch';

export const App = () => {
  // const [contacts, setContacts] = useState(
  //   JSON.parse(localStorage.getItem('contacts')) ?? []
  // );
  // const [filter, setFilter] = useState('');
  // const [toDelete, setToDelete] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactsForm />
      <h2>Contacts</h2>
      <ContactsSearch />
      <ContactLists />
    </div>
  );
};
