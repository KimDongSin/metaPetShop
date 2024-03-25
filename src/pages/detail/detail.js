import styled from "styled-components";
// import sampleImg from '../../../assets/images/common/dog_sample3.png';
import ItemThumbnail from "../../components/thumnail/thumnail";

const Wrapper = styled.div`
    padding: 18px 16px;

`;

const User = styled.div`

`;

const UserInfo = styled.div`

`;

const Share = styled.div`

`;

const ItemDetail = styled.div`

`;

function Detail() {
    return (
        <Wrapper>
            <User>
                <UserInfo>
                    <img />
                    <span>good monkey</span>
                </UserInfo>
                <Share>
                    <button><img /></button>
                </Share>
            </User>

            <ItemDetail>

                <ItemThumbnail></ItemThumbnail>
                {/* <ItemImg>
                    <img src={sampleImg} />
                </ItemImg>

                <ItemInfo>
                    <ItemTitle>
                        <span>TITLE 123</span>
                        <Tag />
                        <p>
                            good monkeygood monkeygood monkeygood monkeygood monkey
                        </p>
                    </ItemTitle>
                </ItemInfo> */}
            </ItemDetail>
        </Wrapper>
    )
}

export default Detail;