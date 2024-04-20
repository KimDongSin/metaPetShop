import styled from "styled-components";
import { ReplyBtn } from "../../../components/styled/UI/button/Button";

const Wrapper = styled.div`
    width: 100%;
    height: 60px;
    margin-bottom: 20px;
    border: 1px solid #33C2FF;
    border-radius: 16px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    & > textarea {
        width: 100%;
        height:100%;
        outline: none;
        padding: 15px;
        border: none;
        font-size: 15px;
        font-weight: 500;
        color: #4D4D4D;
        resize: none;
    }
`;


function CommunityReply() {
    return (
        <Wrapper>
            <textarea type="text" placeholder="응원의 한마디 남기기" />
            <ReplyBtn>완료</ReplyBtn>

        </Wrapper>
    )
}

export default CommunityReply;