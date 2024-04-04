import styled from "styled-components";
import plus from "../../../assets/images/detail/plus.png";
import minus from "../../../assets/images/detail/minus.png";


const Wrapper = styled.div`
    min-width: 290px;
    height: 70px;
    border: 1px solid #33C2FF;
    border-radius: 21px;
    overflow: hidden;

    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
        width: 60px;
        height: 100%;
        flex-shrink: 0;
        background: none;
        border: none;

        img {
            width: 18px;
        }
    }

    input {
        width: 100%;
        height: 100%;
        border: none;
        text-align: center;
        font-size: 20px;
        font-weight: 500;
        color: #333333;

    }

`;


function CntInput() {
    return (
        <Wrapper>
            <button><img src={minus} /></button>
            <input type="text"/>
            <button><img src={plus} /></button>
        </Wrapper>
    )
}

export default CntInput;