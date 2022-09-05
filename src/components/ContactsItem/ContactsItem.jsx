import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import s from './ContactsItem.module.css';

import { deleteContact } from 'redux/actions';

const ContactsItem = ({ name, number, id, onCheckboxChange }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.item}>
      <input type="checkbox" name={id} onChange={onCheckboxChange} />
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => {
          handleDeleteClick(id);
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
