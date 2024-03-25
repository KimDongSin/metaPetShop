import styled from "styled-components";

const Wrapper = styled.div`
    margin-bottom: 24px;

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;

        li {
            width: 88px;
            height: 44px;
            border: 1px solid #E9E9E9;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 400;
            color: #333333;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        li.on {
            color: #1790FF;
            background: #2EB4FF0D;
            border: 1px solid #1790FF;
        }
    }
`;

function DetailTab() {
    return (
        <Wrapper>
            <ul>
                <li className="on">스토리</li>
                <li>정보</li>
                <li>커뮤니티</li>
                <li>팔로워</li>
            </ul>
        </Wrapper>
    )
}

export default DetailTab;