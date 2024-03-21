import styled from "styled-components";

// footer link icon
import telegram from '../../assets/images/footer/telegram_icon.png';
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
    padding: 22px 16px 60px;
    background-color: #F5F5F5;
`;

const FooterInfo = styled.div`
    margin-bottom: 32px;
`;

const FooterLink = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 29px;

    a {
        width: 122px;
        height: 46px;
        border: 1px solid #0000001A;
        border-radius: 11px;
        display: flex;
        margin: 0 4px;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        font-weight: 400;
    }
`;

const FooterIcon = styled.div`
    ul {
        display: flex;
        justify-content: center;
        align-items: center;

        li {
            padding: 0 6px;

            img {
                width: 32px;
                height: 32px;
            }
        }
    }
`;

const FooterTerms = styled.div`
    margin-bottom: 12px;

    & > span {
        display: block;
        margin-bottom: 13px;
        font-size: 13px;
        font-weight: 500;
    }
`;

const TermsList = styled.ul`
    li {
        font-size: 13px;
        font-weight: 500;
        line-height: 19px;
        margin-bottom: 8px;
        display: flex;
        justify-content: left;
        align-items: flex-start;

        &:last-child {
            width: 115px;
            flex-shrink: 0;
            margin-bottom: 0;
        }

        span {
            /* display: block; */

            &:first-child {
                flex-shrink: 0;
                padding-right: 5px;
                font-weight: 400;
                color: #66666680;
            }

            &:last-child {
                color: #666666;
            }
        }
    }
`;

const FooterCopyright = styled.div`
    margin-bottom: 29px;
    
    & span {
        font-size: 13px;
        font-weight: 500;
        line-height: 19px;
        color: #909090;
    }
`;

const FooterMenu = styled(FooterIcon)`
    width: 100%;
    height: 60px;
    background: #FFFFFF;
    position: fixed;
    left: 0;
    bottom: 0;
    
    ul {
        height: 60px;
        justify-content: center;
        align-items: center;
        li {
            padding: 0 30px;

            img {
                width: 26px;
                height: 26px;
            }
        }
    }

`;

function Footer() {
    return (
        <Wrapper>
            <FooterInfo>
                <FooterLink>
                    <a href="#none">고객센터</a>
                    <a href="#none">이용약관</a>
                    <a href="#none">개인정보처리</a>
                </FooterLink>
                <FooterTerms>
                    <span>메타펫</span>
                    <TermsList>
                        <li>
                            <span>대표</span>
                            <span>박성용</span>
                        </li>
                        <li>
                            <span>사업자등록번호</span>
                            <span>839-42-01066</span>
                        </li>
                        <li>
                            <span>통신판매업소신고번호</span>
                            <span>서울시 00호</span>
                        </li>
                        <li>
                            <span>회사주소</span>
                            <span>
                                경기도 안양시 동안구 시민대로 327번길 11-41(관양동 1744),
                                안앙창업지원센터 3층 3186호
                                연구개발전담부서 서울시 종로구 지봉로 81,
                                카페24창업센터 창신점 A08호
                            </span>
                        </li>
                        <li>
                            <span>Email</span>
                            <span>service@metapetstudio.com</span>
                        </li>
                    </TermsList>

                </FooterTerms>
                <FooterCopyright>
                    <span>Copyright © Metapet All Rights Reserved</span>
                </FooterCopyright>

                <FooterIcon>
                    <ul>
                        <li>
                            <a href="#none"><img src={telegram} /></a>
                        </li>
                        <li>
                            <a href="#none"><img src={discord} /></a>
                        </li>
                        <li>
                            <a href="#none"><img src={instagram} /></a>
                        </li>
                        <li>
                            <a href="#none"><img src={twitter} /></a>
                        </li>
                        <li>
                            <a href="#none"><img src={kakao} /></a>
                        </li>
                    </ul>
                </FooterIcon>
            </FooterInfo>

            <FooterMenu>
                <ul>
                    <li>
                        <a href="#none"><img src={home} /></a>
                    </li>
                    <li>
                        <a href="#none"><img src={product} /></a>
                    </li>
                    <li>
                        <a href="#none"><img src={cart} /></a>
                    </li>
                    <li>
                        <a href="#none"><img src={user} /></a>
                    </li>
                </ul>
            </FooterMenu>
        </Wrapper>
    );
}

export default Footer;
