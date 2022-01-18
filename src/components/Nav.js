import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Nav() {
  return (
    <Container>
      <NavWrapper>
        <Menu src="/images/icon-menu.png" />
        <Link to="/" className="anchor">
          <Logo src="/images/logo.png" />
        </Link>
        <MainMenu>
          {MENU_DATA.map((menu, index) => (
            <MenuTitles key={index}>{menu}</MenuTitles>
          ))}
        </MainMenu>
        <Link to="/" className="search anchor">
          <AiOutlineSearch className="searchImg" />
        </Link>
        <ServiceWrapper>
          <Link to="/" className="anchor">
            <SignIn>회원가입/로그인</SignIn>
          </Link>
          <Business>기업 서비스</Business>
        </ServiceWrapper>
      </NavWrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
`;

const NavWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;

  .anchor {
    display: block;
    height: 100%;
  }
  .search {
    color: #333;
    text-decoration: none;

    .searchImg {
      width: 28px;
      height: 28px;
      margin: 11px 20px 0 0;
      object-fit: cover;
    }
  }
`;

const Menu = styled.img`
  display: block;
  margin: 17.5px 0;
  height: 15px;
  object-fit: contain;
`;

const Logo = styled.img`
  display: block;
  height: 28px;
  margin: 10px;
  margin-left: 10px;
  object-fit: contain;
`;

const MainMenu = styled.ul`
  display: flex;
  justify-content: center;
  width: 63%;
  margin: 0;
`;

const MenuTitles = styled.li`
  position: relative;
  margin-right: 35px;
  color: ${({ theme }) => theme.fontColor};
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  line-height: 50px;
  list-style: none;
  cursor: pointer;

  &:nth-child(5)::after,
  &:nth-child(7)::after {
    content: 'New';
    position: absolute;
    top: -0.5rem;
    right: -1rem;
    color: ${({ theme }) => theme.mainColor};
    font-size: 0.5rem;
  }
`;

const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;

  .anchor {
    display: inline-block;
    line-height: 50px;
    text-decoration: none;
    color: ${({ theme }) => theme.fontColor};
  }
`;

const SignIn = styled.p`
  position: relative;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: -0.6px;

  &::after {
    content: '|';
    position: absolute;
    left: 120%;
    color: ${({ theme }) => theme.borderColor};
  }
`;

const Business = styled.button`
  padding: 5px 10px;
  color: #777;
  background-color: ${({ theme }) => theme.bgColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
`;

const MENU_DATA = [
  '채용',
  '이벤트',
  '직군별 연봉',
  '이력서',
  '커뮤니티',
  '프리랜서',
  'AI 합격예측',
];
