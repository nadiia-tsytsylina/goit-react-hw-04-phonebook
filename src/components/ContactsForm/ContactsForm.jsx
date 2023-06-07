import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  InputBox,
  Label,
  Input,
  SubmitButton,
} from './ContactsForm.styled';
import { TiUserAdd } from 'react-icons/ti';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameInputId = nanoid();
    const numberInputId = nanoid();

    return (
      <Form onSubmit={this.handleSubmit}>
        <InputBox>
          <Label htmlFor={nameInputId}>Name</Label>
          <Input
            value={name}
            onChange={this.handleChange}
            id={nameInputId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputBox>
        <InputBox>
          <Label htmlFor={numberInputId}>Number</Label>
          <Input
            value={number}
            onChange={this.handleChange}
            id={numberInputId}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputBox>

        <SubmitButton type="submit">
          Add contact <TiUserAdd />{' '}
        </SubmitButton>
      </Form>
    );
  }
}

export default ContactsForm;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
