import styled from "styled-components";

const OverlayWrap = styled.div`
    position: relative;

  .backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  }
`;

const Overlay = () => {
  return (
    <OverlayWrap>
      <div className="backdrop"></div>
    </OverlayWrap>
  );
};

export default Overlay;
