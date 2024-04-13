import styled from "styled-components";
import CollectionList from "./collectionList";

const Wrapper = styled.div`
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`;

function Collection() {
    return (
        <Wrapper>
            <ul>
                <CollectionList />
                <CollectionList />
                <CollectionList />
                <CollectionList />
            </ul>

        </Wrapper>
    )
}

export default Collection;