import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from './contactItem/contactItem';
import { fetchContacts } from '../../redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from '../../redux/selectors';
import styles from './contact-list.module.css';

const ContactList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <ul className={styles.list}>
      {isLoading && !error && <b>loading...</b>}
      <ul>
        {visibleContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </ul>
  );
};
export default ContactList;
