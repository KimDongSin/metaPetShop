import styled from "styled-components";
import { BuyBtn, CartBtn, PrepareBtn } from "../../../components/styled/UI/button/Button";
import cart from "../../../assets/images/common/cart_on_icon.png";
import likeOn from "../../../assets/images/common/like_on.png";
import likeOff from "../../../assets/images/common/like_off.png";
import CntInput from "./PriceInput";

const Wrapper = styled.div`
    margin-bottom: 18px;
`;

const ProductPrice = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 36px;
`;

const Like = styled.div`
    width: 40%;
    flex-shrink: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    button {
        margin-right: 14px;
        padding: 0;
        border: none;
        background: none;
        
        img {
            border-radius: 100%;
            border: 1px solid #0000002E;
            width: 50px;
            height: 50px;
        }
    }

`;

const Sell = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & > span {
            display: block;
            font-size: 20px;
            font-weight: 500;
            color: #333333;

            &:first-child {
                margin-bottom: 5px;
            }

            &:last-child {
                font-size: 16px;
                font-weight: 400;
                color: #909090;
            }
        }
    }
`;

const ProductBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BeforeProduct = styled.div`
    font-size: 16px;
    font-weight: bold;
    font-weight: 400;
    font-size: 13px;

    & > span {
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 16px;
        border: none;
        color: #ffffff;
        background-color: #3F3F3F;

        & > span {
            display: block;
            margin-left: 8px;
            font-size: 18px;
            font-weight: 700;
        }
    }

`;

const AfterProduct = styled(BeforeProduct)`
    & > span {
        background-color: #D9D9D9;
    }
`;

const ProductCnt = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;

    span {
        width: 100%;
        display: block;
        margin-right: 13px;
        font-size: 16px;
        font-weight: 500;
        color: #909090;
    }
`;



function Price() {
    let finish = 3;

    return (
        <Wrapper>

            <ProductPrice>
                <Like>
                    <button>
                        <img src={likeOn} />
                    </button>
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
                <span>총 구매개수</span>
                <CntInput />

            </ProductCnt>

            <ProductBtn>
                <CartBtn><img src={cart} /></CartBtn>
                <BuyBtn>구매하기</BuyBtn>
            </ProductBtn>

            <BeforeProduct>
                <span>
                    아직 판매 전 입니다 <span>00:23:12:12</span>
                </span>
            </BeforeProduct>

            <AfterProduct>
                <span>
                    판매가 종료된 NFT 입니다.
                </span>
            </AfterProduct>

        </Wrapper>
    )
}

export default Price;