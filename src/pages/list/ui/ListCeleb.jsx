import styled from "styled-components";
import Title from "../../../components/title/title";
import ListSearch from "./ListSearch";
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import sampleImg from '../../../assets/images/common/dog_sample2.png';
import sampleImg2 from '../../../assets/images/common/dog_sample3.png';

import { Link } from "react-router-dom";
import CelebItem from "./CelebItem";
import { init } from "../../../common/utils/typeChange";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { headerChange } from "../../../store/store";

const Wrapper = styled.div`
    margin-bottom: 70px;
`;

const CelobList = styled.div`

    & > ul {
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

`;


function ListCeleb() {
    // init('t2', 'product', 'Celeb');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(headerChange({
            type: 't2',
            title: 'Celeb   ',
        }));
    }, []);

    return (
        <Wrapper>
            <Title title="좋아하는 셀럽을 팔로우하세요" sub="셀럽의 새로운 NFT 판매 소식과 알림을 가장 먼저 받을 수 있습니다"></Title>
            <ListSearch />

            <CelobList>
                <ul>
                    <CelebItem />
                    <CelebItem />
                    <CelebItem />
                    <CelebItem />
                    <CelebItem />
                </ul>
            </CelobList>



        </Wrapper>
    )
}

export default ListCeleb;