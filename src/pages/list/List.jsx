import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";
import ListNew from "./ui/New";
import Collection from "./ui/Collection";
import ListCeleb from "./ui/ListCeleb";
import CollectionDetail from "./ui/CollectionDetail";
import CelebDetail from "./ui/CelebDetail";
import { useDispatch, useSelector } from "react-redux";
import { menuChange } from "../../store/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../../common/utils/scrollToTop";
import { shuffleArray } from "../../common/utils/shuffleArray";

const Wrapper = styled.div`
  padding: 0 16px;
`;

function List() {
  const type = useSelector((state) => state.listTabType.type);
  const dispatch = useDispatch();
  const location = useLocation();
  const product = location.state?.product;
  const userLike = location.state?.userLike;
  const randomProduct = location.state?.randomProduct;
  const user = location.state?.user;
  const userFollowing = location.state?.userFollowing;

  useEffect(() => {
    dispatch(menuChange("product"));
  }, []);

  ScrollToTop();

  return (
    <Wrapper>
      <ListTab type={type}></ListTab>

      {type === "follow" ? (
        <ListFollow />
      ) : type === "hot" ? (
        <ListHot
          randomProduct={randomProduct}
          product={product}
          userLike={userLike}
        />
      ) : type === "new" ? (
        <ListNew
          randomProduct={randomProduct}
          product={product}
          userLike={userLike}
        ></ListNew>
      ) : type === "coll" ? (
        <Collection />
      ) : type === "celeb" ? (
        <ListCeleb user={user} userFollowing={userFollowing}></ListCeleb>
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default List;
