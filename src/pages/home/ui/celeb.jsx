import styled from "styled-components";
import CelebList from "./CelebList";

const Wrapper = styled.div`
    padding: 14px 12px;
    background: #FFF;
    border-radius: 14px;
    box-shadow: 0 4px 10px 0 #0000000F;
`;

function Celeb() {
    return (
        <Wrapper>
            <ul>
                <CelebList />
                <CelebList />
                <CelebList />
                <CelebList />
                <CelebList />
            </ul>
        </Wrapper>
    )
}

export default Celeb;