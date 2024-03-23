import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 15px;

    span {
        display: inline-block;
        padding: 5px 7px;
        margin-right: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        border-radius: 6px;

        margin-bottom: 5px;
            

        &:first-child {
            color: #33C2FF;
            background: #EDF8FF;
        }

        &:last-child {
            color: #FEC600;
            background: #FFF7DC;
        }
    }
`;

function Tag() {
    return (
        <Wrapper>
            <span>550MET</span>
            <span>current Bid</span>
        </Wrapper>
    )
}

export default Tag;