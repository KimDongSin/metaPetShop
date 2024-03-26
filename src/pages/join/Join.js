import styled from "styled-components";
import FormInput from "../../components/form/FormInput";

const Wrap = styled.div`
    padding: 0 28px;
`;

const Join = () => {
    return(
        <Wrap>
            <FormInput title="이메일">이메일</FormInput>
            <FormInput title="비밀번호">비밀번호</FormInput>
            <FormInput title="비밀번호 확인">비밀번호 확인</FormInput>
        </Wrap>
    );
}

export default Join;