import styled from "styled-components";
import FormInput from "../../components/form/FormInput";
import { LoginBtn } from "../../components/styled/UI/button/Button";

const Wrap = styled.div`
    padding: 0 28px;
    

    & > div:not(:last-child){
        margin-bottom: 20px;
    }

    & .next__btn{
        margin: 352px 0 46px;
    }
`;

const Join = () => {
    return(
        <Wrap>
            <FormInput title="이메일">이메일</FormInput>
            <FormInput title="비밀번호">비밀번호</FormInput>
            <FormInput title="비밀번호 확인">비밀번호 확인</FormInput>

            <LoginBtn className="next__btn">다음</LoginBtn>
        </Wrap>
    );
}

export default Join;