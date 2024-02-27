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
  const { items, isLoading, error } = useSelector(getFilteredContactsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onRemoveContact = id => {
    dispatch(removeContacts(id));
  };

  const elements = items.map(({ id, name, number }) => (
    <li key={id}>
      {name} {number}{' '}
      <button onClick={() => onRemoveContact(id)} type="button">
        Remove contact
      </button>
    </li>
  ));

  return (
    <div className={styles.wrapper}>
      {isLoading && <p>Now Loading...</p>}
      {error && <p>{error}</p>}
      {Boolean(items.length) && <ol className={styles.list}>{elements}</ol>}
    </div>
  );
};
