import styled from "styled-components";
import ItemThumbnail from "../../../components/thumnail/Thumnail";
import Product from "../../../components/product/Product";

const Wrapper = styled.div`
    margin-bottom: 30px;

    & > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: #333333;
        margin-bottom: 17px;
    }

`;

function DetailRecommend({randomProduct, userLike}) {
    return (
        <Wrapper>
            <span>이런 NFT는 어떠신가요?</span>
            <Product randomProduct={randomProduct} userLike={userLike} />
        </Wrapper>
    )
}

export default DetailRecommend;