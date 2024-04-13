import styled from "styled-components";
import dog1 from "../../../assets/images/common/dog_sample1.png"
import dog2 from "../../../assets/images/common/dog_sample2.png"
import dog3 from "../../../assets/images/common/dog_sample3.png"
import Tag from "./tag";
import { Link } from "react-router-dom";


const Wrapper = styled.li`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 8px;
    border-radius: 21px;
    background: #FFF;
    box-shadow: 0 4px 10px 0 #0000000F;
    width: 49%;
    overflow: hidden;
`;

const CollectionLink = styled(Link)`
    width: 100%;
    display: block;
    padding: 12px;

    img {
        width: 100%;
        height: 164px;
        object-fit: cover;
        border-radius: 24px;
        margin-bottom: 14px;
    }

    & > span {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: #333;
    }
`;

function CollectionList() {
    return (
        <Wrapper>
            <CollectionLink to="/">
                <img src={dog2} />
                <span>good monkey</span>
            <Tag />
            </CollectionLink>
        </Wrapper>
    )
}

export default CollectionList;