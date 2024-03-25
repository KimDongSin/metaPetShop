import styled from "styled-components";
// import sampleImg from '../../../assets/images/common/dog_sample3.png';
import errorImg from '../../assets/images/common/notfound.png'
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    padding: 0 22px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 136px;
        height: 130px;
        margin: 100px;
        margin-bottom: 25px;
    }

    span {
        display: block;
        font-size: 20px;
        font-weight: 700;
        line-height: 25px;
        margin-bottom: 15px;
        color: #333333;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #565656;
        margin-bottom: 200px;
    }
`;

const MainLink = styled(Link)`
    display: block;
    width: 100%;
    height: 58px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #33C2FF;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
    margin-bottom: 100px;



`;


function NotFound() {
    return (
        <Wrapper>
            <img src={errorImg} />
            <span>
                404
            </span>
            <p>
                멍멍 준비중 입니다..!
            </p>

            <MainLink to="/" >메인으로</MainLink>

        </Wrapper>
    )
}

export default NotFound;