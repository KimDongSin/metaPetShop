import styled from "styled-components";
import profile from "../../assets/images/myPage/profile.png";

const Wrap = styled.div`
  padding: 9px 16px 85px;
  .mypage__wrap {
    padding: 16px 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    &__left > p {
      font-size: 18px;
      font-weight: 500;
    }

    &__point {
      display: flex;
      flex-direction: column;

      & > span:first-child {
        font-size: 12px;
        color: #909090;
        margin-top: 13px;
        margin-bottom: 2px;
      }

      & > span:last-child {
        font-size: 16px;
        font-weight: 500;
        color: #333333;
      }
    }

    .profile__img {
      width: 91px;
      height: 91px;
      border-radius: 100%;
    }
  }
`;

const InfoBgBox = styled.div`
  width: 100%;
  height: ${(props) => props.height};
  border-radius: 15px;
  background-color: #f9f9f9;
`;

const MyPage = () => {
  return (
    <Wrap>
      <InfoBgBox height="123px">
        <div className="mypage__wrap">
          <div className="mypage__wrap__left">
            <p>Metaverse Robot</p>

            <div className="mypage__wrap__point">
              <span>보유 MET</span>
              <span>150,000</span>
            </div>
          </div>

          <img className="profile__img" src={profile} />
        </div>
      </InfoBgBox>
    </Wrap>
  );
};
export default MyPage;
