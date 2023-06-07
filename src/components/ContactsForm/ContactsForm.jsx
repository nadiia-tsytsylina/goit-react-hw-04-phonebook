import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  InputBox,
  Label,
  Input,
  SubmitButton,
} from './ContactsForm.styled';
import { TiUserAdd } from 'react-icons/ti';

export default function ContactsForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Label htmlFor={nameInputId}>Name</Label>
        <Input
          value={name}
          onChange={handleChange}
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
          onChange={handleChange}
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

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
