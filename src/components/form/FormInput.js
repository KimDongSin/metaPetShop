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
    }

    input::placeholder{
        color: #909090;
        font-size: 16px;
    }
` 

const FormInput = ({title, type, placeholder}) => {
    return(
        <Wrap>
            <p>{title}</p>
            <input type={type} placeholder={placeholder} />
        </Wrap>
    );
}
export default FormInput;