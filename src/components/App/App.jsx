import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Title, SubTitle } from './App.styled';
import ContactsForm from '../ContactsForm/ContactsForm';
import Filter from '../Filter/Filter';
import ContactsList from '../ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = ({ name, number }) => {
    const names = this.state.contacts.map(contact => contact.name);
    const numbers = this.state.contacts.map(contact => contact.number);
    const newContact = { id: nanoid(), name, number };

    if (names.includes(name)) {
      alert(`${name} is already in contacts`);
    } else if (numbers.includes(number)) {
      alert(`${number} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredNames = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredNames = this.getFilteredNames();

    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactsForm onSubmit={this.addContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.handleChange} />
        <ContactsList contacts={filteredNames} onClick={this.deleteContact} />
      </Container>
    );
  }
}

export default App;
