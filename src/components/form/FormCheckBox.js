import styled from "styled-components";
import checkImg from "../../assets/images/join/check.png";

const Wrap = styled.label`

    input[type="checkbox"]{
        display: none;
    }

    input[type="checkbox"] + label{
        display: inline-block;
        width: 11px;
        height: 11px;
        border: 1px solid #33C2FF;
        position: relative;
    }

    input[id="loginState"]:checked + label::after{
        content: '';
        background-image: url(checkImg);
        font-size: 11px;
        width: 11px;
        height: 11px;
        text-align: center;
        position: absolute;
        left: 0;
        top:0;
      }

    span{
        font-size: 14px;
        margin-left: 6px;
    }
`;

const FormCheckBox = () =>{
    return(
        <Wrap for="loginState">
            <input id="loginState" type="checkbox" />
            <label for="loginState"></label>
            <span>로그인 상태 유지</span>
        </Wrap>
    );
}

export default FormCheckBox;