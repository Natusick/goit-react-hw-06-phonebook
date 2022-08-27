import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import styled from "styled-components";

export const App = () => {
  
  return (
    <Wrapper>
      <h1> Phonebook </h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: block;
  margin-left: 15px;
  width: 500px;
`;

export default App;
