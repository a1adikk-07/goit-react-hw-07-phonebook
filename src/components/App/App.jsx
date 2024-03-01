import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import styles from './app-style.module.css';

function App() {
  return (
    <div className={styles.appdiv}>
      <div>
        <h1 className={styles.appTitle}>Your phonebook</h1>
        <ContactForm />
      </div>
      <div className={styles.listContacts}>
        <h1 className={styles.appTitle}>Contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
}

export default App;
