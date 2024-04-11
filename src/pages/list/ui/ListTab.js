import styled from "styled-components";
import starOn from "../../../assets/images/common/star_on.png";
import starOff from "../../../assets/images/common/star_off.png";
import { Link } from "react-router-dom";
import { useState } from "react";

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

    &.active {
        font-weight: 700;
        color: #33C2FF;
    }

    &.active::after {
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


function ListTab({type, setType}) {
    // const [type, setType] = useState('follow');

    return (
        <Wrapper>
            <ul>
                <li onClick={()=>{setType('follow')}}><TabLink className={type == 'follow' ? 'active' : ''}><img src={type == 'follow' ? starOn : starOff} /></TabLink></li>
                <li onClick={()=>{setType('hot')}}><TabLink className={type == 'hot' ? 'active' : ''}>Hot</TabLink></li>
                <li onClick={()=>{setType('new')}}><TabLink className={type == 'new' ? 'active' : ''}>New</TabLink></li>
                <li onClick={()=>{setType('coll')}}><TabLink className={type == 'coll' ? 'active' : ''}>Coll</TabLink></li>
                <li onClick={()=>{setType('celeb')}}><TabLink className={type == 'celeb' ? 'active' : ''}>Celeb</TabLink></li>
            </ul>
        </Wrapper>
    )
}

export default ListTab;