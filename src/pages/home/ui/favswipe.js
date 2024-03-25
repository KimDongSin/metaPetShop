import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../../assets/images/common/dog_sample3.png';
import share from '../../../assets/images/common/item_share_icon.png';
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import 'swiper/css';
import { Link } from "react-router-dom";
import Tag from "./tag";

const SwiperWrap = styled(Swiper)`
    height: 450px;
    overflow: visible;
`;

const SlideItem = styled(SwiperSlide)`
    width: 80%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 18px 0 #0000000F;
    font-size: 0;
    height: 434px;
`;

const ItemImg = styled.div`

    & > img {
        object-fit: cover;
        width: 100%;
        height: 325px;
    }

    span {
        top: 20px;
        left: 20px;
        display: block;
        position: absolute;
        background: #FF5555;
        border-radius: 15px;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        color: #FFFFFF;
        padding: 5px 10px;
    }

    button {
        padding: 0;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 46px;
        height: 46px;
        border: 0;
        border-radius: 100%;
        background: none;
        
        & > img {
            width: 46px;
            height: 46px;
        }
    }
`;


const ItemInfo = styled.div`
    padding: 17px 22px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const ItemTitle = styled.div`

    & > span {
        font-size: 20px;
        font-weight: 500;
        line-height: 25px;
        color: #333333;
    }

`;
const ItemLike = styled.button`
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    background: none;
    border: none;

    img {
        width: 56px;
        height: 56px;
        border: 1px solid #0000000F;
    border-radius: 100%;

    }
`;


function FavSwipe() {

    // Link 이동 방지
    const shareBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };
    // Link 이동 방지
    const likeBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };


    return (
        <>
            <SwiperWrap
                slidesPerView={'auto'}
                spaceBetween={30}
                className="mySwiper"
            >
                <SlideItem>
                    <Link to="/a">
                        <ItemImg>
                            <img src={sampleImg} />
                            <span>3일 11시간 23분</span>
                            <button onClick={shareBtn}><img src={share} /></button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>

                            <ItemLike onClick={likeBtn}>
                                <img src={likeOn} />
                            </ItemLike>
                        </ItemInfo>
                    </Link>

                </SlideItem>
                <SlideItem>
                    <Link to="/a">
                        <ItemImg>
                            <img src={sampleImg} />
                            <span>3일 11시간 23분</span>
                            <button onClick={shareBtn}><img src={share} /></button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>

                            <ItemLike onClick={likeBtn}>
                                <img src={likeOn} />
                            </ItemLike>
                        </ItemInfo>
                    </Link>

                </SlideItem>
                <SlideItem>
                    <Link to="/a">
                        <ItemImg>
                            <img src={sampleImg} />
                            <span>3일 11시간 23분</span>
                            <button onClick={shareBtn}><img src={share} /></button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>

                            <ItemLike onClick={likeBtn}>
                                <img src={likeOn} />
                            </ItemLike>
                        </ItemInfo>
                    </Link>

                </SlideItem>
            </SwiperWrap>
        </>
    )
}

export default FavSwipe;