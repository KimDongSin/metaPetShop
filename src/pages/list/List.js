import styled from "styled-components";
import ListTab from "./ui/ListTab";

const Wrapper = styled.div`
    padding: 0 16px;
   
`;


function List() {
    return (
        <Wrapper>
            <ListTab></ListTab>

        </Wrapper>
    )
}

export default List;