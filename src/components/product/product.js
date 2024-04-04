import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../assets/images/common/dog_sample3.png';
import like from '../../assets/images/common/like_on.png';
import Tag from "../../pages/home/ui/tag";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        li {
            width: 48%;
            padding: 12px;
            border: 1px solid #F2F2F2;
            border-radius: 21px;
            margin-bottom: 13px;
        }
    }
`;

const Item = styled(Link)`

`;


const ItemImg = styled.div`
    padding: 12px 0 0;
    position: relative;

    & > img {
        object-fit: cover;
        width: 100%;
        height: 164px;
        border-radius: 16px;
    }

    button {
        position: absolute;
        width: 34px;
        height: 34px;
        bottom: 16px;
        right: 12px;
        border: none;
        border-radius: 100%;
        padding: 0;
        margin: 0;
        font-size: 0;

        & > img {
            position: relative;
            top: 0px;
            left: 0px;
            width: 34px;
        }
    }
`;

const ItemInfo = styled.div`
    padding: 20px 0 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.div`

    & > span {
        font-size: 18px;
        font-weight: 500;
        line-height: 23px;
        color: #333333;
    }
`;


function Product() {
    
    // Link 이동 방지
    const likeBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };


    return (
        <Wrapper>
            <ul>
                <li>
                    <Item to="/b">
                        <ItemImg>
                            <img src={sampleImg} />
                            <button onClick={likeBtn}>
                                <img src={like} />
                            </button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>
                        </ItemInfo>
                    </Item>
                </li>
                <li>
                    <Item to="/b">
                        <ItemImg>
                            <img src={sampleImg} />
                            <button onClick={likeBtn}>
                                <img src={like} />
                            </button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>
                        </ItemInfo>
                    </Item>
                </li>
                <li>
                    <Item to="/b">
                        <ItemImg>
                            <img src={sampleImg} />
                            <button onClick={likeBtn}>
                                <img src={like} />
                            </button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>
                        </ItemInfo>
                    </Item>
                </li>
                <li>
                    <Item to="/b">
                        <ItemImg>
                            <img src={sampleImg} />
                            <button onClick={likeBtn}>
                                <img src={like} />
                            </button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>
                        </ItemInfo>
                    </Item>
                </li>
            </ul>
        </Wrapper>
    )
}

export default Product;