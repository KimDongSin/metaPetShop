import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../../assets/images/common/dog_sample3.png';
import 'swiper/css';
import { Link } from "react-router-dom";
import Tag from "./tag";
import ItemThumbnail from "../../../components/thumnail/thumnail";

const SwiperWrap = styled(Swiper)`
        overflow: visible;
`;

const SlideItem = styled(SwiperSlide)`
    width: 47%;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 18px 0 #0000000F;
    font-size: 0;
    height: 277px;
`;

const ItemImg = styled.div`
    padding: 12px 12px 0;

    & > img {
        object-fit: cover;
        width: 100%;
        height: 155px;
        border-radius: 16px;
    }
`;

const ItemInfo = styled.div`
    padding: 20px 16px 22px;
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

function NewSwipe() {

    // Link 이동 방지
    const shareBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };
    // Link 이동 방지
    const likeBtn = (e) => {
        e.preventDefault(); // Link 이동 방지
    };


    return (
        <SwiperWrap
            slidesPerView={'auto'}
            spaceBetween={8}
            className="mySwiper"
        >
            <SlideItem>
                <Link to="/a">
                    <ItemThumbnail />
                </Link>

            </SlideItem>
            <SlideItem>
                <Link to="/a">
                    <ItemImg>
                        <img src={sampleImg} />
                    </ItemImg>

                    <ItemInfo>
                        <ItemTitle>
                            <span>good monkey</span>
                            <Tag />
                        </ItemTitle>
                    </ItemInfo>
                </Link>

            </SlideItem>
            <SlideItem>
                <Link to="/a">
                    <ItemImg>
                        <img src={sampleImg} />
                    </ItemImg>

                    <ItemInfo>
                        <ItemTitle>
                            <span>good monkey</span>
                            <Tag />
                        </ItemTitle>
                    </ItemInfo>
                </Link>

            </SlideItem>
        </SwiperWrap>
    )
}

export default NewSwipe;