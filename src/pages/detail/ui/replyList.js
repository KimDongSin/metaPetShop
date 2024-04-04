import styled from "styled-components";
import sampleImg from "../../../assets/images/common/dog_sample1.png"
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    margin-bottom: 24px;
`;

const Comment = styled.li`


`;

const User = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;

    & > span {
        font-size: 14px;
        font-weight: 400;
        color: #33C2FF;
        padding: 4px 6px;
        background: #F7FCFF;
        border-radius: 6px;
    }

`;

const UserLink = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 13px;

    & > img {
        width: 34px;
        height: 34px;
        border-radius: 20px;
        object-fit: cover;
        margin-right: 10px;
    }


    & > span {
        display: block;
        font-size: 16px;
        font-weight: 500;
        color: #333333;
    }

`;

const ReplyToggle = styled.div`
    margin-left: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;

    & > span {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
    }

    & > button {
        font-size: 14px;
        font-weight: 500;
        color: #565656;
        background: none;
        border: none;
        cursor: pointer;

    }
`;

const CommentText = styled.div`
    background: #F9F9F9;
    border-radius: 10px;
    padding: 9px 12px;
    margin-bottom: 8px;

    & > p {
        font-size: 15px;
        font-weight: 400;
        line-height: 20px;
        color: #4D4D4D;

        margin-bottom: 10px;
    }



`;

const ReplyInput = styled.div`



`;





function ReplyList() {
    return (
        <Wrapper>

            <ul>
                <Comment>
                    <User>
                        <UserLink to="/" >
                            <img src={sampleImg} />
                            <span>good monkey</span>
                        </UserLink>
                        <span>NFT구매자</span>
                    </User>

                    <ReplyToggle>
                        <span>4시간 전</span>
                        <button>답글 숨기기</button>
                    </ReplyToggle>

                    <CommentText>
                        <p>
                            NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                            NFT 관련 문의 및 전송문의는 메타펫 담당자에게 문의하시면 정확한 답변을 받을 수 있습니다.
                        </p>
                        <button> 더보기</button>
                    </CommentText>

                    <ReplyInput>
                        <input type="text" placeholder="답글 작성하기" />
                        <button>작성하기</button>
                    </ReplyInput>


                </Comment>



            </ul>



        </Wrapper>
    )
}

export default ReplyList;