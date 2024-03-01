import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/operations';
import styles from './contactItem.module.css';

export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <li className={styles.contact}>
      <p>
        {name}: <span>{phone}</span>
      </p>
      <button
        className={styles.delete}
        onClick={() => dispatch(deleteContact(id))}
      >
        x
      </button>
    </li>
  );
};
