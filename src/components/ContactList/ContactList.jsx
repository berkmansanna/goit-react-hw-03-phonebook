import PropTypes from 'prop-types';
import { ContactItem } from "./ContactItem/ContactItem";
import styles from './ContactList.module.css'

export const ContactList = ({ filteredContacts, onDeleteContact }) => (
    <ul className={styles.list}>
        {filteredContacts.map(({ id, name, number }) => (
            <ContactItem
                key={id}
                contact={{ id, name, number }}
                onDeleteContact={onDeleteContact}
            />

        ))}
    </ul>
);

ContactList.propTypes = {
    filteredContacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })),
    onDeleteContact: PropTypes.func.isRequired,

};