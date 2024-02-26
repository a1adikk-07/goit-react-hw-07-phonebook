// import React from 'react';
import { useEffect } from 'react';
import styles from '../ContactList/contact-list.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  removeContacts,
} from '../../redux/contacts/contacts-operations';
import { getFilteredContactsSelector } from '../../redux/contacts/contacts-selector';

export const ContactList = () => {
  const { items, isLoading, isError } = useSelector(
    getFilteredContactsSelector
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onRemoveContact = id => {
    dispatch(removeContacts(id));
  };

  const elements = items.map(({ id, name, number }) => (
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
  ));

  return (
    <div>
      {isLoading && <p>loading...</p>}
      {isError && <p>{isError}</p>}
      {Boolean(items.length) && <ul className={styles.list}>{elements}</ul>}
    </div>
  );
};
