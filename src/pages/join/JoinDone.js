import styled from "styled-components";
import JoinImg from "../../assets/images/join/JoinDone.png";
import { LoginBtn } from "../../components/styled/UI/button/Button";
import { Link } from "react-router-dom";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 97px 28px 46px;

  & > img {
    margin-bottom: 41px;
  }

  & > p {
    color: #333333;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 12px;
  }

  & > span {
    color: #565656;
    font-size: 14px;
  }

  & .join__done__loginbtn {
    margin-top: 423px;
  }
`;

const JoinDoneLink = styled(Link)`
    width: 100%;
`;

const JoinDone = () => {
  return (
    <Wrap>
      <img src={JoinImg} />
      <p>회원가입을 완료하였습니다.</p>
      <span>로그인 후 원활한 서비스를 이용해주세요.</span>

      <JoinDoneLink to="/">
        <LoginBtn className="join__done__loginbtn">회원가입 완료</LoginBtn>
      </JoinDoneLink>
    </Wrap>
  );
};
export default JoinDone;
