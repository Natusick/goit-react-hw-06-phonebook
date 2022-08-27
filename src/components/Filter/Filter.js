import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, filterItems } from "../../redux/contactsSlice";

const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Label htmlFor={filterId}>
      Find contacts by name
      <Input 
      id={filterId} 
      type="text" 
      value={filter} 
      onChange={e => dispatch(filterItems(e.target.value))} />
    </Label>
  );
};

const Label = styled.section`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14;
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
export default Filter;
