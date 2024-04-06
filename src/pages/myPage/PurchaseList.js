import styled from "styled-components";

const Wrap = styled.div`
  .purchease__list__wrap {
    padding: 18px 28px;

    .date__text {
      font-size: 14px;
      font-weight: 500;
      color: #909090;
      margin-bottom: 8px;
    }

    .list__wrap__item {
      background-color: #f9f9f9;
      height: 132px;
    }
  }

  & .purchease__list__wrap:not(:first-child) {
    border: 4px solid #f9f9f9;
  }
`;

const PurchaseList = () => {
  return (
    <Wrap>
      <div className="purchease__list__wrap">
        <p className="date__text">6월 20일</p>

        <div className="list__wrap__item">
          {/* bgbox */}
          <div className="list__itme__box"></div>

          <div className="list__btn__box"></div>
        </div>
      </div>
    </Wrap>
  );
};
export default PurchaseList;
