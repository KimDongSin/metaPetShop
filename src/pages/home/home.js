import styled from "styled-components";
import Title from "../../components/title/title";
import More from "../../components/more/more";
import Collection from "./ui/collection";
import Celeb from "./ui/celeb";
import FavSwipe from "./ui/favswipe";
import NewSwipe from "./ui/newswipe";
import ScrollToTop from "../../common/utils/scrollToTop";
import { HdChange, init } from "../../common/utils/typeChange";

const Wrapper = styled.div`
  padding: 20px 16px;
  background: #f9fcff;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

function Home() {
  init('t1', 'home');

  return (
    <Wrapper>
      <ScrollToTop />

      <Title
        title="반려동물 NFT를 메타펫에서 만날 수 있습니다."
        sub="국내 최초 반려동물 전용 NFT 마켓플레이스, 메타펫"
      />

      <Section>
        <More title="인기있는 NFT" />
        <FavSwipe />
      </Section>

      <Section>
        <More title="New NFT" />
        <NewSwipe />
      </Section>

      <Section>
        <More title="Top Collections" />
        <Collection />
      </Section>

      <Section>
        <More title="Top Celeb" />
        <Celeb />
      </Section>
    </Wrapper>
  );
}

export default Home;
