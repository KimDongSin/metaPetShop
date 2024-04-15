import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from "react-router-dom";
import ItemThumbnail from "../../../components/thumnail/Thumnail";

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

function NewSwipe({ product }) {
    return (
        <SwiperWrap
            slidesPerView={'auto'}
            spaceBetween={8}
            className="mySwiper"
        >
            {
                product !== undefined ?
                    product.map((item, idx) => {
                        return (
                            <SlideItem key={idx}>
                                <Link to={"/detail/" + item.uuid} state={item} >
                                    <ItemThumbnail product={item} />
                                </Link>
                            </SlideItem>
                        )
                    })

                    : null
            }
        </SwiperWrap >
    )
}

export default NewSwipe;