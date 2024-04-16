import styled from "styled-components";
import CelebList from "./CelebList";
import { followerArrFn, objToArr } from "../../../common/utils/objToArr";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
    padding: 14px 12px;
    background: #FFF;
    border-radius: 14px;
    box-shadow: 0 4px 10px 0 #0000000F;
`;

function Celeb({ user }) {
    console.log(user);
    let userArr = followerArrFn(user);
    const [celeb, setCeleb] = useState();
    // followerArrFn(userArr);
    console.log(userArr);


  // New 정렬
    useEffect(() => {
        if (userArr != null) {
            let result = userArr.sort((a, b) => a.follower.length > b.follower.length ? -1 : 1);
            // setNewProduct(result);
            setCeleb(result)
        }
    }, [user])














    // follwer 배열변경
    // function followerArrFn(item){
    // }

    // function objToArr(item){
    //     let temp = [];
    //     for (let objKey in item) {
    //         if (item.hasOwnProperty(objKey)) {
    //             temp.push(item[objKey]);
    //         }
    //     }
    //     return temp;
    // }


    // console.log(celeb[0]);
    // for (let i = 0; i < celeb.length; i++) {
    //     console.log(celeb[i]);
    // }
    // console.log(celeb);

    // useEffect(() => {

    // }, [user])

    console.log(celeb);

    // New 정렬
    // useEffect(() => {
    //     if (celeb != null) {
    //         let result = celeb.sort((a, b) => a.startDate.toLowerCase() > b.startDate.toLowerCase() ? -1 : 1);
    //         setNewProduct(result);
    //     }
    // }, [celeb])


    return (
        <Wrapper>
            <ul>
                {
                    celeb &&
                    celeb.map((item, idx)=> {
                        return(
                            <CelebList celeb={item} key={idx} />
                        )
                    })
                }

                {/* <CelebList />
                <CelebList />
                <CelebList />
                <CelebList />
                <CelebList /> */}
            </ul>
        </Wrapper>
    )
}

export default Celeb;