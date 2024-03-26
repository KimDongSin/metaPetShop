import styled from "styled-components";
// import sampleImg from '../../../assets/images/common/dog_sample3.png';
import ItemThumbnail from "../../components/thumnail/thumnail";
import sampleUser from '../../assets/images/common/user_img.png';
import shareIcon from '../../assets/images/common/share_icon.png';
import { Link } from "react-router-dom";
import DetailTab from "./ui/detailTab";
import DetailStory from "./ui/detailStory";
import DetailInfo from "./ui/detailInfo";
import DetailFollower from "./ui/detailFollower";
import DetailDelivery from "./ui/delivery";

const Wrapper = styled.div`
    padding: 0px 16px;

`;

const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const UserInfo = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > img {
        width: 40px;
        height: 40px;
        margin-right: 13px;
    }

    & > span {
        font-size: 18px;
        font-weight: 600;
        color: #333333;
    }

`;

const Share = styled.div`
    & > button {
        background: none;
        border: none;

        & > img {
            width: 22px;
            height: 22px;
        }
    }
`;

const ItemDetail = styled.div`

`;

function Detail() {
    return (
        <Wrapper>
            <User>
                <UserInfo>
                    <img src={sampleUser} />
                    <span>good monkey</span>
                </UserInfo>
                <Share>
                    <button><img src={shareIcon} /></button>
                </Share>
            </User>

            <ItemDetail>
                <ItemThumbnail size='large'></ItemThumbnail>
            </ItemDetail>



            <DetailDelivery />
            <DetailTab />
            <DetailFollower />
            <DetailInfo />
            <DetailStory />
        </Wrapper>
    )
}

export default Detail;