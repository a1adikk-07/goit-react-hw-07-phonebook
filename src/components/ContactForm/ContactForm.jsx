import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { postContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import styles from './contact-form.module.css';
const INITIAL_STATE = {
  name: '',
  phone: '',
};

const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handelChange = evt => {
    const { name, value } = evt.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handelFormSubmit = evt => {
    evt.preventDefault();
    const { name, phone } = state;
    const isDublicated = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isDublicated) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(postContact({ name, phone }));
    reset();
  };

  const reset = () => {
    setState(INITIAL_STATE);
  };

  return (
    <form onSubmit={handelFormSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={state.name}
          required
          onChange={handelChange}
        />
      </label>
      <label className={styles.label}>
        Phone
        <input
          className={styles.input}
          type="tel"
          name="phone"
          value={state.phone}
          required
          onChange={handelChange}
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;