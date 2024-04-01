import styled from "styled-components";
import { BuyBtn, CartBtn, PrepareBtn } from "../../../components/styled/UI/button/Button";
import cart from "../../../assets/images/common/cart_on_icon.png";

const Wrapper = styled.div`
    margin-bottom: 18px;
`;

const ProductPrice = styled.div`

`;

const Like = styled.div`

`;

const Sell = styled.ul`

`;

const ProductCnt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const BeforeProduct = styled.div`

`;



function Price() {
    return (
        <Wrapper>
            
            <ProductPrice>
                <Like>
                    <img />
                    <span>1,345</span>
                </Like>

                <Sell>
                    <li>
                        <span>판매가</span>
                        <span>KRW</span>
                    </li>
                    <li>
                        <span>550 MET</span>
                        <span>55,000 원</span>
                    </li>
                </Sell>

            </ProductPrice>


            <ProductCnt>
                <CartBtn><img src={cart} /></CartBtn>
                <BuyBtn>구매하기</BuyBtn>
            </ProductCnt>
            
            <BeforeProduct>
                <PrepareBtn>
                    아직 판매 전 입니다 <span>00:23:12:12</span>
                </PrepareBtn>
            </BeforeProduct>

        </Wrapper>
    )
}

export default Price;