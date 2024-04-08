import styled from "styled-components";
import Title from "../../../components/title/title";
import ListSearch from "./ListSearch";

import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import sampleImg from '../../../assets/images/common/dog_sample2.png';


import { Link } from "react-router-dom";



const Wrapper = styled.div`

`;

const CollectionList = styled.div`
    & > ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

`;


const CollItem = styled.li`
    padding: 12px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 #0000000F;

`;

const UserInfo = styled.div`
    & > div {
        display: flex;
        justify-content: center;
        align-items: center;

    }
`;



const ImgLink = styled.div`

`;





const CollLike = styled.div`

`;



const CollImg = styled.li`

`;

const ImgList = styled.li`

`;


function Collection() {

    return (
        <Wrapper>

            <Title title="다양한 NFT컬렉션을 만나보세요" sub="컬렉션 수집은 NFT가 주는 즐거움이 배가 됩니다"></Title>


            <ListSearch />

            <CollectionList>
                <ul>
                    <CollItem>
                        <UserInfo>
                            <div>
                                <ImgLink>
                                    <img src={sampleImg} />
                                </ImgLink>

                                <Link>
                                    <span>Metaverse Robot</span>
                                    <span>created by gogogo</span>
                                </Link>
                            </div>


                            <CollLike>
                                <button><img src={likeOff} /></button>
                            </CollLike>

                        </UserInfo>



                        <CollImg>
                            <ImgList>
                                <Link>
                                    <div>
                                        <img src="" />
                                    </div>
                                    <div>
                                        <img src="" />
                                        <img src="" />
                                        <img src="" />
                                        <img src="" />
                                    </div>
                                </Link>
                            </ImgList>

                        </CollImg>
                    </CollItem>

                </ul>
            </CollectionList>
        </Wrapper>
    )
}

export default Collection;