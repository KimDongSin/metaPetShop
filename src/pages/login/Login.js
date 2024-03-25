import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import FormCheckBox from "../../components/form/FormCheckBox";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  div {
    width: 100%;
    padding: 0 28px;
  }

  & .user__input__wrapper:first-child {
    margin-bottom: 20px;
  }

  & .user__check__box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 14px 0 36px;
  }
`;


const UserInfoFind = styled(Link)`
    font-size: 14px;
`;

const Login = () => {
  return (
    <Wrap>
      <div className="user__input__wrapper">
        <FormInput
          title="이메일"
          type="text"
          userInput="userId"
          placeholder="아이디를 입력해주세요."
        />
      </div>

      <div className="user__input__wrapper">
        <FormInput
          title="비밀번호"
          type="password"
          userInput="userPwd"
          placeholder="비밀번호를 입력해주세요."
        />
      </div>

      <div className="user__check__box">
        <FormCheckBox />
        <UserInfoFind>아이디/비밀번호 찾기</UserInfoFind>
      </div>

      <div className="login__btn__wrap">
        
      </div>
    </Wrap>
  );
};

export default Login;
