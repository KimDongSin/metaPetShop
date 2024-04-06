import styled from "styled-components";
import ListItem from "./ListItem";
import Title from "../../../components/title/title";

const Wrapper = styled.div`

`;

const HotList = styled.div`
    margin-bottom: 70px;
`;


function ListHot() {

    return (
        <Wrapper>

            <Title title="인기있는 판매 NFT를 만나보세요" sub="최근 24시 동안 가장 많이 판매된 NFT 입니다"></Title>

            <HotList>
                <ul>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </ul>
            </HotList>
        </Wrapper>
    )
}

export default ListHot;