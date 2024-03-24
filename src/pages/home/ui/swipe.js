import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../../assets/images/common/dog_sample3.png';
import share from '../../../assets/images/common/item_share_icon.png';
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';

import 'swiper/css';
import { Link } from "react-router-dom";
import Tag from "./tag";

const Wrapper = styled.div`
    ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
`;

const SlideItem = styled(SwiperSlide)`
    width: 80%;
    background: gray;
    border-radius: 24px;
    overflow: hidden;

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
`;

const ItemTitle = styled.div`

`;
const ItemLike = styled.div`

`;














function Swipe() {

    // Link 이동 방지
    const handleClick = (e) => {
        e.preventDefault(); // Link 이동 방지

    };
    return (
        <>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                className="mySwiper"
            >
                <SlideItem>
                    <Link to="/a">
                        <ItemImg>
                            <img src={sampleImg} />
                            <span>3일 11시간 23분</span>
                            <button onClick={handleClick}><img src={share} /></button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>
                                <span>good monkey</span>
                                <Tag />
                            </ItemTitle>

                            <ItemLike>
                                <img src={likeOn}/>
                            </ItemLike>
                        </ItemInfo>
                    </Link>

                </SlideItem>
                <SlideItem>
                    <Link to="/a">
                        <ItemImg>
                            <img src={sampleImg} />
                            <span>3일 11시간 23분</span>
                            <button onClick={handleClick}><img src={share} /></button>
                        </ItemImg>

                        <ItemInfo>
                            <ItemTitle>

                            </ItemTitle>
                            <ItemLike>

                            </ItemLike>
                        </ItemInfo>
                    </Link>

                </SlideItem>


                <SlideItem>Slide 2</SlideItem>
                <SlideItem>Slide 3</SlideItem>
                <SlideItem>Slide 4</SlideItem>
                <SlideItem>Slide 5</SlideItem>
                <SlideItem>Slide 6</SlideItem>
                <SlideItem>Slide 7</SlideItem>
                <SlideItem>Slide 8</SlideItem>
                <SlideItem>Slide 9</SlideItem>
            </Swiper>
        </>
    )
}

export default Swipe;