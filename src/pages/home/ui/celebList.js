import styled from "styled-components";
import List from "./list";

const Wrapper = styled.div`
    padding: 14px 12px;
    background: #FFF;
    border-radius: 14px;
    box-shadow: 0 4px 10px 0 #0000000F;
`;

function CelebList() {
    return (
        <Wrapper>
            <ul>
                <List />
                <List />
                <List />
                <List />
                <List />
            </ul>
        </Wrapper>
    )
}

export default CelebList;