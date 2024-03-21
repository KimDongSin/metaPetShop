import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.label`
    display: flex;
    flex-direction: column;
    align-items: center;

  input {
    width: 100%;
    height: 57px;
    border-radius: 16px;
    border: 1px solid #dfdfdf;
    padding: 18px 23px;
    color: #333333;
    font-size: 16px;
  }

  input::placeholder {
    color: #909090;
    font-size: 16px;
  }

  input:focus {
    border: 1px solid #33C2FF;
    outline: none !important;
  }

  p {
    color: ${(props) => (props.isFocused ? "#33C2FF" : "#333333")};
    margin-bottom: 10px;
    font-size: 16px;
    width: 100%;
  }
`;

const FormInput = ({ title, type, userInput, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Wrap for={userInput} isFocused={isFocused}>
      <p>{title}</p>
      <input
        id={userInput}
        type={type}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Wrap>
  );
};
export default FormInput;
