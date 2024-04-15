import styled from "styled-components";
import plus from "../../../assets/images/detail/plus.png";
import minus from "../../../assets/images/detail/minus.png";
import { useState } from "react";


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
        cursor: pointer;

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
        outline: none;
    }
`;


function CntInput({product}) {
    console.log(product.amount);
    const [value, setValue] = useState(1);

    return (
        <Wrapper>
            <button onClick={()=> {setValue((prev)=>(prev >1 ? value - 1 : null))}}><img src={minus} /></button>
            <input type="number" defaultValue={1} max="10" value={value} />
            <button onClick={()=> {setValue((prev)=>(prev < product.amount  ? value + 1 : product.amount))}}><img src={plus} /></button>
        </Wrapper>
    )
}

export default CntInput;