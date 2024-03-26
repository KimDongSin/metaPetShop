import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import { LoginBtn } from "../../components/styled/UI/button/Button";
import { useState } from "react";
import JoinTerms from "./ui/JoinTerms";

const StepOneWrap = styled.div`
  padding: 0 28px;

  & > div:not(:last-child) {
    margin-bottom: 20px;
  }

  & .next__btn {
    margin: 352px 0 46px;
  }
`;

const StepTwoWrap = styled.div`
    padding: 20px 28px 46px;
    margin: 0 auto;

    & > div:not(:first-child){
        margin-top: 20px;
    }

    & .name__join__wrap{
        display: flex;
        align-items: center;

        & div:first-child{
            margin-right: 14px;
        }
    }
`;

const Join = () => {
  const [step, setStep] = useState(true);

  const stepOneNextClickHandler = () => {
    setStep(false);
  };
  return (
    <>
      {step ? (
        <StepOneWrap>
          <FormInput title="이메일">이메일</FormInput>
          <FormInput title="비밀번호">비밀번호</FormInput>
          <FormInput title="비밀번호 확인">비밀번호 확인</FormInput>

          <LoginBtn className="next__btn" onClick={stepOneNextClickHandler}>
            다음
          </LoginBtn>
        </StepOneWrap>
      ) : (
        <StepTwoWrap>
            <div className="name__join__wrap">
                <FormInput title="성" placeholder="성" width="30%">성</FormInput>
                <FormInput title="이름" placeholder="이름" width="60%">이름</FormInput>
            </div>

            <FormInput title="닉네임" placeholder="닉네임을 입력해주세요">닉네임</FormInput>
            <FormInput title="전화번호" placeholder="-없이 입력해주세요">전화번호</FormInput>

            <JoinTerms />

            <LoginBtn>가입하기</LoginBtn>
        </StepTwoWrap>
      )}
    </>
  );
};

export default Join;