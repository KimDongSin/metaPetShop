import styled from "styled-components";
import Title from "../../components/title/Title";
import More from "../../components/more/More";
import Collection from "./ui/Collection";
import Celeb from "./ui/Celeb";
import FavSwipe from "./ui/Favswipe";
import NewSwipe from "./ui/Newswipe";
import ScrollToTop from "../../common/utils/scrollToTop";
import { HdChange, init } from "../../common/utils/typeChange";

import { ref, child, get, update } from "firebase/database";
import { db } from "../../common/api/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { headerChange, menuChange } from "../../store/store";


const Wrapper = styled.div`
  padding: 20px 16px;
  background: #f9fcff;
`;

const Section = styled.div`
  margin-bottom: 32px;
`;

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerChange({
      type: 't1',
      title: 'home',
    }))
    dispatch(menuChange('home'));
  }, [])

  // init('t1', 'home');


  const readOne = () => {
    const dbRef = ref(db);
    get(child(dbRef, "/product"))
      .then(snapshot => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch(error => {
        console.error(error);
      });
  };



  readOne();

  const updateData = () => {
    const temp = {
      amount: 10000
    };

    return update(
      ref(db, "/product/0"), temp);
  };

  updateData();







  return (
    <Wrapper>
      <ScrollToTop />

      <Title
        title="반려동물 NFT를 메타펫에서 만날 수 있습니다."
        sub="국내 최초 반려동물 전용 NFT 마켓플레이스, 메타펫"
      />

      <Section>
        <More title="인기있는 NFT" type="hot" />
        <FavSwipe />
      </Section>

      <Section>
        <More title="New NFT" type="new" />
        <NewSwipe />
      </Section>

      <Section>
        <More title="Top Collections" type="coll" />
        <Collection />
      </Section>

      <Section>
        <More title="Top Celeb" type="celeb" />
        <Celeb />
      </Section>
    </Wrapper>
  );
}

export default Home;
