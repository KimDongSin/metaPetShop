import styled from "styled-components";
import FormInput from "../form/FormInput";

const Wrap = styled.div`

`

const Join = () => {
    return(
        <Wrap>
            <FormInput title="이메일" type="text" placeholder="아이디를 입력해주세요." />
        </Wrap>
    );
}

export default Join;