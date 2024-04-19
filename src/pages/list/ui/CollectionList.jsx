import styled from "styled-components";
import likeOn from '../../../assets/images/common/like_on.png';
import likeOff from '../../../assets/images/common/like_off.png';
import sampleImg from '../../../assets/images/common/dog_sample2.png';
import sampleImg2 from '../../../assets/images/common/dog_sample3.png';

import { Link } from "react-router-dom";
import { objToArr } from "../../../common/utils/objToArr";



const CollItem = styled.li`
    width: 100%;
    padding: 12px;
    border-radius: 20px;
    box-shadow: 0 4px 10px 0 #0000000F;
    margin-bottom: 15px;
`;

const UserInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

const ImgLink = styled(Link)`
    margin-right: 14px;
    overflow: hidden;

    & > img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        object-fit: cover;
    }
`;

const UserLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: left;
    flex-direction: column;
    margin-bottom: 15px;

    & > span {
        display: block;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
        color: #333333;

        &:last-child {
            font-size: 14px;
            font-weight: 400;
            color: #909090;
        }

    }
`;

const CollLike = styled.div`
    width: 42px;
    height: 42px;

    & > button {
        width: 42px;
        height: 42px;
        padding: 0;
        margin: 0;
        background: none;
        border: 1px solid #0000000F;
        border-radius: 100%;
        cursor: pointer;

        & > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 100%;
        }
    }
`;

const CollImg = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SoloImg = styled.div`
    width: 48%;
    margin-right: 10px;

    & > img  {
        width: 152px;
        height: 200px;
        object-fit: cover;
        border-radius: 24px;
    }
`;


const GroupImg = styled.div`
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    
    & > img {
        width: 95px;
        height: 95px;
        object-fit: cover;
        border-radius: 12px;

    }

`;


function CollectionItem({ coll, productAll }) {
    console.log(coll);
    console.log(productAll);
    let product = objToArr(coll.product);
    let collectionItem;

    function filterCollection() {
        let temp = [];

        productAll?.filter((val, i) => {
            product?.filter((item, idx) => {
                if (val.uuid == item) {
                    temp.push(val);
                }
            })
        });
        return temp
    }
    collectionItem = filterCollection();
    // collectionItem  = collectionItem?.slice(0, 4);

    console.log(collectionItem);


    return (
        <CollItem>
            <UserInfo>
                <div>
                    <ImgLink to={"/"}>
                        <img src={coll.userImage} />
                    </ImgLink>

                    <UserLink to={"/"}>
                        <span>{coll.title}</span>
                        <span>created by {coll.userNickname}</span>
                    </UserLink>
                </div>
                {/* <CollLike>
                    <button><img src={likeOff} /></button>
                </CollLike> */}

            </UserInfo>

            <CollImg  to={"/"}>
                <SoloImg>
                    <img src={coll.image} />
                </SoloImg>
                <GroupImg>
                    {
                        collectionItem &&
                        collectionItem?.slice(0, 4).map((item, i) => {
                            return(
                                <img src={item.image} />
                            )
                        })
                    }
                </GroupImg>

            </CollImg>
        </CollItem>
    )
}

export default CollectionItem;