import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";

const Wrapper = styled.div`
    padding: 0 16px;
   
`;


function List() {
    return (
        <Wrapper>
            <ListTab></ListTab>
            {/* <ListFollow></ListFollow> */}
            
            <ListHot></ListHot>


        </Wrapper>
    )
}

export default List;