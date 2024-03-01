import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filter-slice';
import { selectFilter } from '../../redux/selectors';
import styles from './filter.module.css';
const ContactsFilter = () => {
  const name = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <div className={styles.filter}>
      <input
        placeholder="Find contact by name..."
        className={styles.input}
        type="text"
        value={name}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
};

export default ContactsFilter;
