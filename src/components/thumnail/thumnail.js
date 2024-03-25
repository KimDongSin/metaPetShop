import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import sampleImg from '../../assets/images/common/dog_sample3.png';
import 'swiper/css';
import Tag from "../../pages/home/ui/tag";

const Wrapper = styled.div`

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

function ItemThumbnail() {

    return (
        <Wrapper>
            <ItemImg>
                <img src={sampleImg} />
            </ItemImg>

            <ItemInfo>
                <ItemTitle>
                    <span>good monkey</span>
                    <Tag />
                </ItemTitle>
            </ItemInfo>
        </Wrapper>
    )
}

export default ItemThumbnail;