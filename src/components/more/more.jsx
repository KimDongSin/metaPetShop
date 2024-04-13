import styled from "styled-components";
import moreArrow from "../../assets/images/common/more_icon.png";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { listTabChange } from "../../store/store";

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;

    span {
        font-size: 18px;
        font-weight: bold;
        line-height: 23px;
        color: #333333;
    }

    img {
        width: 28px;
        height: 28px;
    }
`;


function More({ title, type }) {
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <span>{title}</span>
            <Link to="/list" onClick={() => { dispatch(listTabChange(type))}}><img src={moreArrow} /></Link>
        </Wrapper>
    )
}

export default More;