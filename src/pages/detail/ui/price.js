import styled from "styled-components";
import { BuyBtn, CartBtn } from "../../../components/styled/UI/button/Button";
import cart from "../../../assets/images/common/cart_on_icon.png";

const Wrapper = styled.div`

`;

const Like = styled.div`

`;

const ProductCnt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const BeforeSeller = styled.div`

`;



function Price() {
    return (
        <Wrapper>
            
            <Like>

            </Like>
            


            <ProductCnt>
                <CartBtn><img src={cart} /></CartBtn>
                <BuyBtn>구매하기</BuyBtn>
            </ProductCnt>
            <BeforeSeller></BeforeSeller>

        </Wrapper>
    )
}

export default Price;