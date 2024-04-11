import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";
import ListNew from "./ui/New";
import Collection from "./ui/Collection";
import ListCeleb from "./ui/ListCeleb";
import CollectionDetail from "./ui/CollectionDetail";
import CelebDetail from "./ui/CelebDetail";
import { useState } from "react";

const Wrapper = styled.div`
    padding: 0 16px;
   
`;


function List() {
    const [type, setType] = useState('follow');

    return (
        <Wrapper>
            <ListTab type={type} setType={setType}></ListTab>

            {
                type === "follow" ? <ListFollow />
                    : type === "hot" ? <ListHot></ListHot>
                        : type === "new" ? <ListNew></ListNew>
                            : type === "coll" ? <Collection></Collection>
                                : type === "celeb" ? <ListCeleb></ListCeleb>
                                    : ""
            }

            {/* <ListHot></ListHot> */}

            {/* <ListNew></ListNew> */}

            {/* <Collection></Collection> */}


            {/* <ListCeleb></ListCeleb> */}

            {/* <CollectionDetail></CollectionDetail> */}

            {/* <CelebDetail></CelebDetail> */}

        </Wrapper>
    )
}

export default List;