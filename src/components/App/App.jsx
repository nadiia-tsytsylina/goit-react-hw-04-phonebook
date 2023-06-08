import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.styled';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleChange = event => {
    setFilter(event.currentTarget.value);
  };

  const addContact = (name, number) => {
    const names = contacts.map(contact => contact.name);
    const numbers = contacts.map(contact => contact.number);
    const newContact = { id: nanoid(), name, number };

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (numbers.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      setContacts(state => [...state, newContact]);
    }
  };

  const deleteContact = contactId => {
    setContacts(state => state.filter(contact => contact.id !== contactId));
  };

  const getFilteredNames = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactsForm onSubmit={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={handleChange} />
      <ContactsList contacts={getFilteredNames()} onClick={deleteContact} />
    </Container>
  );
}
