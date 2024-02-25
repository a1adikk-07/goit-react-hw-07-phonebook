// import React from 'react';
import styles from '../ContactList/contact-list.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContacts } from '../../redux/contacts/contacts-operations';
import { getFilteredContactsSelector } from '../../redux/contacts/contacts-selector';

export const ContactList = () => {
  const contacts = useSelector(getFilteredContactsSelector);
  const dispatch = useDispatch();

  const onRemoveContact = id => {
    dispatch(removeContacts(id));
  };

  return (
    <>
      <ul className={styles.list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={styles.contact}>
            {name} {number}{' '}
            <button
              onClick={() => onRemoveContact(id)}
              type="button"
              className={styles.delete}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
