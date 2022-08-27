import { nanoid } from "nanoid";
import React, { useState } from "react";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/contactsSlice";
import { addItem } from "../../redux/contactsSlice";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      contacts.find((item) => item.name.toLowerCase() === name.toLowerCase())
    ) {
      toast.error(`Contact ${name} is already exist`);
      return;
    }
    dispatch(addItem({ name, number, id: nanoid() }));
    toast.success(`Contact ${name} has been added`);
    return reset;
  };

  const reset = () => {
    setName({ name: "" });
    setNumber({ number: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameId}>
        Name
        <Input
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </Label>
      <br />
      <Label htmlFor={numberId}>
        Number
        <Input
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.section`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14;
  font-style: normal;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5em;
  &:hover,
  &:focus {
    border: 3px solid rgb(32, 122, 174, 0.56);
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
      0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
`;

const Button = styled.button`
  margin-top: 15px;
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: white;

  &:hover,
  &:focus {
    border: 1px solid transparent;
    background-color: rgb(55, 1, 249);
    color: white;
  }
`;

export default ContactForm;
