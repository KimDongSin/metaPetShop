import styled from "styled-components";
import ItemThumbnail from "../../../components/thumnail/thumnail";
import Product from "../../../components/product/product";

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

function DetailRecommend() {
    return (
        <Wrapper>
            <span>이런 NFT는 어떠신가요?</span>
            <Product></Product>
        </Wrapper>
    )
}

export default DetailRecommend;