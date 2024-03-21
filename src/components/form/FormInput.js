import styled from "styled-components";

const Wrap = styled.div`
    input{
        width: 90%;
        height: 57px;
        border-radius: 16px;
        border: 1px solid #DFDFDF;
        padding: 18px 23px;
        color: #333333;
        font-size: 16px;
        font-family: "SUIT-Regular";
    }
` 



const FormInput = () => {
    return(
        <Wrap>
            <p>이메일</p>
            <input type="text" placeholder="아이디를 입력해주세요." />
        </Wrap>
    );
}
export default FormInput;