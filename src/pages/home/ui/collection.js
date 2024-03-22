import styled from "styled-components";
import dog1 from "../../../assets/images/common/dog_sample1.png"
import dog2 from "../../../assets/images/common/dog_sample2.png"
import dog3 from "../../../assets/images/common/dog_sample3.png"

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

const CollectionList = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 8px;
    padding: 12px;
    border-radius: 21px;
    background: #FFF;
    box-shadow: 0 4px 10px 0 #0000000F;

    img {
        width: 164px;
        height: 164px;
        object-fit: cover;
        border-radius: 24px;
        margin-bottom: 14px;
    }

    span {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: #333;
    }
`;


const Tag = styled.div`
    margin-top: 15px;

    span {
        display: inline-block;
        padding: 5px 7px;
        margin-right: 4px;
        font-size: 14px;
        font-weight: 500;
        line-height: 18px;
        border-radius: 6px;

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





function Collection() {
    return (
        <Wrapper>
            <ul>
                <CollectionList>
                    <img src={dog1} />
                    <span>good monkey</span>
                    <Tag>
                        <span>550MET</span>
                        <span>current Bid</span>
                    </Tag>
                </CollectionList>
                <CollectionList>
                    <img src={dog2} />
                    <span>good monkey</span>
                    <Tag>
                        <span>550MET</span>
                        <span>current Bid</span>
                    </Tag>
                </CollectionList>
                <CollectionList>
                    <img src={dog3} />
                    <span>good monkey</span>
                    <Tag>
                        <span>550MET</span>
                        <span>current Bid</span>
                    </Tag>
                </CollectionList>
                <CollectionList>
                    <img src={dog1} />
                    <span>good monkey</span>
                    <Tag>
                        <span>550MET</span>
                        <span>current Bid</span>
                    </Tag>
                </CollectionList>
                
            </ul>

        </Wrapper>
    )
}

export default Collection;