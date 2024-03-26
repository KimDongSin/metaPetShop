import styled from "styled-components";
import { Link } from "react-router-dom";

const CstLink = styled(Link)`
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

function CustomeLink({url}) {
    return (
        <CstLink to={url} >메인으로</CstLink>
    )
}

export default CustomeLink;