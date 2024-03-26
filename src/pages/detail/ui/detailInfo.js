import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 24px;
    font-size: 0;

    ul {
        width: 100%;
        padding: 20px 12px;
        border-radius: 10px;
        background: #F9F9F9;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        li {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 12px;

            &:last-child {
                margin-bottom: 0;
            }

            span {
                font-size: 17px;
                font-weight: 400;
                line-height: 21px;
                color: #909090;

                &:last-child {
                    font-weight: 500;
                    color: #333333;
                }
            }

        }
    }
`;

function DetailInfo() {
    return (
        <Wrapper>
            <ul>
                <li>
                    <span>contract address</span>
                    <span>contract address</span>
                </li>
                <li>
                    <span>token standard</span>
                    <span>ERC-721</span>
                </li>
                <li>
                    <span>Blockchain</span>
                    <span>Ethereum</span>
                </li>
                <li>
                    <span>Creator Fees address</span>
                    <span>10%</span>
                </li>
            </ul>

        </Wrapper>
    )
}

export default DetailInfo;