import { useDispatch } from 'react-redux';
import useForm from 'components/hooks/useForm';
import { postContact } from '../../redux/contacts/contacts-operations';
import styles from '../ContactForm/contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  // const contacts = useSelector(getFilteredContactsSelector);
  const dispatch = useDispatch();

  const { state, handleChange, reset } = useForm(INITIAL_STATE);

  const onAddContact = e => {
    e.preventDefault();
    // if (number.state === number.value) {
    //   alert(
    //     `You've already added ${name} or a number ${number} to your phonebook`
    //   );
    //   return false;
    // } else if (number.state !== number.value) {
    //   return true;
    // }

    dispatch(postContact(state));
    reset();
  };

  const { name, number } = state;

  return (
    <form onSubmit={onAddContact} className={styles.form}>
      <div className={styles.phoneWrap}>
        <div>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            value={name}
            required
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Enter a name"
          />
        </div>
      </div>
      <div className={styles.contactsWrap}>
        <div>
          <label className={styles.label}>Number</label>
          <input
            className={styles.input}
            value={number}
            required
            name="number"
            onChange={handleChange}
            type="tel"
            placeholder="Enter a number"
            min="8"
            max="8"
            step="1"
          />
        </div>
      </div>
      <button type="submit" className={styles.btn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
