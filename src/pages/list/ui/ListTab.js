import styled from "styled-components";
import starOn from "../../../assets/images/common/star_on.png";
import starOff from "../../../assets/images/common/star_off.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    margin-bottom: 28px;

    & > ul {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;

        & > li {
            width: 25%;
            height: 100%;
        }

   }
`;

const TabLink = styled(Link)`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 17px;
    font-weight: 400;
    color: #333333;

    &::after {
        width: 100%;
        height: 2px;
        background-color: #33C2FF;
        border-radius: 6px;
        content: '';
        position: absolute;
        bottom: -6px;
    }

    & > img {
        width: 22px;
        height: 22px;
    }
`;


function ListTab() {
    let type = 'star';


    return (
        <Wrapper>
            <ul>
                <li><TabLink><img src={type == 'star' ? starOn : starOff} /></TabLink></li>
                <li><TabLink>Hot</TabLink></li>
                <li><TabLink>New</TabLink></li>
                <li><TabLink>Coll</TabLink></li>
                <li><TabLink>Celeb</TabLink></li>
            </ul>
        </Wrapper>
    )
}

export default ListTab;