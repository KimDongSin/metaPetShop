import styled from "styled-components";

// footer link icon
import logo from '../../assets/images/common/logo.png';
import discord from '../../assets/images/footer/discord_icon.png';
import instagram from '../../assets/images/footer/instagram_icon.png';
import twitter from '../../assets/images/footer/twitter_icon.png';
import kakao from '../../assets/images/footer/kakao_icon.png';

// footer menu icon
import home from '../../assets/images/common/home_icon.png';
import product from '../../assets/images/common/product_icon.png';
import cart from '../../assets/images/common/cart_icon.png';
import user from '../../assets/images/common/user_icon.png';

import homeOn from '../../assets/images/common/home_on_icon.png';
import product_icon from '../../assets/images/common/product_on_icon.png';
import cartOnproduct_icon from '../../assets/images/common/cart_on_icon.png';
import userOnproduct_icon from '../../assets/images/common/user_on_icon.png';

const Wrapper = styled.div`
    height: 55px;
    padding: 7px 17px 12px;
    background-color: #FFFFFF;
`;

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HeaderLogo = styled.div`
    a {
        display: flex;
        justify-content: left;
        align-items: center;
        img {
            width: 35px;
            height: 32px;
            margin-right: 10px;
        }
    
        span {
            font-size: 23px;
            font-weight: 500;
            font-family: "Poppins", sans-serif !important;
            color: #000;
        }
    }
`;

const HeaderUser = styled.div`

`;

const Login = styled.div`
    a {
        font-size: 16px;
        font-size: bold;
        color: #33C2FF;
    }
`;










function Header() {
    return (
        <Wrapper>
            <HeaderContainer>
                <HeaderLogo>
                    <a href="#none">
                        <img src={logo} />
                        <span>Metapet</span>
                    </a>
                </HeaderLogo>


                <HeaderUser>
                    <Login>
                        <a href="#none">로그인</a>
                    </Login>
                </HeaderUser>
            </HeaderContainer>

            {/* <HeaderContainer></HeaderContainer>

            <HeaderContainer></HeaderContainer> */}
        </Wrapper>
    );
}

export default Header;
