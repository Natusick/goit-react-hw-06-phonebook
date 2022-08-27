import styled from "styled-components";
import ContactInput from "../ContactInput/ContactInput";
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter, deleteItem } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  const visibleContacts = () => {
    
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
    <List>
      {visibleContacts.map(contact => (
        <Li key={contact.id}>
          <ContactInput name={contact.name} number={contact.number} />
          <Button type="button" onClick={() => dispatch(deleteItem(contact.id))}>
            Delete
          </Button>
        </Li>
      ))}
    </List>
    </>
  );
};
const List = styled.ul`
  margin-left: 15px;
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  list-style: circle;
`;

const Button = styled.button`
  margin-left: 15px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid black;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: white;
    border: 4px solid transparent;
    background-color: rgb(32, 122, 174, 0.56);
    box-shadow: 1px 4px 6px 0px rgba(0, 0, 0, 0.16),
      0px 4px 4px 0px rgba(0, 0, 0, 0.06), 0px 1px 1px 0px rgba(0, 0, 0, 0.12);
  }
`;

export default ContactList;
