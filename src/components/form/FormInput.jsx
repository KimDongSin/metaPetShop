import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => props.width || "100%"};

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
    border: 1px solid #33c2ff;
    outline: none !important;
  }

  label {
    width: 100%;
    p {
      margin-bottom: 10px;
      font-size: 16px;
      width: 100%;
    }
  }
`;

const FormInput = ({ title, type, userInput, placeholder, width }) => {
  const [isFocused, setIsFocused] = useState(false);

  const pHelper = isFocused ? "#33C2FF" : "#333333";

  return (
    <Wrap width={width}>
      <label htmlFor={userInput}>
        <p style={{ color: pHelper }}> {title}</p>
      </label>
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
