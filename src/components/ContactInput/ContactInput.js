import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContactInput = ({ name, number }) => {
  return (
    <Wrapper>
      <Title>{name}:</Title>
      <Number>{number}:</Number>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const Title = styled.li`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.14;
  font-style: normal;
`;

const Number = styled.h1`
  margin-left: 15px;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.14;
  font-style: normal;s
`;

ContactInput.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactInput;
