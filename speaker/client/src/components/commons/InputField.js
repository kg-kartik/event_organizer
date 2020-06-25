import React from "react";
import PropTypes from "prop-types";
import { Input, Label, Message } from "../authentication/styles/Forms";
import styled from "styled-components";

const InputField = ({
  name,
  value,
  placeholder,
  onChange,
  type,
  id,
  label,
  error
}) => {
  return (
    <Container>
      <Label htmlFor="label">{label}</Label>
      <Input
        className="input_common"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        id={error ? "error-css" : ""}
      />
      {error && <Message>{error}</Message>}
    </Container>
  );
};

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired
};

InputField.defaultProps = {
  type: "text"
};

export default InputField;

const Container = styled.div`
  width: 100%;
  margin-top: 0.8rem;
`;
