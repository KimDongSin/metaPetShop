import styled from "styled-components";
import imgSample from "../../../assets/images/common/user_img.png";
import celebMore from "../../../assets/images/common/celebMore.png";

const Wrapper = styled.div`
    padding: 14px 12px;
    background: #FFF;
    border-radius: 14px;
    box-shadow: 0 4px 10px 0 #0000000F;
`;

const List = styled.li`
    width: 100%;
    height: 60px;

    a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & >img {
            width: 28px;
            height: 28px;
        }
    }
`;

const Celeb = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;

    span {
        font-size: 16px;
        font-weight: 20px;
        color: #333333;
    }

    img {
        margin-right: 14px;
        width: 46px;
        height: 46px;
    }
`;

function CelebList() {
    return (
        <Wrapper>
            <ul>

                <List>
                    <a href="#none">
                        <Celeb>
                            <img src={imgSample} />
                            <span>Metaverse Robot</span>
                        </Celeb>
                        <img src={celebMore} />
                    </a>
                </List>


                <List>
                    <a href="#none">
                        <Celeb>
                            <img src={imgSample} />
                            <span>Metaverse Robot</span>
                        </Celeb>
                        <img src={celebMore} />
                    </a>
                </List>
                <List>
                    <a href="#none">
                        <Celeb>
                            <img src={imgSample} />
                            <span>Metaverse Robot</span>
                        </Celeb>
                        <img src={celebMore} />
                    </a>
                </List>
                <List>
                    <a href="#none">
                        <Celeb>
                            <img src={imgSample} />
                            <span>Metaverse Robot</span>
                        </Celeb>
                        <img src={celebMore} />
                    </a>
                </List>
                <List>
                    <a href="#none">
                        <Celeb>
                            <img src={imgSample} />
                            <span>Metaverse Robot</span>
                        </Celeb>
                        <img src={celebMore} />
                    </a>
                </List>
            </ul>
        </Wrapper>
    )
}

export default CelebList;