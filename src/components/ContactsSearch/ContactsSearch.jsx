import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from 'redux/actions';

import s from './ContactsSearch.module.css';

const ContactsSearch = () => {
  const filter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();

  const filterContact = ({ target }) => {
    dispatch(filterContacts(target.value));
  };

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        onChange={filterContact}
        value={filter}
        type="text"
      />
    </label>
  );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.string,
};
