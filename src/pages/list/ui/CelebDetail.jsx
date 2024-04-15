import styled from "styled-components";
import sampleImg from '../../../assets/images/common/dog_sample1.png';
import instagram from '../../../assets/images/common/instagram_icon.png';
import youtube from '../../../assets/images/common/youtube_icon.png';

import { Link } from "react-router-dom";
import Product from "../../../components/product/Product";

const Wrapper = styled.div`

`;

const CelebInfo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;

    & > p {
        width: 100%;
        padding: 30px 20px;
        background: #F9F9F9;
        border-radius: 18px;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #565656;
    }

`;


const Celeb = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    & > img {
            width: 82px;
            height: 82px;
            object-fit: cover;
            border-radius: 100%;
            margin-right: 15px;
    }
`;


const CelebSNS = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    & > span {
        display: block;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: #333333;
        margin-bottom: 11px;
    }

    & > ul {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        & > li {
            margin-right: 5px;

            &:last-child {
                margin-right: 0;
            }
        }
    }
`;

const SNSitem = styled(Link)`
    & > img {
        width: 32px;
        height: 32px;
    }
`;


const CelebFollow = styled.ul`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 35px;


    & > li {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & > span {
            display: block;
            font-size: 19px;
            font-weight: 700;
            color: #333333;
            margin-bottom: 3px;

            &:last-child {
                font-size: 14px;
                font-weight: 400;
                color: #565656;
            }
        }
    }

`;



const CollList = styled.div`

`;



function CelebDetail() {

    return (
        <Wrapper>
            <CelebInfo>
                <Celeb>
                    <img src={sampleImg} />
                    <CelebSNS>
                        <span>Metaverse Robot</span>
                        <ul>
                            <li>
                                <SNSitem><img src={instagram} /></SNSitem>
                            </li>
                            <li>
                                <SNSitem><img src={youtube} /></SNSitem>
                            </li>
                        </ul>
                    </CelebSNS>
                </Celeb>

                <CelebFollow>
                    <li>
                        <span>48</span>
                        <span>NTF프로젝트</span>
                    </li>
                    <li>
                        <span>3</span>
                        <span>팔로워</span>
                    </li>
                    <li>
                        <span>2.7k</span>
                        <span>팔로잉</span>
                    </li>
                </CelebFollow>

                <p>
                    셀럽을 소개하는 말이 여기에 텍스트로 적히게 됩니다.
                </p>
            </CelebInfo>

            <CollList>
                <Product />
            </CollList>




        </Wrapper>
    )
}

export default CelebDetail;