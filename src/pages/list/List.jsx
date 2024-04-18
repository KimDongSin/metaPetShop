import styled from "styled-components";
import ListTab from "./ui/ListTab";
import ListFollow from "./ui/Follow";
import ListHot from "./ui/Hot";
import ListNew from "./ui/New";
import Collection from "./ui/Collection";
import ListCeleb from "./ui/ListCeleb";
import CollectionDetail from "./ui/CollectionDetail";
import CelebDetail from "./ui/CelebDetail";
import { useDispatch, useSelector } from 'react-redux';
import { menuChange } from "../../store/store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const Wrapper = styled.div`
    padding: 0 16px;
   
`;


function List() {
    const type = useSelector((state) => state.listTabType.type);
    const dispatch = useDispatch();
    const location = useLocation();
    const hotProduct = location.state.product;
    const userLike = location.state.userLike;
    const randomProduct = location.state.randomProduct;

    console.log(hotProduct);
    console.log(userLike);
    console.log(randomProduct);
    console.log(222222);

    console.log(type);
    useEffect(() => {
        dispatch(menuChange('product'));
    }, [])


    return (
        <Wrapper>
            <ListTab type={type}></ListTab>

            {
                type === "follow" ? <ListFollow />
                    : type === "hot" ? <ListHot randomProduct={randomProduct} product={hotProduct} userLike={userLike} />
                        : type === "new" ? <ListNew></ListNew>
                            : type === "coll" ? <Collection></Collection>
                                : type === "celeb" ? <ListCeleb></ListCeleb>
                                    : ""
            }

            {/* <ListHot></ListHot> */}

            {/* <ListNew></ListNew> */}

            {/* <Collection></Collection> */}


            {/* <ListCeleb></ListCeleb> */}

            {/* <CollectionDetail></CollectionDetail> */}

            {/* <CelebDetail></CelebDetail> */}

        </Wrapper>
    )
}

export default List;