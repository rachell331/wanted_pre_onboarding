import React from 'react';
import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ data }) {
  return (
    <TextBox>
      <Title>{data.title}</Title>
      <SubTitle>{data.subtitle}</SubTitle>
      <GoToPage>바로가기 &gt;</GoToPage>
    </TextBox>
  );
}

const TextBox = styled.div`
  position: absolute;
  left: 3%;
  bottom: 10%;
  width: 330px;
  height: 136px;
  background-color: ${({ theme }) => theme.bgColor};
  border-radius: 5px;
  z-index: 1;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  padding: 25px 20px 0;
  font-size: 1.125rem;
  font-weight: 600;
`;

const SubTitle = styled.h3`
  padding: 0 20px 25px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 0.875rem;
  font-weight: normal;
`;

const GoToPage = styled.button`
  padding: 13px 20px;
  color: ${({ theme }) => theme.mainColor};
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
`;
