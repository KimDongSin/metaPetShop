import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";
import ListNew from "./ui/New";
import Collection from "./ui/Collection";
import ListCeleb from "./ui/ListCeleb";

const Wrapper = styled.div`
    padding: 0 16px;
   
`;


function List() {
    return (
        <Wrapper>
            <ListTab></ListTab>
            {/* <ListFollow></ListFollow> */}
            
            {/* <ListHot></ListHot> */}

            {/* <ListNew></ListNew> */}

            {/* <Collection></Collection> */}


            <ListCeleb></ListCeleb>

        </Wrapper>
    )
}

export default List;