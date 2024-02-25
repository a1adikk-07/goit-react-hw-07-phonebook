import { useSelector, useDispatch } from 'react-redux';
import useForm from 'components/hooks/useForm';
import { postContacts } from 'api/contact-api';
// import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContactsSelector } from '../../redux/contacts/contacts-selector';
import styles from '../ContactForm/contact-form.module.css';
// import { deleteContact } from '../../redux/contacts/contacts-slice';

const INITIAL_STATE = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(getFilteredContactsSelector);
  const dispatch = useDispatch();

  const { state, handleChange, reset } = useForm(INITIAL_STATE);

  const isDublicate = ({ name }) => {
    const normolizedName = name.toLowerCase();
    const dublicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedCurrentName === normolizedName;
    });
    return Boolean(dublicate);
  };

  const onAddContact = e => {
    e.preventDefault();
    if (isDublicate(state)) {
      return alert(
        `You've already added ${state.name} or a number ${state.number} to your phonebook.`
      );
    }

    const action = postContacts(state);
    dispatch(action);
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
