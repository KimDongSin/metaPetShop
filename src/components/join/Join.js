import styled from "styled-components";
import FormInput from "../form/FormInput";

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    div{
        width: 100%;
    }

  div:first-child {
    margin-bottom: 20px;
  }
`;

const Join = () => {
  return (
    <Wrap>
      <div>
        <FormInput
          title="이메일"
          type="text"
          userInput="userId"
          placeholder="아이디를 입력해주세요."
        />
      </div>

      <div>
        <FormInput
          title="비밀번호"
          type="password"
          userInput="userPwd"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>
    </Wrap>
  );
};

export default Join;
