import PropTypes from 'prop-types';
import {
  ContactsUl,
  ContactsItem,
  ContactsName,
  DeleteButton,
} from './ContactsList.styled';
import { FaTrashAlt } from 'react-icons/fa';

export default function ContactsList({ contacts, onClick }) {
  return (
    <ContactsUl>
      {contacts.map(contact => {
        return (
          <ContactsItem key={contact.id}>
            <ContactsName>{contact.name}</ContactsName>
            <p>{contact.number}</p>
            <DeleteButton type="button" onClick={() => onClick(contact.id)}>
              Delete
              <FaTrashAlt />
            </DeleteButton>
          </ContactsItem>
        );
      })}
    </ContactsUl>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
};
