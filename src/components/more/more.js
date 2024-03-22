import styled from "styled-components";
import moreArrow from "../../assets/images/common/more_icon.png";

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


function More({ title }) {
    return (
        <Wrapper>
            <span>{title}</span>
            <a href="#"><img src={moreArrow} /></a>
        </Wrapper>
    )
}

export default More;