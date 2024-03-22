import styled from "styled-components";
import Title from "../../components/title/title";
import More from "../../components/more/more";
import CelebList from "./ui/celebList";
import Collection from "./ui/collection";


const Wrapper = styled.div`
    padding: 20px 16px;
    background: #F9FCFF;
`;

const Section = styled.div`
    margin-bottom: 32px;
`;

function Home() {
    return (
        <Wrapper>
            <Title title="반려동물 NFT를 메타펫에서 만날 수 있습니다." sub="국내 최초 반려동물 전용 NFT 마켓플레이스, 메타펫" />
            <More title="인기있는 NFT" />

            <Section>
                <More title="Top Collections" />
                <Collection />

            </Section>

            <Section>
                <More title="Top Celeb" />
                <CelebList />
            </Section>
        </Wrapper>
    )
}

export default Home;