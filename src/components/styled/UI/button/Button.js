import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
`;

export const LoginBtn = styled(Btn)`
    color: #ffffff;
    background-color: #33C2FF;
`;

export const JoinBtn = styled(Btn)`
    color: #33C2FF;
    background-color: #F8F8F8;
`;

export const InfoFindBtn = styled(Btn)`
    font-weight: 500;
    color: #6C6C6C;
`;

export const BtnLink = styled(Link)`
  width: 100%;
`;