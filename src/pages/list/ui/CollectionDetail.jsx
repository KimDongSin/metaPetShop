import styled from "styled-components";
import sampleImg from '../../../assets/images/common/dog_sample1.png';

import { Link, useLocation } from "react-router-dom";
import Product from "../../../components/product/Product";

const Wrapper = styled.div`

`;

const CollInfo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 16px;

    & > img {
        width: 102px;
        height: 102px;
        object-fit: cover;
        border-radius: 100%;
        margin-bottom: 18px;
    }

    & > span {
        display: block;
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        color: #333333;
    }

    & > p {
        width: 100%;
        min-height: 100px;
        padding: 20px;
        background: #F9F9F9;
        border-radius: 18px;
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
        color: #565656;
    }

`;

const UserLink = styled(Link)`
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #909090;
    margin-bottom: 20px;

`;

const CollList = styled.div`

`;


function CollectionDetail() {
    const location = useLocation();

    let product = location.state;
    console.log(product);
    return (
        <Wrapper>
            <CollInfo>
                <img src={product.image} />
                <span>Metaverse Robot</span>
                <UserLink>created by gogogo</UserLink>

                <p>
                    {product.bio}
                </p>
            </CollInfo>

            <CollList>
                <Product />
            </CollList>




        </Wrapper>
    )
}

export default CollectionDetail;