import styled from "styled-components";
import sample1 from "../../../assets/images/common/dog_sample1.png";
import sample2 from "../../../assets/images/common/dog_sample2.png";
import sample3 from "../../../assets/images/common/dog_sample3.png";

const Wrapper = styled.div`
    margin-bottom: 24px;
    font-size: 0;

    img {
        width: 100%;
        object-fit: cover;
    }
`;

function DetailStory() {
    return (
        <Wrapper>
            <img src={sample1} />
            <img src={sample2} />
            <img src={sample3} />
        </Wrapper>
    )
}

export default DetailStory;